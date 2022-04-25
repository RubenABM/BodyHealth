  $(document).ready(function() {

    function change() {
      var x = document.getElementsByClassName("marker");
      if (x.style.visibility ==  "visible") {
          x.style.visibility = "hidden";
      } else {
          x.style.visibility = "visible";
      }  
    //?     
  } change();
  
  function change2(){
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

}); 