/**
  * Author: Naomi <nwalzer@ucsc.edu>
  * Created: 04.25.2022
  *
  * (c) Copyright by Blub Corp.
  **/


  console.log("JS has loaded!");

  //primary function called by the HTML button.
  function runScramble() {
    let name = getUsername();
    console.log(name);
    scramble(name)
  }
   //simple function to get username from user
function getUsername() {
  let name = prompt("Please enter your name:","Your Name");
  return name;
}

//scramble the username
function scramble(username) {
  console.log(username);

//split the string
var nameArraySort = nameArray.sort(function(a, b){return 0.5 - Math.random()});
console.log("nameSorted=", nameSorted);

//join array back to a string
var nameSorted = nameArray.join('');
console.log("nameSorted=", nameSorted);

//print new name: fills a div with a hard coded P element
document.getElementById("output").innerHTML = "<p id='output'>Here is your nem name: <b>" + nameSorted + "</p>";
}
