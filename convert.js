/**
 * 12 inches equal to 1 feet
 */
function inchToFeet(inches) {
  //Determining someone height into feet only
  let feet = inches / 12;
  return feet;
}

let height = inchToFeet(160);
console.log(parseFloat(height.toFixed(2)));

//Determining height of someone with feet and inches
function inchestoFeet(inches) {
  let feet = parseInt(inches / 12);
  let inch = inches % 12;
  let height;
  if (inch > 0) {
    height = `His height is ${feet} and ${inch} inches`;
  } else {
    height = `His height is ${feet} Ft`;
  }
  return height;
}

let heights = inchestoFeet(60);
console.log(heights);

function mileToKilometer(mile) {
  let kiloMeter = mile * 1.60934;
  return kiloMeter;
}

let inKilo = mileToKilometer(100);
console.log(inKilo);
