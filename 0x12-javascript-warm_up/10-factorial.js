#!/usr/bin/node
function factorial (num) {
  if (isNaN(num)) { return 1; }
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
console.log(factorial(parseInt(process.argv[2])));
