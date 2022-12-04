let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let countHome = 0
let countGuest = 0

function add1toHome() {
    countHome += 1
    homeScore.textContent = countHome   
}

function add2toHome() {
    countHome += 2
    homeScore.textContent = countHome  
}

function add3toHome() {
    countHome += 3
    homeScore.textContent = countHome  
}

function add1toGuest() {
    countGuest += 1
    guestScore.textContent = countGuest  
}

function add2toGuest() {
    countGuest += 2
    guestScore.textContent = countGuest   
}

function add3toGuest() {
    countGuest += 3
    guestScore.textContent = countGuest  
}