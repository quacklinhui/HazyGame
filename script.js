function hello(){
    if (document.getElementById("tiktokCode").value=="first"){
        document.getElementById("video2").style.opacity = 0;
    } else if(document.getElementById("tiktokCode").value=="second"){
        console.log("This is working");
        document.getElementById("video3").style.opacity = 0;
        document.getElementById("thecode").style.visibility = "visible";
    }
}