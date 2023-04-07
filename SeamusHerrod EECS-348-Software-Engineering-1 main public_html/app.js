//alert("Hello") //adds an alert that triggers when the page is first loaded to say "Hello"
'use strict'; //adds more verbose error messages to make debugging easier

const theme_switcher = document.querySelector('.theme-switch');

theme_switcher.addEventListener('click', function(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    
    console.log("current page style = " + className); //add console message to show the current page style (Light or Dark)
});

//add collapsible element 
var coll = document.getElementsByClassName("collapsible");
var i;
for(i = 0; i < coll.length; i++){
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block"){
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


