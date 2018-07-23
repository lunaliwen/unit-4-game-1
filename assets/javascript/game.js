//page loads/game start
$(document).ready(function() { 

    //VARIABLES
    var wins = 0;
    var losses = 0;
    var score = 0;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;
    //display these values on screen
    //will update continuously with gameplay
    // $("#wins").text(wins);
    // $("#losses").text(losses);
    // $("#score").text(score);
    
    //FUNCTIONS DEFINED
    //function to assign a random number value for each crystal button 1-12
    //
    //and a target number to reach 19-120
    var newNumbers = function () {
    target = Math.floor(Math.random() * 101) + 19;
    $("#target").text(target);
    crystal1 = Math.floor(Math.random() * 12) + 1;
    crystal2 = Math.floor(Math.random() * 12) + 1;
    crystal3 = Math.floor(Math.random() * 12) + 1;
    crystal4 = Math.floor(Math.random() * 12) + 1;
    //PLEASE RESOLVE
    //comparison between each crystal to ensure none pull the same number
    //in any given round
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
    var winner = function () {
        wins++;
        $("#wins").text(wins);
        score = 0;
        $("#score").text(score);
    }
    var loser = function () {
        losses++;
        $("#losses").text(losses);
        score = 0;
        $("#score").text(score);
    }
    
    //when crystal1 is clicked, convert to integer and 
    //add to score integer & display total result on screen
    //compares score to target and adds a value to wins/loss tally - RESOLVE PLEASE
    //if win or loss attained, generate new target and crystal values
    $("#crys1").on("click", function() {
        score = parseInt(score) + parseInt(crystal1);
        $("#score").text(score);
        if (score == target) {
            winner();
            newNumbers ();
        } else if ( score > target) {
            loser();
            newNumbers ();
        }  
    })
    //when crystal2 is clicked, convert to integer and 
    //add to score integer & display total result on screen
    //compares score to target and adds a value to wins/loss tally - RESOLVE PLEASE
    //if win or loss attained, generate new target and crystal values
    $("#crys2").on("click", function() {
        score = parseInt(score) + parseInt(crystal2);
        $("#score").text(score);
        if (score == target) {
            winner();
            newNumbers ();
        } else if ( score > target) {
            loser();
            newNumbers ();
        }  
    })
    //when crystal3 is clicked, convert to integer and 
    //add to score integer & display total result on screen 
    //compares score to target and adds a value to wins/loss tally - RESOLVE PLEASE
    //if win or loss attained, generate new target and crystal values
    $("#crys3").on("click", function() {
        score = parseInt(score) + parseInt(crystal3);
        $("#score").text(score);
        if (score == target) {
            winner();
            newNumbers ();
        } else if ( score > target) {
            loser();
            newNumbers ();
        }   
    })
    //when crystal4 is clicked, convert to integer and 
    //add to score integer & display total result on screen
    //compares score to target and adds a value to wins/loss tally - RESOLVE PLEASE
    //if win or loss attained, generate new target and crystal values
    $("#crys4").on("click", function() {
        score = parseInt(score) + parseInt(crystal4);
        $("#score").text(score);
        if (score == target) {
            winner();
            newNumbers ();
        } else if ( score > target) {
            loser();
            newNumbers ();
        }  
    })
    //FUNCTION CALLED
    //calls functon at page open to assign numbers to crystals
    newNumbers ();
    
    })