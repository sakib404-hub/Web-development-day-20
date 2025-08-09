/**
 * Array has some duplicate elements
 * []
 */

let biriyaniKhor = [
  "abul",
  "babul",
  "cabul",
  "abul",
  "babul",
  "dabul",
  "kibul",
  "kabul",
];
let numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDuplication(arr) {
  let unique = [];
  for (let item of arr) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

console.log(noDuplication(numbers));
console.log(noDuplication(biriyaniKhor));
