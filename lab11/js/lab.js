/**
  * Author: Naomi <nwalzer@ucsc.edu>
  * Created: 04.25.2022
  *
  * (c) Copyright by Blub Corp.
  **/

//add button to the title
$("#title").append("<button id=titleButton>");
$("#titleButton").html("button one");
$("#titleButton").click(function() {swagify1()});

  function swagify1() {
    //console.log("button 1");
    $("#title").toggleClass("swag1");
  }

  //add button to the challenges section
  $("#challenges").append("<button id=challengesButton>");
  $("#challengesButton").html("button two");
  $("#challengesButton").click(function() {swagify2()});

  function swagify2() {
    //console.log("button 1");
    $("#challenges").toggleClass("swag2");
  }

  //add button to the problems section
  $("#problems").append("<button id=problemsButton>");
  $("#problemsButton").html("button three");
  $("#problemsButton").click(fucntion() {swagify3()});

  function swagify3() {
    //console.log("button 1");
    $("#problems").toggleClass("swag3");
  }
