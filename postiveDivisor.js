/** This program is to find positive divisors of the number provided. as an extension I checked 
 * for the number , weather it is +ve or -ve or 0. if -ve or 0 then printing a message that enter valid
 * number, or do the logic as per the stmt.
 */

const totalArray = [];
const positiveDivisor = function (num) {
  if (Math.sign(num) == -1 || Math.sign(num) == 0) {
    console.log(`please enter valid number,provided number is either negative or 0`);
  } else {
    for (var i = 1; i <= num; i++) {
      if (num % i === 0) {
        totalArray.push(i);
      }
    }
  }

  return totalArray;
}