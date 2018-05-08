
//Defining array with words to guess
var soccerPlayers = ["Baggio", "Totti", "Zidane", "Rivaldo", "Ronaldinho"]


for (i = 0; i < soccerPlayers.length; i++) {
    console.log(soccerPlayers[i].length);
}

var object = {
    keyboard: function () {
        document.onkeydown = event.key;
    }
}

//document.getElementById("startButton").onclick = function () { pickPlayer() };


//function pickPlayer() {
var str = "_";
var player = soccerPlayers[Math.floor((Math.random() * soccerPlayers.length))];
console.log(player)
var blankDisplay = str.repeat(player.length);
document.getElementById("playerText").innerHTML = blankDisplay;
//}

document.onkeyup = function (event) {
    var userLetter = event.key;
    console.log(userLetter);
    for (i = 0; i < player.length; i++) {
        if (userLetter === player.charAt(i))
            console.log(blankDisplay.replaceAt(i, userLetter));
    }

}
//String.prototype.replaceAt = function (index, replacement) {
//return this.substr(0, index) + replacement + this.substr(index + replacement.length);
// }
//console.log(player.replaceAt(1, userLetter));



String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}








    // var str = "_ ";
    // for (i = 0; i < soccerPlayers.length; i++) {
    //     document.getElementById("playerText").innerHTML = str.repeat(soccerPlayers[i].length)
    //     //$("#playerText").text(str.repeat(soccerPlayers[i].length));
    // }

