function solution(number) {
  let sum = 0;
  for (var i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    } else if (number < 0) {
      return -1;
    }
  }
  return sum;
}

console.log(solution(16));
