
// document.querySelector("button").addEventListener("click",onClick);

// function onClick(){
//         alert("I got clicked");
//      }

// // we added event lisntener for 1st button, we can put this func durectly inplace of onClick also, like we did below


var numDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<numDrumButtons;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        // "this" keyword refers to the button selected
        var buttonInnerHtml=this.innerHTML;
        
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    });

}


// keyboard press, we will add the event listener to whole document
document.addEventListener("keydown",function(event){  // "event " is the event which triggered the "keydown"
     makeSound(event.key);
     buttonAnimation(event.key);

});


// make sound func


function makeSound(key){
    switch (key) {
        case "w":
            var tom1 =new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 =new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 =new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            
        case "d":
            var tom4 =new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            
        case "j":
            var snare =new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash =new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick =new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;


        default:
            break;
    }
}


// function for aimation
function buttonAnimation(currentKey){
    
   var activeButton= document.querySelector("."+currentKey); //selecting the element with class .l or .k or .j etc..
    activeButton.classList.add("pressed");
    // we need to remove this class, after some time so it looks like  animation
    setTimeout(function(){
        activeButton.classList.remove('pressed');
    }, 100);         

    // this means after time 100 , the given function gets executed

}