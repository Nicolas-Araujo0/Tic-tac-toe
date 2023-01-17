let database = ["", "", "", "", "", "", "", "", ""]
let divs = document.querySelectorAll("#box div")
let gameWinner = document.querySelector("#result")
let tour = true
let gameEnded = false
let boardFull = 0
let compteur = document.querySelector("#compteur")
let victoryX = 0, victoryO = 0, equality = 0;
let victoryXCount = victoryX
let victoryOCount = victoryO
let equalityCount = equality
let randomCase
//gameEnded

function reset() {
    database = ["", "", "", "", "", "", "", "", ""]
    victoryO = 0;
    victoryX = 0;
    equality = 0;
    compteur.innerHTML = "Victoire joueur : " + victoryX + " <br>Victoire 200 iq BOT: " + victoryO + "<br>Égalité ☺: " + equality;
    for (let i = 0; i < database.length; i++) {
        divs[i].style.backgroundColor = "wheat";
        divs[i].classList.remove("apparition")
        divs[i].textContent = database[i]
    }
    gameEnded = false
    gameWinner.textContent = ""
    tour = true
    boardFull = 0
}
reset()

function next() {
    database = ["", "", "", "", "", "", "", "", ""]
    compteur.innerHTML = "Victoire joueur : " + victoryX + " <br>Victoire 200 IQ BOT: " + victoryO + "<br>Égalité ☺: " + equality;
    for (let i = 0; i < database.length; i++) {
        divs[i].style.backgroundColor = "wheat";
        divs[i].classList.remove("apparition")
        divs[i].textContent = database[i]
    }
    gameEnded = false
    gameWinner.textContent = ""
    tour = true
    boardFull = 0
    victoryXCount = victoryX
    victoryOCount = victoryO
    equalityCount = equality
}

function display() {
    compteur.innerHTML = "Victoire joueur X : " + victoryX + " <br>Victoire joueur O : " + victoryO + "<br>Égalité ☺: " + equality;
    for (let i = 0; i < database.length; i++) {
        if (database[i] != "") {
            divs[i].style.backgroundColor = "wheat";
            divs[i].classList.add("apparition")
        }
        divs[i].textContent = database[i]
    }
}

function result() {
    for (let i = 0; i < database.length; i++) {
        divs[i].style.backgroundColor = "wheat";
    }
    if (victoryXCount < victoryX) {
        gameWinner.textContent = "Le joueur X à gagné "
    } else if (victoryOCount < victoryO) {
        gameWinner.textContent = "Le joueur 0 à gagné "
    } else if (equalityCount < equality) {
        gameWinner.textContent = "Egalité entre les deux joueurs"
    }
}

