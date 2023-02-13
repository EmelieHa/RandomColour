let btn = document.getElementById("colourbtn");
btn.addEventListener('click', bgColour);
let div = document.getElementById("bgcolour");
let div2 = document.getElementById("bgcolour2");
let div3 = document.getElementById("bgcolour3");
let div4 = document.getElementById("bgcolour4");


function bgColour() {
    let num1 = Math.floor(Math.random() * 255 + 1);
    let num2 = Math.floor(Math.random() * 255 + 1);
    let num3 = Math.floor(Math.random() * 255 + 1);
    div.style.backgroundColor = 'rgb(' + num1 + ',' + num2 + ',' + num3 +')';
    let num4 = Math.floor(Math.random() * 255 + 1);
    let num5 = Math.floor(Math.random() * 255 + 1);
    let num6 = Math.floor(Math.random() * 255 + 1);
    div2.style.backgroundColor = 'rgb(' + num4 + ',' + num5 + ',' + num6 +')';
 let num7 = Math.floor(Math.random() * 255 + 1);
let num8 = Math.floor(Math.random() * 255 + 1);
let num9 = Math.floor(Math.random() * 255 + 1);
div3.style.backgroundColor = 'rgb(' + num7 + ',' + num8 + ',' + num9 +')';
let num10 = Math.floor(Math.random() * 255 + 1);
let num11 = Math.floor(Math.random() * 255 + 1);
let num12 = Math.floor(Math.random() * 255 + 1);
div4.style.backgroundColor = 'rgb(' + num10 + ',' + num11 + ',' + num12 +')';
}
