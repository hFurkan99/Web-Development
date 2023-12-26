function bubbleSort(arr) {
  let temp;
  let noSwaps;
  for (let i = arr.length; 0 < i; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(
  bubbleSort([
    10, 8, 7, 12, -20, -17, 17, 30, 27, 29, 25, -11, 10, 11, 5, 40, -5, 36, 6,
    4, 16, 23, 19,
  ])
);
