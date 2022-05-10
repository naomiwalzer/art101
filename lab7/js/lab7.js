/**
 * Author:    Naomi Walzer
 * Created:   05.04.2022
 *
 * (c) Copyright by Blub Corp.
 **/

 //Step 2 of Task 2
 function retrieveUserName(){
      //Step 3 of Task 2
      var userName = window.prompt("Give me your username!");
      console.log("userName=",userName);
      //Step 4 of Task 2
      //changed to an array
      var usernameArray = userName.split('');
      console.log("usernameArray=", usernameArray);
      //sorting the array
      var usernameArraySort = usernameArray.sort();
      console.log("usernameArraySort=", usernameArraySort);
      //array turend back to string
      var sortedUsername = usernameArraySort.join();
      console.log("sortedUsername=", sortedUsername);
      //Step 5 of Task 2
      return sortedUsername;
 }


 //Step 6 of Task 2
 document.writeln("Your name will now be given back alphabetized",
      retrieveUserName(), "</br>");
