function maxSubarraySum(arr, num) {
  // add whatever parameters you deem necessary - good luck!

  if (arr.length < num) return null;
  // En baştan başlayarak num kadar elemanı topla
  let tempSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null

//Verilen dizideki ikinci parametredeki kadar ardışık sayılar toplanacak. Her alt dizinin toplamları karşılaştırılıp en büyük toplam sonucu döndürelecek
