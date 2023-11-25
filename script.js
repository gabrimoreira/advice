var quote;
var paragraph = document.querySelector('.paragraph');

async function call(){
        let response = await fetch(`https://api.adviceslip.com/advice`);
        quote = await response.json();
        console.log(quote.slip.advice)
        paragraph.innerHTML = `${quote.slip.advice}`
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
call();
showtext(el, text, interval);

