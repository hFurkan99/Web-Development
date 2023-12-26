function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        temp = arr[i];
        arr[i] = min;
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(
  selectionSort([
    10, 8, 7, 12, -20, -17, 17, 30, 27, 29, 25, -11, 10, 11, 5, 40, -5, 36, 6,
    4, 16, 23, 19,
  ])
);
