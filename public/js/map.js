/*function change() {
    var x = document.getElementsByClassName("marker");
    if (x.style.visibility ==  "visible") {
        x.style.visibility = "hidden";
    } else {
        x.style.visibility = "visible";
    }       
}*/

function change(){
    [].forEach.call(document.querySelectorAll(".marker"), function(element) {
      if(element.style.visibility == "visible")
      {
        element.style.visibility = "hidden";
      }
      else if(element.style.visibility == "hidden")
      {
        element.style.visibility = "visible";
      }
    });

  }