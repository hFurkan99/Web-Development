function kmp(str, subStr) {
  let count = 0,
    i = 0,
    j = 0;

  while (i < str.length) {
    if (str[i] === subStr[j]) {
      j++;
      i++;

      if (j === subStr.length) {
        count++;
      }
    } else {
      i += -j + 1;
      j = 0;
    }
  }
  return count;
}

console.log(kmp("sadomgmgsadomgasomasdas", "omg")); // 2
console.log(kmp("ananakin", "anakin")); // 1
console.log(kmp("anagranagram", "anagram")); // 1
console.log(kmp("anagranagram", "anagramk")); // 0
