function hello(){
    if (document.getElementById("tiktokCode").value=="rain"){
        playAudio2()
        document.getElementById("video2").style.opacity = 0;
    } else if(document.getElementById("tiktokCode").value=="will"){
        document.getElementById("video3").style.opacity = 0;
        playAudio3()
        document.getElementById("thecode").style.visibility = "come";
    } else if(document.getElementById("tiktokCode").value=="third"){
        playAudio1()
        document.getElementById("video1").style.opacity = 0; //change this to the suitcase
        setTimeout(function(){
            document.getElementById("briefcasepic").style.opacity = 0; //change this to the suitcase
        },5000);
        document.getElementById("thecode").style.visibility = "visible";
}
}
var suitcase = document.getElementById("briefcase");
var closer = document.getElementById("close");
var cannotSee = document.getElementById("cannotSee");
function playAudio1() {
    suitcase.play();
}
function playAudio2() {
    closer.play();
}
function playAudio3() {
    cannotSee.play();
}