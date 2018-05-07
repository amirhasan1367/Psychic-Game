
//Defining array with words to guess
var soccerPlayers = ["Baggio", "Totti", "Zidane", "Rivaldo", "Ronaldinho"]


for (i = 0; i < soccerPlayers.length; i++) {
    console.log(soccerPlayers[i].length);
}
    //$("#startButton").on("click", function () {
    // var number = Math.floor((Math.random() * soccerPlayers.length));
    //})


    document.getElementById("startButton").onclick = function() {pickPlayer()};

    function pickPlayer(){
        var str = "_ ";
        var number = soccerPlayers[Math.floor((Math.random() * soccerPlayers.length))];
        console.log (number)
        document.getElementById("playerText").innerHTML = str.repeat(number.length);
    }


    // var str = "_ ";
    // for (i = 0; i < soccerPlayers.length; i++) {
    //     document.getElementById("playerText").innerHTML = str.repeat(soccerPlayers[i].length)
    //     //$("#playerText").text(str.repeat(soccerPlayers[i].length));
    // }





//for (i=0; i<soccerPlayers.length; i++){}

