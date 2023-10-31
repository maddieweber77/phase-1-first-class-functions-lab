// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
    if (array.length >= 2) {
        return [array[0], array[1]];
      } else {
        return array;
      }
    }


const returnLastTwoDrivers = function(array) {
    return array.slice(array.length - 2);
    }

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function(fare) {
        return fare*integer
    }
}

//fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it.
// Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

//selectDifferentDrivers() — This function takes two arguments, an array of the names of Scuber's drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function.
// Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.

function selectDifferentDrivers(arrayOfDrivers, functionChoice) {
    if (functionChoice === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    } else if (functionChoice === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayOfDrivers);
    } else {
        return `Incorrect array!`;
    };
}

// function selectDifferentDrivers(arrayOfDrivers, functionChoice) {
//     if (functionChoice === returnFirstTwoDrivers) {
//       return returnFirstTwoDrivers(arrayOfDrivers);
//     } else if (functionChoice === returnLastTwoDrivers) {
//       return returnLastTwoDrivers(arrayOfDrivers);
//     } else {
//       return "Incorrect function choice!";
//     }
//   }