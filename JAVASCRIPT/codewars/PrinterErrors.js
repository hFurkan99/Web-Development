function printerError(s) {
  var hataliHarf = 0;
  for (let i = 0; i < s.length; i++) {
    var harf = s[i];
    if (harf < "a" || harf > "m") {
      hataliHarf++;
    }
  }
  return `${hataliHarf}/${s.length}`;
}

var s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
console.log(printerError(s));
