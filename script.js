$(document).ready(function(){
  for(var i=1;i<=256;i++) //making the 16x16 grid
  {
    var grid = document.createElement("div");
    grid.style.background = "blue";
    grid.style.outline = "1px solid red";
    grid.style.margin = "0 0";
    grid.style.width = "6%";
    grid.style.height ="5.5%";
    grid.style.display ="inline-block";
    grid.style.vertical = "top";
    console.log("adding 16x16 grid");
    document.getElementById("main").appendChild(grid); //adding each grid square to the main div
  }           //.on is a jQuery function//
  $("#main").on("mouseenter","div",function(){  //when the mouse is in the main div and hovers over an individual grid div
    this.style.background = "red";              // change the background to red
    this.style.outline = "1px solid blue";      // and change the border to blue
  });
  $("#main").on("mouseleave","div",function(){  //when the mouse in in the main div and leaves an individual grid div
    this.style.background = "blue";             // change the background back to blue
    this.style.outline = "1px solid red";       // change the border back to red
  });

});
