function isPalindrome(x: number): boolean {
  return x === parseInt(x.toString().split("").reverse().join(""));
}
