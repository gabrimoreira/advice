async function call(){
    response = await fetch("")
}

var el = document.querySelector("#title");
var text = "Take an advice!";
var interval = 150;

function showtext(el, text, interval) {
    var charArray = text.split("");
    var i = 0;

    function addChar() {
        if (i < charArray.length) {
            el.innerHTML += charArray[i];
            i++;
            setTimeout(addChar, interval);
        }
    }

    addChar();
}

showtext(el, text, interval);