function IAAutoplay() {
    if (gameEnded == true || boardFull > 8) {
        result();
        if (boardFull > 8) {
            equality++
        }
    } else {  // HORIZONTAL
        if (database[0] == "0" && database[1] == "0" && database[2] == "") {
            database[2] = "0"
        } else if (database[0] == "" && database[1] == "0" && database[2] == "0") {
            database[0] = "0"
        } else if (database[0] == "0" && database[1] == "" && database[2] == "0") {
            database[1] = "0"
        } else if (database[3] == "0" && database[4] == "0" && database[5] == "") {
            database[5] = "0"
        } else if (database[3] == "" && database[4] == "0" && database[5] == "0") {
            database[3] = "0"
        } else if (database[3] == "0" && database[4] == "" && database[5] == "0") {
            database[0] = "0"
        } else if (database[6] == "0" && database[7] == "0" && database[8] == "") {
            database[8] = "0"
        } else if (database[6] == "" && database[7] == "0" && database[8] == "0") {
            database[6] = "0"
        } else if (database[6] == "0" && database[7] == "" && database[8] == "0") {
            database[0] = "0"
        } //VERTICAL
        else if (database[0] == "0" && database[3] == "0" && database[6] == "") {
            database[6] = "0"
        } else if (database[0] == "" && database[3] == "0" && database[6] == "0") {
            database[0] = "0"
        } else if (database[0] == "0" && database[3] == "" && database[6] == "0") {
            database[3] = "0"
        } else if (database[1] == "0" && database[4] == "0" && database[7] == "") {
            database[7] = "0"
        } else if (database[1] == "" && database[4] == "0" && database[7] == "0") {
            database[1] = "0"
        } else if (database[1] == "0" && database[4] == "" && database[7] == "0") {
            database[4] = "0"
        } else if (database[2] == "0" && database[5] == "0" && database[8] == "") {
            database[8] = "0"
        } else if (database[2] == "" && database[5] == "0" && database[8] == "0") {
            database[2] = "0"
        } else if (database[2] == "0" && database[5] == "" && database[8] == "0") {
            database[5] = "0"
        } // DIAGONAL
        else if (database[0] == "" && database[4] == "0" && database[8] == "0") {
            database[0] = "0"
        } else if (database[0] == "0" && database[4] == "0" && database[8] == "") {
            database[8] = "0"
        } else if (database[0] == "0" && database[4] == "" && database[8] == "0") {
            database[4] = "0"
        } else if (database[2] == "" && database[4] == "0" && database[6] == "0") {
            database[2] = "0"
        } else if (database[2] == "0" && database[4] == "0" && database[6] == "") {
            database[6] = "0"
        } else if (database[2] == "0" && database[4] == "" && database[6] == "0") {
            database[4] = "0"
        }
        // HORIZONTAL DEFENSE
        else if (database[0] == "X" && database[1] == "X" && database[2] == "") {
            database[2] = "0"
        } else if (database[0] == "" && database[1] == "X" && database[2] == "X") {
            database[0] = "0"
        } else if (database[0] == "X" && database[1] == "" && database[2] == "X") {
            database[1] = "0"
        } else if (database[3] == "X" && database[4] == "X" && database[5] == "") {
            database[5] = "0"
        } else if (database[3] == "" && database[4] == "X" && database[5] == "X") {
            database[3] = "0"
        } else if (database[3] == "X" && database[4] == "" && database[5] == "X") {
            database[4] = "0"
        } else if (database[6] == "X" && database[7] == "X" && database[8] == "") {
            database[8] = "0"
        } else if (database[6] == "" && database[7] == "X" && database[8] == "X") {
            database[6] = "0"
        } else if (database[6] == "X" && database[7] == "" && database[8] == "X") {
            database[7] = "0"
        } //VERTICAL DEFENSE
        else if (database[0] == "X" && database[3] == "X" && database[6] == "") {
            database[6] = "0"
        } else if (database[0] == "" && database[3] == "X" && database[6] == "X") {
            database[0] = "0"
        } else if (database[0] == "X" && database[3] == "" && database[6] == "X") {
            database[3] = "0"
        } else if (database[1] == "X" && database[4] == "X" && database[7] == "") {
            database[7] = "0"
        } else if (database[1] == "" && database[4] == "X" && database[7] == "X") {
            database[1] = "0"
        } else if (database[1] == "X" && database[4] == "" && database[7] == "X") {
            database[4] = "0"
        } else if (database[2] == "X" && database[5] == "X" && database[8] == "") {
            database[8] = "0"
        } else if (database[2] == "" && database[5] == "X" && database[8] == "X") {
            database[2] = "0"
        } else if (database[2] == "X" && database[5] == "" && database[8] == "X") {
            database[5] = "0"
        } // DIAGONAL DEFENSE
        else if (database[0] == "" && database[4] == "X" && database[8] == "X") {
            database[0] = "0"
        } else if (database[0] == "X" && database[4] == "X" && database[8] == "") {
            database[8] = "0"
        } else if (database[0] == "X" && database[4] == "" && database[8] == "X") {
            database[4] = "0"
        } else if (database[2] == "" && database[4] == "X" && database[6] == "X") {
            database[2] = "0"
        } else if (database[2] == "X" && database[4] == "X" && database[6] == "") {
            database[6] = "0"
        } else if (database[2] == "X" && database[4] == "" && database[6] == "X") {
            database[4] = "0"
        }
        else {
            randomCase = Math.floor(Math.random() * (9))
            while (database[randomCase] != "" || boardFull > 8) {
                randomCase = Math.floor(Math.random() * (9))
            }
        }
        database[randomCase] = "0"
        tour = true
        boardFull++
    }
    display();
    gameIndice();
    gameEnded = check();
    if (gameEnded == true || boardFull > 8) {
        result();
        if (boardFull > 9 && equality == equalityCount) {
            equality++
        }
        display();  
    }
}


