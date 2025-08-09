/**
 * Function that will take array as the parameter
 * and give me the avg of the odd numbers
 */
function oddAvg(arr) {
  let sum = 0;
  count = 0;
  for (let num of arr) {
    if (num % 2 !== 0) {
      sum += num;
      count++;
    }
  }
  let avgOdd = parseFloat(sum / count).toFixed(2);
  return avgOdd;
}

let numbers = [42, 13, 58, 65, 81, 96, 3];
let avgOdd = oddAvg(numbers);
console.log(`Avarage of the odd numbers is ${avgOdd}`);

// Another- Way of founding the avg from an array only for even numbers

function evenAvg(arr) {
  let even = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      even.push(num);
    }
  }
  let evenElements = even.length;
  let sum = 0;
  for (let num of even) {
    sum += num;
  }
  return parseFloat((sum / evenElements).toFixed(2));
}

let avgEven = evenAvg(numbers);
console.log(`Avarage of only even numbers is : ${avgEven}`);
