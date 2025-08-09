function isLeapYear(year) {
  //This is a simple logic for finding leapyear which is not 100 percent accurate
  if (year % 4 === 0) {
    console.log(`${year}, This Year is Leap Year`);
  } else {
    console.log(`This Year is not a leap Year`);
  }
}
isLeapYear(2043);

/**
 * To find 100 percent accuracy we have to make  another function which will be 99.99 percent accurate
 * the year not divisable by 100 but totaly divisable by 4
 */

function isLeapYear2(year) {
  if ((year % 100 !== 0 && year % 4 === 0) || year % 400 === 0) {
    console.log(`${year}: Therefore, this year is a leap year.`);
  } else {
    console.log(`${year}: This year is not a leap year.`);
  }
  //   return if((year % 100 !== 0 && year % 4 === 0) || year % 400 === 0);
  //if i did like to return the true or the false value i could do that
}

isLeapYear2(1600);
isLeapYear2(2100);
isLeapYear2(2400);
isLeapYear2(1900);
