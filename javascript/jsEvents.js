/*
// returns a random colour as string "rbg(x,x,x)"
function randomRGB() {
    let rgbArray = [255, 255, 255];
    let rgb = rgbArray.map(x => x * Math.random());
    return 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
}
// change page background to a random colour on every click
let body = document.getElementsByTagName("body")[0];
body.addEventListener("click", function () {
    body.style.background = randomRGB();
});
*/

//const image = document.querySelectorAll(".box");
const output = document.querySelectorAll("outputText");
output.addEventListener("click", encrypted);


function encrypted(event) {
    alert("hmm");
}

