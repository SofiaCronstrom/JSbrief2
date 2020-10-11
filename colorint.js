window.addEventListener("load", function(){
   //Loopvariable
   var i;
  //Variables for buttons
   var yBtn = document.getElementById("yBtn");
   var gBtn = document.getElementById("gBtn");
   var bBtn = document.getElementById("bBtn");
   var rBtn = document.getElementById("rBtn");
   var allBtn = document.getElementById("allB");
  
   //Variables for boxes
   var boxes = document.getElementsByClassName("container")[0];
   var yellow = boxes.getElementsByClassName("yellowBox");
   var green = boxes.getElementsByClassName("greenBox");
   var blue = boxes.getElementsByClassName("blueBox");
   var red = boxes.getElementsByClassName("redBox");
   
     //Added eventlisteners on the buttons
     yBtn.addEventListener("click", yellowShow);
     gBtn.addEventListener("click", greenShow);
     bBtn.addEventListener("click", blueShow);
     rBtn.addEventListener("click", redShow);

    //Shows yellow squares
    function yellowShow() {

     for (i=0; i<yellow.length; i++){
     yellow[i].style.visibility = "visible";
    
     } 
     return yellow[i]; 
    }
    //Shows green squares
    function greenShow() {
    
     for (i=0; i<green.length; i++){
     green[i].style.visibility = "visible";
     
    } 
  }
    //Shows blue squares
    function blueShow() {
    
     for (i=0; i<blue.length; i++){
     blue[i].style.visibility = "visible";
     }
   }
    //Shows red squares
    function redShow() {

     for (i=0; i<red.length; i++){
     red[i].style.visibility = "visible";
    }
   }
   
   allBtn.addEventListener("click", hide);
    
   function hide(){
    window.location.reload();
   }
 
});