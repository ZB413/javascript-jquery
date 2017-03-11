
$(document).ready(function(){
  var gridWidth = 10;
  var gridHeight = 10;
  var gridSize = gridWidth*gridHeight;

  var BuildGrid = function(height,width){
    for(var i=1;i<=gridSize;i++) //making the 16x16 grid
    {
      var grid = document.createElement("div");
      grid.style.background = "blue";
      grid.style.outline = "1px solid red";
      grid.style.margin = "0 0";
      grid.style.width = 100/gridWidth+"%";
      grid.style.height = 100/gridHeight+"%";
      grid.style.display ="inline-block";
      grid.style.vertical = "top";
      console.log("adding grid");
      document.getElementById("main").appendChild(grid); //adding each grid square to the main div
    }           //.on is a jQuery function//
  };

  var EmptyGrid = function(){
    $("#main").empty();
  };

  BuildGrid(gridWidth,gridHeight);
  $("#main").on("mouseenter","div",function(){  //when the mouse is in the main div and hovers over an individual grid div
    this.style.background = "red";              // change the background to red
    this.style.outline = "1px solid blue";      // and change the border to blue
  });

  $("#main").on("mouseleave","div",function(){  //when the mouse in in the main div and leaves an individual grid div
    this.style.background = "blue";             // change the background back to blue
    this.style.outline = "1px solid red";       // change the border back to red
  });

  $("#reset").on("click","p",function(){
    EmptyGrid();
    gridWidth = prompt("How many columns would you like?");
    gridHeight = prompt("How many rows would you like?");
    gridSize = gridWidth*gridHeight;
    BuildGrid(gridWidth,gridHeight);
  });
});
