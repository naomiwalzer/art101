/**
  * Author: Naomi <nwalzer@ucsc.edu>
  * Created: 04.25.2022
  *
  * (c) Copyright by Blub Corp.
  **/

  console.log("I am linked");

  //sets the button function as soon as the JS is loaded
  $("#button").click(function() {setUpLoop()});

  //function called by button. Grabs the form input, and makes sure it is a
  //number before passing it to the getFizz function
  function setUpLoop() {
    let count = $("#input").val();
    let countInt = parseInt(count); //converts to int from string

    if (Number.isInteger(countInt)) { //Is it a real int?
      if (countInt <= 1000) { //anything bigger than 1000 is too big
        runLoop(countInt);
      } else {alert("Please use a number smaller than 1000!")}
    } else {
      alert("Please input a valid integer for the loop count!");
    }
  }

  //the loop function
  function runLoop(count) {
    $("#output").html("");
    for (let i = 1; i <= count; i++) {
      tempFizz = getFizz(i);
      //console.log(tempFizz);
      $("#output").append("<p>" + tempFizz + "</p>");
    }
  }

  //getFizz does the actual Fizzing.
  function getFizz(i) {
    //let returnNum = i;
    let returnString = ""; //initializes as empty string!
    if (i % 3 == 0) {
      returnString += "Fizz";
    }
    if (i % 5 == 0) {
      returnString += "Fizz";
    }
    if (i % 7 == 0) {
      returnString += "Boom";
    }
    if (returnString.length == 0) {
      return i; //just gives the number back if nothing was added to string
    }
    returnString = i + " - " + returnString + "!";
    return returnString;
  }
