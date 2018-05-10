
//Defining array with words to guess
var soccerPlayers = ["baggio", "totti", "zidane", "rivaldo", "ronaldinho"]


for (i = 0; i < soccerPlayers.length; i++) {
    console.log(soccerPlayers[i].length);
}

var lettersGuessed = [];

//document.getElementById("startButton").onclick = function () { pickPlayer() };


//function pickPlayer() {


var player = soccerPlayers[Math.floor((Math.random() * soccerPlayers.length))];
console.log(player)
var str = "*".repeat(player.length);
var guessLeft = 15;

document.getElementById("playerText").innerHTML = str;
document.getElementById("guesses").innerHTML = "Remaining letters left: " + guessLeft;


document.onkeyup = function (event) {
    guessLeft--;
    document.getElementById("guesses").innerHTML = "Number of guesses left: " + guessLeft;

    var userLetter = event.key;
    console.log(userLetter);

    lettersGuessed.push(userLetter);
    //console.log(lettersGuessed);
    document.getElementById("letters").textContent = lettersGuessed;

    for (i = 0; i < player.length; i++) {
        if (userLetter === player.charAt(i)) {
            str = str.replaceAt(i, userLetter);
            document.getElementById("playerText").innerHTML = str;
            console.log(str.replaceAt(i, userLetter));
        }

    }

    if (guessLeft === 0) {
        alert("You lost! and NO! it's not soccer, it's FOOTBALL!")
    }

    if (player === "baggio" && guessLeft === 9) {
        
        document.getElementById("playerImage").src = "assets/images/baggio.jpg";
        alert ("seems like you need some help! This image should help")
    }
    if (player === "totti" && guessLeft === 9) {
        
        document.getElementById("playerImage").src = "assets/images/totti.jpg";
        alert ("seems like you need some help! This image should help")
    }
    if (player === "rivaldo" && guessLeft === 9) {
        
        document.getElementById("playerImage").src = "assets/images/rivaldo.jpg";
        alert ("seems like you need some help! This image should help")
    }
    if (player === "zidane" && guessLeft === 9) {
        
        document.getElementById("playerImage").src = "assets/images/zidane.jpg";
        alert ("seems like you need some help! This image should help")
    }
    if (player === "ronaldinho" && guessLeft === 9) {
        
        document.getElementById("playerImage").src = "assets/images/ronaldinho.jpg";
        alert ("seems like you need some help! This image should help")
    }
}

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}



