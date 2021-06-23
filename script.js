function hello(){
    // alert(document.getElementById("tiktokCode").value);
    // document.getElementById("video1").style.opacity = 0;
    // document.getElementById("video2").style.opacity = 0;
    // console.log("This is working 1");
    if (document.getElementById("tiktokCode").value=="first"){
        document.getElementById("video2").style.opacity = 0;
    } else if(document.getElementById("tiktokCode").value=="second"){
        console.log("This is working");
        document.getElementById("video3").style.opacity = 0;
    }
}