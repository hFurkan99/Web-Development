function naiveStringSearch(str, subStr) {
  let subStrCount = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < subStr.length; j++) {
      if (subStr[j] !== str[i + j]) break;
      if (j === subStr.length - 1) subStrCount++;
    }
  }
  return subStrCount;
}

console.log(naiveStringSearch("qsomgaocswomgaqjhk", "omg"));
