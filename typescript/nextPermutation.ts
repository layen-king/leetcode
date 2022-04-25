// 下一个排列

// 中等

// 整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

// 例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
// 整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

// 例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
// 类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
// 而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
// 给你一个整数数组 nums ，找出 nums 的下一个排列。

// 必须 原地 修改，只允许使用额外常数空间。

//  

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[1,3,2]
// 示例 2：

// 输入：nums = [3,2,1]
// 输出：[1,2,3]
// 示例 3：

// 输入：nums = [1,1,5]
// 输出：[1,5,1]
//  

// 提示：

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100
// 通过次数296,743提交次数790,704

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/next-permutation
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function nextPermutation(nums: number[]): void {
  // [1,3,2] => [2,3,1] => [2,1,3]
  // [1,4,3,2]=>[2,4,3,1] => [2,1,4,3] => [2,1,3,4]
  // [3,2,4,1] => [4,2,3,1]=> [4,1,3,2]=> [4,1,2,3]
  // [5,3,2,4,1] => [5,3,4,2,1] => [5,3,4,1,2]
  // [4,2,0,2,3,2,0] => [4,2,0,3,2,2,0]=>[4,2,0,3,0,2,2]
  // 倒序取值,向前遍历, 如果不是升序,记录索引,开始排序
  let index = -1
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      index = i - 1
      // 就地交换
      break
    }
  }
  // 当index >-1 时,,对index后进行排序即可
  if (index > -1) {
    const first = nums[index]
    quickSort(nums, index, nums.length - 1)
    //[2,3,2,0] [0,2,2,3]=>[3,2,2,0] => [3,0,2,2]
    // 找到index后比index索引大的第一个数,交换第一个
    for (let i = index + 1; i < nums.length; i++) {
      if (nums[i] > first) {
        const tem = nums[i]
        nums[i] = nums[index]
        nums[index] = tem
        break
      }
    }
    quickSort(nums, index + 1, nums.length - 1)
  } else {
    // 此时找不到下一个排序,直接进行最小排序
    quickSort(nums, 0, nums.length - 1)
  }
}

function quickSort(arr: number[], left: number, right: number) {
  let l = left, r = right;
  //pivot 中轴值
  let pivot = arr[Math.floor((right + left) / 2)];
  let temp;//临时值
  //while循环的目的是让比privot值小的放左边
  //比pivot值大放右边
  while (l < r) {
    //在pivot的左边一直找，找到大于pivot的值,才退出
    while (arr[l] < pivot) {
      l += 1;
    }
    //在pivot的右边一直找，找到小于等于pivot的值，才退出
    while (arr[r] > pivot) {
      r -= 1;
    }
    //说明l>=说明pivot的左右两的值，已经按照左边全部是
    //小于等于pivot值，右边全部是大于等于pivot
    if (l >= r) {
      break;
    }
    temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;

    //如果交换完后，发现arr[l] == pivot值相等，r--,前移
    //为什么要r--，因为这是为了防止arr[l] == pivot和arr[r] == pivot
    //情况下，出现l和r位置不动，造成死循环的情况，而为什么要r--，而不是l++
    //因为在l<=r的情况下，r--，仍然可以满足r到right之间的值大于等于pivot，因为
    //r--至多退到l这个位置，而arr[l] == pivot，所以情况满足，但是如果l++,
    //因为l可能会前进到r这个位置，而arr[r]的值可能是大于pivot,这样就会造成
    //left到l之间的值有一个大于pivot，这样就不满足了快速排序算法的规定，从而使得算法结果可能出现错误
    //快速排序算法的规定是left到l之间的值必须小于等于pivot，
    //r到right之间的值必须大于等于pivot

    if (arr[l] == pivot) {
      r -= 1;
    }
    //如果交换完后，发现这个arr[r] == pivot相等,l++，后移
    if (arr[r] == pivot) {
      l += 1;
    }
  }
  //如果l == r,必须l++, r--，否则会出现栈溢出
  //该情况主要针对于递归到最下一层，也就是只有一个值进行快速排序时，就是l=r=left=right的情况下
  //l++,r--会造成left < r和right > l条件不满足，从而停止继续递归，不然就是死循环
  if (l == r) {
    l++;
    r--;
  }
  //向左递归
  if (left < r) {
    quickSort(arr, left, r)
  }
  //向右递归
  if (right > l) {
    quickSort(arr, l, right)
  }
}