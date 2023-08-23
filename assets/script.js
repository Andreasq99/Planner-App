// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.




$(function () {
  var hourArr =[$("#hour-9"), $("#hour-10"), $("#hour-11"), $("#hour-12"), $("#hour-13"), $("#hour-14"), $("#hour-15"), $("#hour-16"), $("#hour-17")];
  var btnArr = [];
  var txtArr = ["", "", "", "", "", "", "", "", ""];
  for(i=0;i<hourArr.length;i++){
    btnArr[i] = hourArr[i].children("button");
  }
  console.log(btnArr);
  console.log(hourArr);
  if(localStorage.getItem("stEvArr")===null){
    localStorage.setItem("stEvArr", JSON.stringify(["","","","","","","","",""]));
  } else {
    txtArr = JSON.parse(localStorage.getItem("stEvArr"));
  }
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  /* Doesn't work; index isn't passed to the click function, confused why indexOf doesn't work here  
  for(i=0;i<btnArr.length;i++){
    console.log(btnArr[i]);
    console.log(txtArr[i]);
    hourArr[i].children("button").on("click", function(event){
      console.log(event);
      var x = btnArr.indexOf($(this));
      console.log(x);
      console.log($(this));
      txtArr[x] = $(this).parent().children("textarea").val().trim();
      console.log(txtArr);
    });
  } */

  btnArr[0].on("click",function(event){
    txtArr[0] = $(this).parent().children("textarea").val().trim();
    localStorage.setItem("stEvArr", JSON.stringify(txtArr));
  });
  btnArr[1].on("click",function(event){
    txtArr[1] = $(this).parent().children("textarea").val().trim();
    localStorage.setItem("stEvArr", JSON.stringify(txtArr));
  });
  btnArr[2].on("click",function(event){
    txtArr[2] = $(this).parent().children("textarea").val().trim();
    localStorage.setItem("stEvArr", JSON.stringify(txtArr));
  });
  btnArr[3].on("click",function(event){
    txtArr[3] = $(this).parent().children("textarea").val().trim();
    localStorage.setItem("stEvArr", JSON.stringify(txtArr));
  });
  btnArr[4].on("click",function(event){
    txtArr[4] = $(this).parent().children("textarea").val().trim();
    localStorage.setItem("stEvArr", JSON.stringify(txtArr));
  });
  btnArr[5].on("click",function(event){
    txtArr[5] = $(this).parent().children("textarea").val().trim();
    localStorage.setItem("stEvArr", JSON.stringify(txtArr));
  });
  btnArr[6].on("click",function(event){
    txtArr[6] = $(this).parent().children("textarea").val().trim();
    localStorage.setItem("stEvArr", JSON.stringify(txtArr));
  });
  btnArr[7].on("click",function(event){
    txtArr[7] = $(this).parent().children("textarea").val().trim();
    localStorage.setItem("stEvArr", JSON.stringify(txtArr));
  });
  btnArr[8].on("click",function(event){
    txtArr[8] = $(this).parent().children("textarea").val().trim();
    localStorage.setItem("stEvArr", JSON.stringify(txtArr));
  });

  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var hourOfDay = dayjs().format("HH");
  console.log(hourOfDay);
  for(i=0; i<hourArr.length;i++){
    var j = i+9;
    if(j<hourOfDay){
      console.log("Past");
      hourArr[i].addClass("past");
    } else if (j==hourOfDay){
      console.log("Present");
      hourArr[i].addClass("present");
    } else if (j>hourOfDay){
      console.log("Future");
      hourArr[i].addClass("future");
    }
    console.log(j);
  }

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  for(i=0;i<hourArr.length;i++){
    var j = i+9;
    var identity = "#hour-"+j;
    console.log(identity);
    $(identity).children("textarea").val(txtArr[i]);
  }

  // TODO: Add code to display the current date in the header of the page.
  
  $("#currentDay").html(dayjs().format("dddd, MMMM D, YYYY"));
});