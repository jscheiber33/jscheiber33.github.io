var thatWasEasy = new Audio("that_was_easy.mp3");
$(document).keypress(delegateKeypress);

function sayThatWasEasy() {
    thatWasEasy.play();
}

function delegateKeypress(event){
    if(event.charCode == 32) {
        thatWasEasy.play();
    }
}
 