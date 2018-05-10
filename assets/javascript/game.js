
//Defining array with words to guess
var soccerPlayers = ["baggio", "totti", "zidane", "rivaldo", "ronaldinho"]


for (i = 0; i < soccerPlayers.length; i++) {
    console.log(soccerPlayers[i].length);
}

var lettersGuessed =[];

//document.getElementById("startButton").onclick = function () { pickPlayer() };


//function pickPlayer() {


var player = soccerPlayers[Math.floor((Math.random() * soccerPlayers.length))];
console.log(player)
var str = "*".repeat(player.length);
var guessLeft = 10;

document.getElementById("playerText").innerHTML = str;
document.getElementById("guesses").innerHTML = "Remaining letters left: " + guessLeft;


document.onkeyup = function (event) {
    guessLeft--;
    document.getElementById("guesses").innerHTML = "Remaining letters left: " + guessLeft;
    
    var userLetter = event.key;
    console.log(userLetter);

    lettersGuessed.push(userLetter);
    console.log(lettersGuessed);
    document.getElementById("letters").textContent = lettersGuessed;

    for (i = 0; i < player.length; i++) {
        if (userLetter === player.charAt(i)) {
            str = str.replaceAt(i, userLetter);
            document.getElementById("playerText").innerHTML = str;
            console.log(str.replaceAt(i, userLetter));
        }

    }

    if (guessLeft === 0){
        alert ("You lost! and NO! it's not soccer, it's FOOTBALL!")
    }

}

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

//String.prototype.replaceAt = function (index, replacement) {
//return this.substr(0, index) + replacement + this.substr(index + replacement.length);
// }
//console.log(player.replaceAt(1, userLetter));











    // var str = "_ ";
    // for (i = 0; i < soccerPlayers.length; i++) {
    //     document.getElementById("playerText").innerHTML = str.repeat(soccerPlayers[i].length)
    //     //$("#playerText").text(str.repeat(soccerPlayers[i].length));
    // }

