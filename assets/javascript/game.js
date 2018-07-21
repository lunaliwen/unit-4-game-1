//game start
$(document).ready(function() { 
//computer generates a random number from 19-120
var target = Math.floor(Math.random() * 101) + 19;
// console.log(target);
//this number s displayed on screen
//as the number to match
$("#target").text(target);
//
//begining count of user tally wins/losses. start at 0
var wins = 0;
var losses = 0;
var score = 0;
var crystal1 ;
var crystal2 ;
var crystal3 ;
var crystal4 ;
//display these values on screen
//will update continuously with gameplay
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);
$("#score").text("Current Score: " + score);
//function to assign values to each crystal on start
// a random number value for each crystal button
var newNumbers = function () {
crystal1 = Math.floor(Math.random() * 11) + 1;
// console.log(crystal1);
crystal2 = Math.floor(Math.random() * 11) + 1;
// console.log(crystal2);
crystal3 = Math.floor(Math.random() * 11) + 1;
// console.log(crystal3);
crystal4 = Math.floor(Math.random() * 11) + 1;
// console.log(crystal4);
//comparison between each crystal to ensure none pull the same number
//in any given round
if (crystal2 === crystal1) {
    crystal2 = Math.floor(Math.random() * 11) + 1;
}
if (crystal3 === crystal2 || 
    crystal3 === crystal1) {
    crystal3 = Math.floor(Math.random() * 11) + 1;
}
if (crystal4 === crystal3 || 
    crystal4 === crystal2 || 
    crystal4 === crystal1) {
    crystal4 = Math.floor(Math.random() * 11) + 1;
}
}
newNumbers ();

console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
//above does not see to be wrking for crystal4 - please resolve
// console.log(crystal4);

$(".crystal1").on("click", function (){
    
    // console.log(crystal1);
    
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

    


