var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var snare = new Audio("sounds/snare.mp3");
var kick = new Audio("sounds/kick-bass.mp3");
var crash = new Audio("sounds/crash.mp3");

document.querySelectorAll(".drum").forEach(element => element.addEventListener("click", clickPlaySound));
document.addEventListener("keydown", keyPlaySound);

function clickPlaySound(){
    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
}

function keyPlaySound(){
    playSound(event.key);
    buttonAnimation(event.key);
}

function playSound(input){
    switch(input){
        case "w":
            tom1.play();
            break;
        case "a":
            tom2.play();
            break;
        case "s":
            tom3.play();
            break;
        case "d":
            tom4.play();
            break;
        case "j":
            snare.play();
            break;
        case "k":
            kick.play();
            break;
        case "l":
            crash.play();
            break;
        default: console.log(this.innerHTML);
    }
}

function buttonAnimation(key){
    var button = document.querySelector("." + key);
    button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove("pressed");
    }, 100)
}