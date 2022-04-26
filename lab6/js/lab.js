/**
  * Author: Naomi <nwalzer@ucsc.edu>
  * Created: 04.25.2022
  *
  * (c) Copyright by Blub Corp.
  **/

  //Define Variables
  myTransport = [
    "Toyota Matrix", "Muni", "Walking"
    ]

  myMainRide = {
    make: "Toyota",
    model: "Matrix",
    color: "white",
    year: 2010,

  };


// Outputs of variables
document.writeln("My Main Ride:" + myTransport + "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
