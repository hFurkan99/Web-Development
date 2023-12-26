function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j > 0 && array[i] >= array[j]; j--) {
      if (array[j] <= array[j - 1]) {
        temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      } else break;
    }
  }
  return array;
}

console.log(
  insertionSort([
    10, 8, 7, 12, -20, -17, 17, 30, 27, 29, 25, -11, 10, 11, 5, 40, -5, 36, 6,
    4, 16, 23, 19,
  ])
);

function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    // döngüden çıkmadan önce j 1 tane daha azaldığı için aşağıdaki arr[0] yukardaki arr[1]
    arr[j + 1] = currentValue;
  }
  return arr;
}

console.log(
  insertionSort2([
    10, 8, 7, 12, -20, -17, 17, 30, 27, 29, 25, -11, 10, 11, 5, 40, -5, 36, 6,
    4, 16, 23, 19,
  ])
);
