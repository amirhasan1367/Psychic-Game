
//Defining array with words to guess
var soccerPlayers = ["Baggio", "Totti", "Zidane", "Rivaldo", "Ronaldo"]

$("#startButton").on("click", function () {
    var number = Math.floor((Math.random() * soccerPlayers.length));
    $("#playerText").text(soccerPlayers[number])
})




//for (i=0; i<soccerPlayers.length; i++){}

