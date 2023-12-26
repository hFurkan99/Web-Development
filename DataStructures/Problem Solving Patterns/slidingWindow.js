function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }

  let tempSum = 0;
  let maxSum = 0;
  //num kadar terimlerin toplamı alındı
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;

  // num kadar olan sayıların toplamını oluşturan sayılarının ilkinin değeri çıkartılıp num kadar sayı içeren kümenin hemen sonrasındaki sayı toplama eklendi
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum); // Bu kümelerden en büyük olan bulundu
  }

  return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
