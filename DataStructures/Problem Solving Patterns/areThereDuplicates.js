function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  args.sort();

  let i = 0;

  for (let j = 1; j < args.length; j++) {
    if (args[i] === args[j]) {
      return true;
    } else {
      i++;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
console.log(areThereDuplicates("a", "b", "c", "d", 2, 3, "a")); // true
