$(document).ready(function(){
  for(var i=1;i<=256;i++)
  {
    var div = document.createElement("div");
    div.style.background = "blue";
    div.style.outline = "1px solid red";
    div.style.margin = "0 0";
    div.style.width = "6%";
    div.style.height ="6%";
    div.style.display ="inline-block";
    div.style.vertical = "top";
    console.log("in for loop");
    document.getElementById("main").appendChild(div);
  }

});
