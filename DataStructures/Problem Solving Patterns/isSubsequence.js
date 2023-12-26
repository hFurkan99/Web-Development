function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.

  if (str1.length > str2.length) {
    return false;
  }

  if (!str1) return true;

  let i = 0;
  let tempIndex = 0;

  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      i++;
      //Sonradan aranan karakterin indexi aranan stringde önceki karakterin indexinden daha düşükse false döner
      if (tempIndex > j) {
        return false;
      }
      tempIndex = j;
    }
    if (i === str1.length) return true;
  }
  return false;

  //ilk stringin ilk harfine ulaş, diğer dizide ara
  // Yoksa false dön, varsa diğer karaktere geç ve aynı işlemi tekrarla
  // Sıralama önemli
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)

function isSubsequence2(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}
