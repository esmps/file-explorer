var playing = false;
var score;
var livesleft;
var step;
var action;
var fruits = ['apple', 'bananas', 'grapes', 'lemon', 'orange', 'pear', 'mango', 'cherries', 'bomb'];
$(function(){
    //Click on Start/Reset Button
    $("#startreset").click(function(){
        //Playing?
        if(playing == true){
            //Reload page to start over
            location.reload();   
        }
        else{
            playing = true; //game initiated
            
            //Set score to initial value
            score = 0;
            $("#scorevalue").html(score);
            
            //Show lives
            $("#livesleft").show();
            livesleft= 3;
            adjustLives();
            
            //Hide instructions
            $("#instructions").hide();
            //Hide game over box
            $("#gameover").hide();
            
            //Reassign button to "Reset Game"
            $("#startreset").html("Reset Game");
            
            //Generate random fruit
            generateFruit();  
        }
    });
    
//slice fruit
$("#fruit1").mouseover(function(){
    if ($("#fruit1").attr('src') == "images/bomb.png"){
        playing = false;
        $("#bombaudio")[0].play();
        clearInterval(action);
        $("#fruit1").hide("explode", 750);
        setTimeout(function(){
            $("#startreset").html("Start Game");
            $("#gameover").show();
            $("#finalscore").html(score);
            $("#livesleft").hide();
        },1000)
    }
    else{
        //Update score
        score++;
        //Update score value
        $("#scorevalue").html(score);
        //Play slice audio
        $("#sliceaudio")[0].play();
        //Stop fruit
        clearInterval(action);
        //Explode fruit
        $("#fruit1").hide("explode", 500);
        setTimeout(generateFruit, 800);
    }
});

//Functions

//Adjust how many lives left
function adjustLives(){
    $("#livesleft").empty();
    for(i = 0; i < livesleft; i++){
        $("#livesleft").append('<img src="images/lives.png" class="life">');
    }
}

//Generate fruits and start moving them down
function generateFruit(){
    //Generating a fruit
    $("#fruit1").show();
    //Choose a random fruit
    chooseFruit();
    //Sets fruit in random position
    $("#fruit1").css({'left': Math.round(Math.random()*600), 'top': -75});
    //Generate a random step for the fruits
    step = 1 + Math.round(Math.random() * 5);
    action = setInterval(function(){
        //Add step to fruit
        $("#fruit1").css('top', $("#fruit1").position().top + step);
            //Check if fruit is too low
            if($("#fruit1").position().top > $("#game").height()){
                if ($("#fruit1").attr('src') == "images/bomb.png"){
                    score++;
                    $("#scorevalue").html(score);
                     //Generating a fruit
                        $("#fruit1").show();
                        //Choose a random fruit
                        chooseFruit();
                        //Sets fruit in random position
                        $("#fruit1").css({'left': Math.round(Math.random()*600), 'top': -75});
                        //Generate a random step for the fruits
                        step = 1 + Math.round(Math.random() * 5);
                }
                else{
                    //Check if we have any lives left
                    if(livesleft > 1){
                        //Generating a fruit
                        $("#fruit1").show();
                        //Choose a random fruit
                        chooseFruit();
                        //Sets fruit in random position
                        $("#fruit1").css({'left': Math.round(Math.random()*600), 'top': -75});
                        //Generate a random step for the fruits
                        step = 1 + Math.round(Math.random() * 5);
                        //Reduce Life by 1
                        livesleft--;
                        //Adjust lives left
                        adjustLives();
                    }
                    else{
                        //Game over
                        playing = false;
                        $("#startreset").html("Start Game");
                        $("#gameover").show();
                        $("#finalscore").html(score);
                        $("#livesleft").hide();
                        clearInterval(action);
                        $("#fruit1").hide();
                    }
                }
            }
    }, 10);
}

//Choose a random fruit to send down
function chooseFruit(){
    $("#fruit1").attr('src', 'images/' + fruits[Math.floor(Math.random() * 9)] + '.png');
}
    
});