function averagePair(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  //İki adet pointers ile sayıların üzerinde gezin
  let num1Index = 0;
  let num2Index = 1;
  //Pointerların üzerinde bulunduğu sayıların ortalamasını al, eğer eşitse true döndür
  if (arr.length === 0) {
    return false;
  }

  while (num1Index < arr.length - 1) {
    if ((arr[num1Index] + arr[num2Index]) / 2 === num) {
      return true;
    } else {
      num2Index++;
      if (num2Index === arr.length) {
        num1Index++;
        num2Index = num1Index + 1;
      }
    }
  }

  return false;

  //Eşit değilse ikinci pointerı gezdirmeye devam et.
  //İkinci pointer son elemana geldiği halde şart sağlanmamışsa ilk pointerın indeksini 1 arttır.
}

console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

// Parametre olarak girilen diziden herhangi iki sayının ortalaması ikinci parametredeki sayıyı veriyor mu? (Bu şartları sağlayan birden fazla sayı çifti olaiblir.)

//inputs: sayı dizisi ve beklenen ortalama
// outputs: true/false

function averagePair2(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}
