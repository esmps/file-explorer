var tracks = ['BigBandJazz', 'CoolBeats', 'Country', 'DanceTrack', 'GuitarandBass', 'HipHop', 'TrueHeavyMetal', 'UpbeatSynthBass'];
var play = false;
var interval;
var seconds = 00;
var minutes = 00;
var duration = 0;
var durationTime = 0;
var audio;

$(function(){
    
    $("#BigBandJazz").click(function(){
        clearBackground();
        clearTime();
        $("#track").attr('src', 'audio/BigBandJazz.mp3');
        $("#track")[0].play();
        playPauseHelper();
        duration = 66;
        progressBar();
        $("#BigBandJazz").css("background-color", "goldenrod");
    });
     $("#HipHop").click(function(){
        clearBackground();
        clearTime();
        $("#track").attr('src', 'audio/HipHop.mp3');
        $("#track")[0].play();
        playPauseHelper();
        duration = 80;
        progressBar();
        $("#HipHop").css("background-color", "goldenrod");
    });
     $("#GuitarandBass").click(function(){
        clearBackground();
        clearTime();
        $("#track").attr('src', 'audio/GuitarandBass.mp3');
        $("#track")[0].play();
        playPauseHelper();
        duration = 49;
        progressBar();
        $("#GuitarandBass").css("background-color", "goldenrod");
    });
     $("#Country").click(function(){
        clearBackground(); 
        clearTime();
        $("#track").attr('src', 'audio/Country.mp3');
        $("#track")[0].play();
        playPauseHelper();
        duration = 41;
        progressBar();
        $("#Country").css("background-color", "goldenrod");

    });
     $("#TrueHeavyMetal").click(function(){
        clearBackground();
        clearTime();
        $("#track").attr('src', 'audio/TrueHeavyMetal.mp3');
        $("#track")[0].play();
        playPauseHelper();
        duration = 130;
        progressBar();
        $("#TrueHeavyMetal").css("background-color", "goldenrod");
    });
     $("#UpbeatSynthBass").click(function(){
        clearBackground();
        clearTime();
        $("#track").attr('src', 'audio/UpbeatSynthBass.mp3');
        $("#track")[0].play();
        playPauseHelper();
        duration = 73;
        progressBar();
        $("#UpbeatSynthBass").css("background-color", "goldenrod");
    });
     $("#CoolBeats").click(function(){
        clearBackground();
        clearTime();
        $("#track").attr('src', 'audio/CoolBeats.mp3');
        $("#track")[0].play();
        playPauseHelper();
        duration = 69;
        progressBar();
        $("#CoolBeats").css("background-color", "goldenrod");
    });
     $("#DanceTrack").click(function(){
        clearBackground();
        clearTime();
        $("#track").attr('src', 'audio/DanceTrack.mp3');
        $("#track")[0].play();
        playPauseHelper();
        duration = 75;
        progressBar();
        $("#DanceTrack").css("background-color", "goldenrod");
    });
    
    //Usage of the play/pause button
    $("#startstop").click(function(){
        if(play == false){
            play = true;
            $("#play").hide();
            $("#pause").show();
            $("#track")[0].play();

        } 
        else{
            $("#play").show();
            $("#pause").hide();
            play = false;
            $("#track")[0].pause();
        }
    });
    
    //Play random audio
    $("#random").click(function(){
        clearBackground();
        clearTime();
        chooseAudio();
        $("#track")[0].play();
        playPauseHelper();
        if ($("#track").attr('src') == 'audio/Country.mp3'){
            duration = 41;
            $("#Country").css("background-color", "goldenrod");
        }
        else if ($("#track").attr('src') == "audio/BigBandJazz.mp3"){
            duration = 66;
            $("#BigBandJazz").css("background-color", "goldenrod");
        }
        else if ($("#track").attr('src') == "audio/HipHop.mp3"){
            duration = 80;
            $("#HipHop").css("background-color", "goldenrod");
        }
        else if ($("#track").attr('src') == "audio/GuitarandBass.mp3"){
            duration = 49;
            $("#GuitarandBass").css("background-color", "goldenrod");
        }
        else if ($("#track").attr('src') == "audio/TrueHeavyMetal.mp3"){
            duration = 130;
            $("#TrueHeavyMetal").css("background-color", "goldenrod");
        }
        else if ($("#track").attr('src') == "audio/UpbeatSynthBass.mp3"){
            duration = 73;
            $("#UpbeatSynthBass").css("background-color", "goldenrod");
        }
        else if ($("#track").attr('src') == "audio/CoolBeats.mp3"){
            duration = 69;
            $("#CoolBeats").css("background-color", "goldenrod");
        }
        else if ($("#track").attr('src') == "audio/DanceTrack.mp3"){
            duration = 75;
            $("#DanceTrack").css("background-color", "goldenrod");
        }
        progressBar();
    });
    
    function clearBackground(){
        for (var i = 0; i < 8; i++){
            $("#" + tracks[i]).css("background-color", "#D0D0D0")
        };
    };
    
    //Hide/show play/pause
    function playPauseHelper(){
        $("#play").hide();
        $("#pause").show(); 
        play = true;
    };
    
    function progressBar(){
        updateDuration();
//        $("#duration").html(duration);
        interval = setInterval(startTimer, 1000);
    };
    
    //Update duration of audio chosen
    function updateDuration(){
        var durationMin = Math.floor(duration/60);
        var durationSec = duration%60;
        if (durationSec > 9){
            $("#duration").html('0' + durationMin + ':' + durationSec)
        }
        else{
            $("#duration").html('0' + durationMin + ':0' + durationSec);   
        }
    };
    
    //Choose random audio to play
    function chooseAudio(){
        $("#track").attr('src', 'audio/' + tracks[Math.floor(Math.random() * 8)] + '.mp3');
    };
    
    
    function clearTime(){
        clearInterval(interval);
        play == false;
        seconds = 00;
        minutes = 00;
        durationTime = 0;
        $("#seconds").html("00");
        $("#minutes").html("00");
        $("#mybar").css("width", 0);

    }
    function startTimer() {
        if (play == true){
            seconds++;
            durationTime++;
            $("#mybar").css("width", durationTime/duration * 400);
            if(seconds <= 9){
                $("#seconds").html('0' + seconds);
            }
            if (seconds > 9){
                 $("#seconds").html(seconds);
            }
            if (seconds > 59){
                minutes++;
                $("#minutes").html('0' + minutes);
                seconds = 0;
                $("#seconds").html('0' + seconds);
            }
            if (durationTime == duration){
                clearInterval(interval);
                $("#track")[0].pause();
                clearTime();
                $("#play").show();
                $("#pause").hide(); 
                play = false;
                
            }
        }
    };
        
})
