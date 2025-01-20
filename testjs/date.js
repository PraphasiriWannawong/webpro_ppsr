// date.html 
//   Illustrates the use of the Date object by 
//   displaying the parts of a current date and
//   using two Date objects to time a calculation
    
// Get the current date

      var today = new Date();

// Fetch the various parts of the date

      var dateString = today.toLocaleString();
      // var day = today.getDay();
	  //Write your own code here 
      var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var day = daysOfWeek[today.getDay()];


// Display the parts

      document.write(
        "Date: " + dateString + "<br />",
        "Day: " + day + "<br />");
	//Write your own code here 
