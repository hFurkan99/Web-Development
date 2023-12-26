function fib(num) {
  // add whatever parameters you deem necessary - good luck!

  if (num <= 2) return 1;

  return fib(num - 1) + fib(num - 2);
}

// fib(9) + fib(8)
// fib(8) + fib(7) + fib(7) + fib(6)

console.log(fib(4)); //1 1 2 3 5 8 13 21 34 55
console.log(fib(10));
fib(4); // 3
fib(10); // 55
fib(28); // 317811
fib(35); // 9227465
