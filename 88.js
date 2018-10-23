// 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

// 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// 输出: [1,2,2,3,5,6]

var merge = function(nums1, m, nums2, n) {
    let arr = [];
    let i=0, j=0;
    while(i < m && j < n) {
        if(nums1[i] < nums2[j]) {
            arr.push(nums1[i])
            i++;
        } else{
            arr.push(nums2[j])
            j++
        }
    }
    if(i < m) {             // 最差的一种情况可能while循环中，push进去所有的nums2值，这里需要把nums1的push进去
        while(i < m) {
            arr.push(nums1[i])
            i++
        }
    }
    else if(j < n) {        // 最差的一种情况可能while循环中，push进去所有的nums1值，这里需要把nums2的push进去
        while(j < n) {
            arr.push(nums2[j])
            j++
        }
    }
    for(let q = 0; q < m+n; q++) {
        nums1[q] = arr[q]
    }
    return nums1;
};

let nums1 = [1, 2, 3];
let nums2 = [2, 5, 6];
let m = 3 , n = 3;
let res = merge(nums1, m, nums2, n);
console.log(res);