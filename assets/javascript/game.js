
// $(document).ready(function() {

// })

  //crystal colector game
//on start, computer generates a random number 19-120 and populates in target display
    
      
    $(document).ready(function() { 
        //array of numbers 1-12 to be assiigned to each crystal at beggining of game. this number is hidden from the user
    var crystalNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        // empty variables
    var wins ;
    var losses ;
    var crystal1 = Math.floor(Math.random() * crystalNumbers.length) +1;
    // alert(crystal1);
    var crystal2 = Math.floor(Math.random() * crystalNumbers.length) +1;
    // alert(crystal2);
    var crystal3 = Math.floor(Math.random() * crystalNumbers.length) +1;
    // alert(crystal3);
    var crystal4 = Math.floor(Math.random() * crystalNumbers.length) +1;
    // alert(crystal4);
    var scoreCounter ;
    //array of numbers 1-12 to be assiigned to each crystal at beggining of game. this number is hidden from the user
    var crystalNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
//on start, computer generates a random number 19-120 and populates in target display
    var target = Math.floor(Math.random() * 101) + 19;
        // console.log(target);
        $("#target").text(target);

        
//button digit assignments are hidden form user
//when button is clicked, associated number is displayed in user score display

$(".crystal1").on("click", function (){
    crystal1 = parseInt(crystal1);
    $("#score").text(crystal1);
})

$(".crystal2").on("click", function (){
    crystal2 = parseInt(crystal2);
    $("#score").text(crystal2);
})

$(".crystal3").on("click", function (){
    crystal3 = parseInt(crystal3);
    $("#score").text(crystal3);
})

$(".crystal4").on("click", function (){
    crystal4 = parseInt(crystal4);
    $("#score").text(crystal1);
})
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

    });


