function sameFrequency(nums1, nums2) {
  // good luck. Add any arguments you deem necessary.

  let frequencyCounter = {};
  const strNums1 = nums1.toString();
  const strNums2 = nums2.toString();

  if (strNums1.length !== strNums2.length) {
    return false;
  }

  for (const num of strNums1) {
    frequencyCounter[num]
      ? (frequencyCounter[num] += 1)
      : (frequencyCounter[num] = 1);
  }

  for (const num of strNums2) {
    if (!(num in frequencyCounter)) {
      return false;
    } else {
      frequencyCounter[num] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
