//game start
$(document).ready(function() { 

//begining count of user tally wins/losses. start at 0
var wins = 0;
var losses = 0;
var score = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
//display these values on screen
//will update continuously with gameplay
$("#wins").text(wins);
$("#losses").text(losses);
$("#score").text(score);
//function to assign values to each crystal on start
// a random number value for each crystal button
var newNumbers = function () {
//computer generates a random number from 19-120
target = Math.floor(Math.random() * 101) + 19;
$("#target").text(target);
// console.log(target);
crystal1 = Math.floor(Math.random() * 12) + 1;
// console.log(crystal1);
crystal2 = Math.floor(Math.random() * 12) + 1;
// console.log(crystal2);
crystal3 = Math.floor(Math.random() * 12) + 1;
// console.log(crystal3);
crystal4 = Math.floor(Math.random() * 12) + 1;
// console.log(crystal4);
//comparison between each crystal to ensure none pull the same number
//in any given round
//not working - please resolve below comparisons
if (crystal2 === crystal1) {
    crystal2 = Math.floor(Math.random() * 12) + 1;
}
if (crystal3 === crystal2 || 
    crystal3 === crystal1) {
    crystal3 = Math.floor(Math.random() * 12) + 1;
}
if (crystal4 === crystal3 || 
    crystal4 === crystal2 || 
    crystal4 === crystal1) {
    crystal4 = Math.floor(Math.random() * 12) + 1;
}
}
//calls functon at start to assign numbers to crystals
newNumbers ();

// console.log(crystal1);
// console.log(crystal2);
// console.log(crystal3);
// //above does not see to be wrking for crystal4 - please resolve
// console.log(crystal4);
//when crystals clicked
//not working - please resolve
$("#crys1").on("click", function() {
    score = parseInt(score) + parseInt(crystal1);
    $("#score").text(score);
    console.log("user score is: " + score);
    if (score == target) {
        $("#wins").text(wins++);
        console.log("winner");
        newNumbers ();
    } else if ( score > target) {
        $("#losses").text(losses++);
        console.log("loser");
        newNumbers ();
    }
    
})
//
$("#crys2").on("click", function() {
    score = parseInt(score) + parseInt(crystal2);
    $("#score").text(score);
    console.log("user score is: " + score);
    if (score == target) {
        $("#wins").text(wins++);
        console.log("winner");
        newNumbers ();
    } else if ( score > target) {
        $("#losses").text(losses++);
        console.log("loser");
        newNumbers ();
    }
    
})
//
$("#crys3").on("click", function() {
    score = parseInt(score) + parseInt(crystal3);
    $("#score").text(score);
    console.log("user score is: " + score);
    if (score == target) {
        $("#wins").text(wins++);
        console.log("winner");
        newNumbers ();
    } else if ( score > target) {
        $("#losses").text(losses++);
        console.log("loser");
        newNumbers ();
    }
    
})
//
$("#crys4").on("click", function() {
    score = parseInt(score) + parseInt(crystal4);
    $("#score").text(score);
    console.log("user score is: " + score);
    if (score == target) {
        $("#wins").text(wins++);
        console.log("winner");
        newNumbers ();
    } else if ( score > target) {
        $("#losses").text(losses++);
        console.log("loser");
        newNumbers ();
    }
    
})


})





// $(".crystal2").on("click", function (){
//     crystal2 = parseInt(crystal2);
//     $("#score").text(crystal2);
//     // console.log(crystal2);
// })

// $(".crystal3").on("click", function (){
//     crystal3 = parseInt(crystal3);
//     $("#score").text(crystal3);
//     // console.log(crystal3);
// })

// $(".crystal4").on("click", function (){
//     crystal4 = parseInt(crystal4);
//     $("#score").text(crystal4);
//     // console.log(crystal4);
// })


//with each additional button click, associated number is added to 
//user score and total is displayed
//when user score matches target score
//win is recorded
//new target number is generated and displayed
//new numbers are generated for buttons
//user score display reverts to empty
//when user score exceeds target score
//loss is recorded
//new target number is generated and displayed
//new numbers are generated for buttons
//user score display reverts to empty

//initial game variables and functions
//all variables set to 0 or empty



// to create random numbers for target score and button values

// function call & log to verify target variable
// targetMath();
// consle.log(target);
//
// buttonMath = function () {
//     points = Math.floor(Math.random() * 12);
// };
// function call & log to verify point array
// buttonMath();
// console.log(points);
//

    