function play(nbCase) {
    if (gameEnded == true || boardFull > 8) {
        result();
    } else {
        if (divs[nbCase].textContent == "X" || divs[nbCase].textContent == "0") {
            alert("You can't play in an already used place")
        } else {
            if (tour == false) {
                database[nbCase] = "0"
                tour = true
            } else {
                database[nbCase] = "X"
                tour = false
            }
            boardFull++
            display();
            gameEnded = check();
            setTimeout(() => {
                IAAutoplay();
            }, 250);
        }
    }
    console.log(database)
}


let a;
function whoWin() {
    if (a == "X" && victoryX == victoryXCount) {
        victoryX++
    } else if (a == "0" && victoryO == victoryOCount) {
        victoryO++
    }
}
function check() {
    for (let p = 0; p < 2; p++) {
        if (p == 0) {
            a = "X"
        } else {
            a = "0"
        } // column 
        for (let i = 0; i < 8; i = i + 3) {
            if (database[i] == a && database[i + 1] == a && database[i + 2] == a) {
                whoWin();
                return true
            }
        } // lines
        for (let j = 0; j < 3; j++) {
            if (database[j] == a && database[j + 3] == a && database[j + 6] == a) {
                whoWin();
                return true
            }
        } // diagonales
        if (database[0] == a && database[4] == a && database[8] == a) {
            whoWin();
            return true
        } else if (database[2] == a && database[4] == a && database[6] == a) {
            whoWin();
            return true
        }
    }
    return false
}


