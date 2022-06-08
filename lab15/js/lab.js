/**
  * Author: Naomi <nwalzer@ucsc.edu>
  * Created: 04.25.2022
  *
  * (c) Copyright by Blub Corp.
  **/

  console.log("loaded lab 2 js");

  var rawData;
  var complete = false;
  //$("#activate").click(function() {getAPI()});

  $("#activate").click(function() {getAPI()});
  //Using the core $.ajax() mathod
  function getAPI() {
    complete = false
    ajax();
  }

  function ajax() {
    $.ajax({
      url: "https://api.nasa.gov/planetary/apod"
      data: {
          api_key: "czpSWRrisfWEKxaDexsxWCLRB79q31NF3Mt7y3Co",
        },
      type: "GET",
      dataType : "json",
      success : function(data) {
        rawData = data;
        console.log(data);
        parseJson(data);
      },
      complete: function() {
        complete = true;
        console.log("done and done");
      }
    })
    console.log("haha");
  }

  function parseJson(data) {
    let imgLink = rawData.hdurl;
    let desc = rawData.explanation;
    let title = rawData.title;
    let date = rawData.date;
    console.log(imgLink);
    console.log(desc);
    $("#apodImage").attr("src",imgLink);
    $("#apodDesc").html(desc);
    $("#apodDate").html(date);
    $("#apodTitle").html(title);
  }
