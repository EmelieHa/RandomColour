let btn = document.getElementById("colourbtn");
btn.addEventListener('click', bgColour);
let div = document.getElementById("bgcolour");



function bgColour() {
    let num1 = Math.floor(Math.random() * 255 + 1);
    let num2 = Math.floor(Math.random() * 255 + 1);
    let num3 = Math.floor(Math.random() * 255 + 1);
    div.style.backgroundColor = 'rgb(' + num1 + ',' + num2 + ',' + num3 +')';
   
}
