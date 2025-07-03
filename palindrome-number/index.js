function palindrome(x) {
  const originalNumber = x;
  let rev = 0;

  if (x < 0) return false;

  while (x > 0) {
    let rem = x % 10;
    rev = 10 * rev + rem;
    x = Math.floor(x / 10);
  }
  return rev === originalNumber;
}
let x = 101;
const res = palindrome(x);
console.log(res);
