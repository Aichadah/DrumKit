
var Nbuttons=document.querySelectorAll(".drum").length;
for( var i=0; i<Nbuttons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    
    var buttonletter=this.innerHTML;
   switch (buttonletter) {
    case "A":
         var tom1=new Audio("sounds/tom-1.mp3");
         tom1.play();
        break; 
     case "I":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;   
     case "C":
       var tom2=new Audio("sounds/tom-2.mp3");
       tom2.play();
       break;
    case "H":
        var crash=new Audio('sounds/crash.mp3');
        crash.play() ;
        break;
     case "M":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play() ; 
        break;
    case "E":
        var kick=new Audio("sounds/kick-bass.mp3");
        kick.play() ;
        break;
    case "Y":
         var tom4=new Audio("sounds/tom-4.mp3");
         tom4.play() ;    
         break;        
    default: console.log(buttonletter);
        break;
   }
}
         
);
}



