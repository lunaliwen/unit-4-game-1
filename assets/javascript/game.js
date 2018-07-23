//page loads/game start
$(document).ready(function() { 

    //opening variables
    var wins = 0;
    var losses = 0;
    var score = 0;
    
 
    //fuction to define a random target number between 19-120
    newTarget = function () {
    target = Math.floor(Math.random() * 101) + 19;
    $("#target").text(target);
    }
    var rando = [];

    // for (var j = 0; j < 4; j++) {
    //     rando = Math.floor(Math.random() * 12) + 1;
    // }
    
    var crystals = ["assets/images/purple.png", "assets/images/yellow.png", "assets/images/pink.png", "assets/images/red.png"];
    //function??
        for (var i = 0; i < crystals.length; i++) {
            var imageCrystal = $("<img>");
            imageCrystal.addClass("crystal-image");
            imageCrystal.attr("src", crystals[i]);
            var rando = [];

        for (var j = 0; j < 4; j++) {
            rando = Math.floor(Math.random() * 12) + 1;
        }
            imageCrystal.attr("data-crystalvalue", rando);
            $("#crystals").append(imageCrystal);

    
        }
        
    
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
        
        $(".crystal-image").on("click", function() {
                var crystalValue = ($(this).attr("data-crystalvalue"));
                 crystalValue = parseInt(crystalValue);
                 score += crystalValue;
                 $("#score").text(score);
        
                     if (score == target) {
                         winner();
                         newTarget ();
                     } else if ( score > target) {
                         loser();
                         newTarget ();
                     }  
    
        })
    
        console.log(crystalValue);
        //     var crystalValue = ($(this).attr("data-crystalvalue"));
        //     crystalValue = parseInt(crystalValue);
        //     // We then add the crystalValue to the user's "counter" which is a global variable.
        //     // Every click, from every crystal adds to the global counter.
        //     $("#score").text(score);
        
        //     if (score == target) {
        //         winner();
        //         newTarget ();
        //     } else if ( score > target) {
        //         loser();
        //         newTarget ();
        //     }  
    
        // })
    
    
    
     
    
    
    
    //when crystal1 is clicked, convert to integer and 
    //add to score integer & display total result on screen
    //compares score to target and adds a value to wins/loss tally - RESOLVE PLEASE
    //if win or loss attained, generate new target and crystal values
    // $("#crys1").on("click", function() {
    //     score = parseInt(score) + parseInt(crys1);
    //     $("#score").text(score);
    //     if (score == target) {
    //         winner();
    //         newTarget ();
    //     } else if ( score > target) {
    //         loser();
    //         newTarget ();
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
    newTarget ();
    
    
    })