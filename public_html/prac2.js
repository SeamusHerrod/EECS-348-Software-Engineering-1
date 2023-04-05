function changeColors(){
        var fontColor = document.getElementById("fontColor").value;
        var borderColor = document.getElementById("borderColor").value;
        font = document.getElementById("dummyText");
        font.style.color = fontColor;
}       

document.getElementById("changeColor").addEventListener("click", changeColors, false);

