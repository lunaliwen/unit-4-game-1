//page loads/game start
$(document).ready(function() { 

//opening variables
var wins = 0;
var losses = 0;
var score = 0;
//array for individual crystals

//
//fuction to define a random target number between 19-120
newNumbers = function () {
target = Math.floor(Math.random() * 101) + 19;
$("#target").text(target);
}
//function to up wins counter and reset score
winner = function () {
    wins++;
    $("#wins").text(wins);
    score = 0;
    $("#score").text(score);
}
//function to up losse counter and reset score
loser = function () {
    losses++;
    $("#losses").text(losses);
    score = 0;
    $("#score").text(score);
}

var crystals = ["assets/images/purple.png", "assets/images/yellow.png", "assets/images/pink.png", "assets/images/red.png"];
    for (var i = 0; i < crystals.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", crystals[i]);
        $("#crystals").append(imageCrystal);
    }
//when crystal1 is clicked, convert to integer and 
//add to score integer & display total result on screen
//compares score to target and adds a value to wins/loss tally - RESOLVE PLEASE
//if win or loss attained, generate new target and crystal values
// $("#crys1").on("click", function() {
//     score = parseInt(score) + parseInt(crys1);
//     $("#score").text(score);
//     if (score == target) {
//         winner();
//         newNumbers ();
//     } else if ( score > target) {
//         loser();
//         newNumbers ();
//     }  
// })
//when crystal2 is clicked, convert to integer and 
//add to score integer & display total result on screen
//compares score to target and adds a value to wins/loss tally - RESOLVE PLEASE
//if win or loss attained, generate new target and crystal values
// $("#crys2").on("click", function() {
//     score = parseInt(score) + parseInt(crys2);
//     $("#score").text(score);
//     if (score == target) {
//         winner();
//         newNumbers ();
//     } else if ( score > target) {
//         loser();
//         newNumbers ();
//     }  
// })
//when crystal3 is clicked, convert to integer and 
//add to score integer & display total result on screen 
//compares score to target and adds a value to wins/loss tally - RESOLVE PLEASE
//if win or loss attained, generate new target and crystal values
// $("#crys3").on("click", function() {
//     score = parseInt(score) + parseInt(crys3);
//     $("#score").text(score);
//     if (score == target) {
//         winner();
//         newNumbers ();
//     } else if ( score > target) {
//         loser();
//         newNumbers ();
//     }   
// })
//when crystal4 is clicked, convert to integer and 
//add to score integer & display total result on screen
//compares score to target and adds a value to wins/loss tally - RESOLVE PLEASE
//if win or loss attained, generate new target and crystal values
// $("#crys4").on("click", function() {
//     score = parseInt(score) + parseInt(crys4);
//     $("#score").text(score);
//     if (score == target) {
//         winner();
//         newNumbers ();
//     } else if ( score > target) {
//         loser();
//         newNumbers ();
//     }  
// })
//FUNCTION CALLED
//calls functon at page open to assign numbers to crystals
newNumbers ();


}) 