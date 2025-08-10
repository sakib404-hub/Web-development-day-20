let x = 5;
let y = 10;

console.log(x, y);

function swap(x, y) {
  let temp = x;
  x = y;
  y = temp;
  console.log(`A is = ${x}, B is = ${y}`);
}
swap(10, 20);

let m = 20;
let n = 30;

console.log(m, n);
[m, n] = [n, m];
console.log(m, n);
