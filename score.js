


let homeNumber = document.getElementById("homeScore");

let guestNumber = document.getElementById("guestScore");

let home = 0;

let guest = 0;

function newGame() {
    location.reload(); //not an official way to reset/start new game but temporarily
}

function homeAdd1() { //don't forget to add paranthesis in html
    home += 1;
    homeNumber.innerText = home
}

function homeAdd2() {
    home+= 2;
    homeNumber.innerText = home
}

function homeAdd3() {
    home += 3;
    homeNumber.innerText = home
}

function guestAdd1() {
    guest += 1;
    guestNumber.innerText = guest
}

function guestAdd2() {
    guest += 2;
    guestNumber.innerText = guest
}

function guestAdd3() {
    guest += 3;
    guestNumber.innerText = guest
}