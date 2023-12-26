String.prototype.toJadenCase = function () {
  var returnString = [];
  var words = this.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    returnString.push(word[0].toUpperCase() + word.slice(1));
  }
  return returnString.join(" ");
};

let str = "Benim adım furkan";
console.log(str.toJadenCase());
