// let min = Math.min;

/**
 * let Math = {
  min: function min(numberOne, numbertwo) {
    return numbertwo;
  },
};
console.log(Math.min);
This thing or method 0r function is already created in js therefore we do not need to
create this again
 */

let min = Math.min(10, 18, 8, 2, 90, 1, 100, 50, 80, -99);
console.log(`Minimum Number is ${min}`);
let max = Math.max(0, 18, 8, 2, 90, 1, 100, 50, 80, -99);
console.log(`Maximum Number is ${max}`);

let PI = Math.PI;
console.log(`Value of PI is ${PI}`);

let abs = Math.abs(-80);
console.log(`Absolute value is ${abs}`);

// Converting a floating point number into a full integer number
console.log(Math.round(2.25));
console.log(Math.round(5.7));
// dowewards
console.log(Math.floor(5.7));
// upwards
console.log(Math.ceil(5.7));
// Random number
console.log(Math.random() * 100);
