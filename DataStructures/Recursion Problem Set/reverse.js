function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  let rev = [];
  if (str.length === 0) return [];
  rev.push(str[str.length - 1]);
  return rev.concat(reverse(str.slice(0, -1))).join("");
}

console.log(reverse("rithmschool"));
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
