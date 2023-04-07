function changeColors(){
        var fontR = document.getElementById("fontR").value;
        var fontG = document.getElementById("fontG").value;
        var fontB = document.getElementById("fontB").value;
        
        var borderW = document.getElementById("borderW").value;

        var borderR = document.getElementById("borderR").value;
        var borderG = document.getElementById("borderG").value;
        var borderB = document.getElementById("borderB").value;

        var dummy = document.getElementById("dummyText");

        dummy.style.borderColor = `rgb(${borderR},${borderG},${borderB})`;
        dummy.style.borderWidth = borderW + "px";
        dummy.style.backgroundColor = `rgb(${fontR},${fontG},${fontB})`;
}

function validPass(){
        var firstPass = document.getElementById("first").value;
        var secondPass = document.getElementById("second").value;
    
        if ( firstPass.length < 8)
        {
            alert("Password must be at least 8 characters long");
        }
        else if ( firstPass != secondPass )
        {
            alert("Passwords do not match");
        }
        else
        {
            alert("passwords verified");
        }
}