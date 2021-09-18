var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}


function hideMenu(){
    navLinks.style.right = "-200px";
}


var counter = document.querySelector(".counter");

let count = 1;

setInterval(() => {
    if(count < 100000){
        count++;
    counter.innerHTML = count
    }
}, 1000)


fetch("AIzaSyAJ16M03Q0vdQZq9LxOSmfErmai-MgcOKk")
    .then(res => res.json)
    .then(data => console.log(data))

