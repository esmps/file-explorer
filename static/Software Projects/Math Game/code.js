var buttonStart = document.getElementById("start");
var timer = document.getElementById("timer");
var remainingTime = document.getElementById("timeleft");
var score = document.getElementById("score");
var gameOver= document.getElementById("gameover");
var questionBox = document.getElementById("question");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var displayscore = document.getElementById("displayscore");
var scorevalue = document.getElementById("scorevalue");

var scorenum = 0;
var seconds = 60;

//if we click on start/reset button
buttonStart.onclick = function() {
    //reset?
    console.log(buttonStart.innerText);
    if (buttonStart.innerHTML == "Reset Game"){
        //reload page
        location.reload();
    }
    //start game
    else if (buttonStart.innerText== "Start Game"){
        //set score to 0
        displayscore.innerHTML = scorenum;
        //start timer
        timer.style.display = "block";
        setInterval(function(){
            //reduce time by 1 sec
            seconds--;
            remainingTime.innerHTML = seconds;
            //no time left?
            console.log(scorenum)
            if (seconds == 0){
                gameOver.style.display = "block";
                clearInterval();
            }
        }, 1000); 
        //change button text to reset
        buttonStart.innerHTML = "Reset Game";
        //generate new question and answer
        generateQuestion();
    }
}

//generate new question and answer
function generateQuestion(){
    var r = Math.floor(Math.random() * 4);
    var x = Math.floor(Math.random() * 11);
    var y = Math.floor(Math.random() * 11);
    var z = x * y;
    var boxes = [box1, box2, box3, box4];
    
    questionBox.innerHTML = x + " x " + y;
    box1.innerHTML = Math.floor(Math.random() * 100);
    box2.innerHTML = Math.floor(Math.random() * 100);
    box3.innerHTML = Math.floor(Math.random() * 100);
    box4.innerHTML = Math.floor(Math.random() * 100);
    boxes[r].innerHTML = z;
    
    if (buttonStart.innerHTML == "Reset Game"){
        box1.onclick = function() {
                correctOrWrong(box1.innerText, z);
        }
        box2.onclick = function() {
                correctOrWrong(box2.innerText, z);
        }
        box3.onclick = function() {
                correctOrWrong(box3.innerText, z);
        }
        box4.onclick = function() {
                correctOrWrong(box4.innerText, z);
        }
    }
}


function correctOrWrong(box, z) {
    if(box == z){
        scorenum++;
        scorevalue.innerHTML = scorenum.toString();
        document.getElementById("wrong").style.display = "none";
        document.getElementById("correct").style.display = "block";
        setTimeout(function(){
            displayscore.innerHTML = scorenum;
            document.getElementById("correct").style.display = "none";
        }, 1000);
        generateQuestion();
    }
    else{
        document.getElementById("correct").style.display = "none";
        document.getElementById("wrong").style.display = "block";
        setTimeout(function(){ document.getElementById("wrong").style.display = "none";
        }, 1000);
    }
}
