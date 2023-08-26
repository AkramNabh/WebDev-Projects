function handleClick(i){
    
    var audio = new Audio(audios[i]);
    audio.play();
}
function handleAudio(){

}
var array = ["w", "a", "s", "d", "j", "k", "l"];
var audios = ["./sounds/crash.mp3","./sounds/kick-bass.mp3", "./sounds/snare.mp3", "./sounds/tom-1.mp3" ,
                "./sounds/tom-2.mp3", "./sounds/tom-3.mp3", "./sounds/tom-4.mp3"];

for(var i = 0; i < array.length; i++){
document.querySelector("." + array[i]).addEventListener("click", function ()
{
    var button = this.innerHTML;
    soundActivator(button);
    buttonAnimation(button);

}
);
}

document.addEventListener("keydown", function(event){
    soundActivator(event.key);
    buttonAnimation(event.key);
}
)


function soundActivator(key){
    switch(key){
        case "w":
            var audio1 = new Audio('sounds/crash.mp3');
            audio1.play();
            break;
        
        case "a":
            var audio2 = new Audio('sounds/tom-1.mp3');
            audio2.play(); 
            break;
            
        case "s":
            var audio3 = new Audio('sounds/tom-2.mp3');
            audio3.play(); 
            break;

        case "d":
            var audio4 = new Audio('sounds/tom-3.mp3');
            audio4.play(); 
            break;

            case "j":
            var audio5 = new Audio('sounds/tom-4.mp3');
            audio5.play(); 
            break;
    
            case "k":
            var audio6 = new Audio('sounds/kick-bass.mp3');
            audio6.play(); 
            break;

            case "l":
                var audio7 = new Audio('sounds/snare.mp3');
                audio7.play(); 
                break;

            default:
    }
}

function buttonAnimation(key){
    chosenB = document.querySelector("." + key).classList.add("pressed");

    setTimeout(function(){  
        chosenB.classList.remove("pressed");
    }, 100);
}