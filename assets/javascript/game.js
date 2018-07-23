//page loads/game start
$(document).ready(function() { 

    //opening variables
    var wins = 0;
    var losses = 0;
    var score = 0;
    
 //make work
    //fuction to define a random target number between 19-120
    var newTarget = function () {
    target = Math.floor(Math.random() * 101) + 19;
    $("#target").text(target);
    }

    var rando = [];
    var crystals = ["assets/images/purple.png", "assets/images/yellow.png", "assets/images/pink.png", "assets/images/red.png"];
    // for (var j = 0; j < 4; j++) {
    //     rando = Math.floor(Math.random() * 12) + 1;
    // }
    
    
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
    
        
    newTarget ();
    
    
    })