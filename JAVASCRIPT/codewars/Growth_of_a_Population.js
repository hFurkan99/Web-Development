function nbYear(p0, percent, aug, p) {
  let n = 0;
  while (p0 < p) {
    n++;
    p0 += p0 * (percent / 100) + aug;
    p0 = Math.floor(p0);
  }
  return n;
}

console.log(nbYear(1500000, 2.5, 10000, 2000000));
