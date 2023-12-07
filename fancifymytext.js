function biggerFunc(){
    document.getElementById("textarea").style.fontSize = "24px";
}

function fancyFunc(){
    document.getElementById("textarea").style.fontWeight = "bold";
    document.getElementById("textarea").style.color = "blue";
    document.getElementById("textarea").style.textDecoration = "underline";


}

function boringFunc(){
    document.getElementById("textarea").style.fontWeight = "normal";
    document.getElementById("textarea").style.color = "black";
    document.getElementById("textarea").style.textDecoration = "none";
}

function mooFunc(){
    var str = document.getElementById("textarea").value;
    var period = str.split(".");
    str = period.join("-Moo");
    
    document.getElementById("textarea").value = str;
}