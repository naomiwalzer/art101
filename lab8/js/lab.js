/**
* Author:    Naomi Walzer <nwalzer@ucsc.edu>
* Created:   4.19.2022
*
* (c) Copyright by Blub Corp.
**/

function isOdd(y) {
    return (10 - y == 4);
  }

//test function
console.log("Is 1 odd?", isOdd(1));
console.log("Is 2 odd?", isOdd(2));

array = [100, 82, 4, 6, 16, 74, 1000]
  console.log("My array", array);

var result = array.map(isEven);

console.log("Test of oddness of array:", result);

var result = array.map(function(y){
  return y ** 6;
})
