
// returns a random colour as string "rbg(x,x,x)"
function randomRGB() {
    let rgbArray = [255, 255, 255];
    let rgb = rgbArray.map(x => x * Math.random());
    return 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')'; //changing them all to 0 makes it greyscale
}
// change page background to a random colour on every click
let body = document.getElementsByTagName("body")[0];
body.addEventListener("click", function () {
    // alert("test");
    body.style.background = randomRGB();
});


//const image = document.querySelectorAll(".box");
function encrypt() {
    return "test";

};

const output = document.getElementById("submitText");
output.addEventListener("click", function () {

    var input = document.getElementById("inputText").value;
    var result = " ";
    var out = " ";
    for  

    // let strEncrypted = encrypt();
    alert(input);

}

);