function gameIndice() {
    // HORIZONTAL
    if (database[0] == "0" && database[1] == "0" && database[2] == "") {
        divs[2].style.backgroundColor = "blue";
    } if (database[0] == "" && database[1] == "0" && database[2] == "0") {
        divs[0].style.backgroundColor = "blue";
    } if (database[0] == "0" && database[1] == "" && database[2] == "0") {
        divs[1].style.backgroundColor = "blue";
    } if (database[3] == "0" && database[4] == "0" && database[5] == "") {
        divs[5].style.backgroundColor = "blue";
    } if (database[3] == "" && database[4] == "0" && database[5] == "0") {
        divs[3].style.backgroundColor = "blue";
    } if (database[3] == "0" && database[4] == "" && database[5] == "0") {
        divs[4].style.backgroundColor = "blue";
    } if (database[6] == "0" && database[7] == "0" && database[8] == "") {
        divs[8].style.backgroundColor = "blue";
    } if (database[6] == "" && database[7] == "0" && database[8] == "0") {
        divs[6].style.backgroundColor = "blue";
    } if (database[6] == "0" && database[7] == "" && database[8] == "0") {
        divs[7].style.backgroundColor = "blue";
    } //VERTICAL
    if (database[0] == "0" && database[3] == "0" && database[6] == "") {
        divs[6].style.backgroundColor = "blue";
    } if (database[0] == "" && database[3] == "0" && database[6] == "0") {
        divs[0].style.backgroundColor = "blue";
    } if (database[0] == "0" && database[3] == "" && database[6] == "0") {
        divs[3].style.backgroundColor = "blue";
    } if (database[1] == "0" && database[4] == "0" && database[7] == "") {
        divs[7].style.backgroundColor = "blue";
    } if (database[1] == "" && database[4] == "0" && database[7] == "0") {
        divs[1].style.backgroundColor = "blue";
    } if (database[1] == "0" && database[4] == "" && database[7] == "0") {
        divs[4].style.backgroundColor = "blue";
    } if (database[2] == "0" && database[5] == "0" && database[8] == "") {
        divs[8].style.backgroundColor = "blue";
    } if (database[2] == "" && database[5] == "0" && database[8] == "0") {
        divs[2].style.backgroundColor = "blue";
    } if (database[2] == "0" && database[5] == "" && database[8] == "0") {
        divs[5].style.backgroundColor = "blue";
    } // DIAGONAL
    if (database[0] == "" && database[4] == "0" && database[8] == "0") {
        divs[0].style.backgroundColor = "blue";
    } if (database[0] == "0" && database[4] == "0" && database[8] == "") {
        divs[8].style.backgroundColor = "blue";
    } if (database[0] == "0" && database[4] == "" && database[8] == "0") {
        divs[4].style.backgroundColor = "blue";
    } if (database[2] == "" && database[4] == "0" && database[6] == "0") {
        divs[2].style.backgroundColor = "blue";
    } if (database[2] == "0" && database[4] == "0" && database[6] == "") {
        divs[6].style.backgroundColor = "blue";
    } if (database[2] == "0" && database[4] == "" && database[6] == "0") {
        divs[4].style.backgroundColor = "blue";
    }
    // HORIZONTAL DEFENSE
    if (database[0] == "X" && database[1] == "X" && database[2] == "") {
        divs[2].style.backgroundColor = "goldenrod";
    } if (database[0] == "" && database[1] == "X" && database[2] == "X") {
        divs[0].style.backgroundColor = "goldenrod";
    } if (database[0] == "X" && database[1] == "" && database[2] == "X") {
        divs[1].style.backgroundColor = "goldenrod";
    } if (database[3] == "X" && database[4] == "X" && database[5] == "") {
        divs[5].style.backgroundColor = "goldenrod";
    } if (database[3] == "" && database[4] == "X" && database[5] == "X") {
        divs[3].style.backgroundColor = "goldenrod";
    } if (database[3] == "X" && database[4] == "" && database[5] == "X") {
        divs[4].style.backgroundColor = "goldenrod";
    } if (database[6] == "X" && database[7] == "X" && database[8] == "") {
        divs[8].style.backgroundColor = "goldenrod";
    } if (database[6] == "" && database[7] == "X" && database[8] == "X") {
        divs[6].style.backgroundColor = "goldenrod";
    } if (database[6] == "X" && database[7] == "" && database[8] == "X") {
        divs[7].style.backgroundColor = "goldenrod";
    } //VERTICAL DEFENSE
    if (database[0] == "X" && database[3] == "X" && database[6] == "") {
        divs[6].style.backgroundColor = "goldenrod";
    } if (database[0] == "" && database[3] == "X" && database[6] == "X") {
        divs[0].style.backgroundColor = "goldenrod";
    } if (database[0] == "X" && database[3] == "" && database[6] == "X") {
        divs[3].style.backgroundColor = "goldenrod";
    } if (database[1] == "X" && database[4] == "X" && database[7] == "") {
        divs[7].style.backgroundColor = "goldenrod";
    } if (database[1] == "" && database[4] == "X" && database[7] == "X") {
        divs[1].style.backgroundColor = "goldenrod";
    } if (database[1] == "X" && database[4] == "" && database[7] == "X") {
        divs[4].style.backgroundColor = "goldenrod";
    } if (database[2] == "X" && database[5] == "X" && database[8] == "") {
        divs[8].style.backgroundColor = "goldenrod";
    } if (database[2] == "" && database[5] == "X" && database[8] == "X") {
        divs[2].style.backgroundColor = "goldenrod";
    } if (database[2] == "X" && database[5] == "" && database[8] == "X") {
        divs[5].style.backgroundColor = "goldenrod";
    } // DIAGONAL DEFENSE
    if (database[0] == "" && database[4] == "X" && database[8] == "X") {
        divs[0].style.backgroundColor = "goldenrod";
    } if (database[0] == "X" && database[4] == "X" && database[8] == "") {
        divs[8].style.backgroundColor = "goldenrod";
    } if (database[0] == "X" && database[4] == "" && database[8] == "X") {
        divs[4].style.backgroundColor = "goldenrod";
    } if (database[2] == "" && database[4] == "X" && database[6] == "X") {
        divs[2].style.backgroundColor = "goldenrod";
    } if (database[2] == "X" && database[4] == "X" && database[6] == "") {
        divs[6].style.backgroundColor = "goldenrod";
    } if (database[2] == "X" && database[4] == "" && database[6] == "X") {
        divs[4].style.backgroundColor = "goldenrod";
    }
}