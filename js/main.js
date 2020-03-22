var motorcycle = document.getElementById("motorcycle");
var color = document.getElementById("color");

function Generate(){
    var c1 = Math.floor(Math.random()*225);
    var c2 = Math.floor(Math.random()*225);
    var c3 = Math.floor(Math.random()*225);
    motorcycle.style.backgroundColor = "rgb("+c1+","+c2+","+c3+")";
}

function Show(){
    motorcycle.style.backgroundColor = color.value;
}
function Reset(){
    motorcycle.style.backgroundColor = "white";
}