let tens=0; 
let seconds=0;
let min=0;
let outputmin=document.getElementById("min");
let outputseconds=document.getElementById("seconds");
let outputtens=document.getElementById("tens");
let outputstart=document.getElementById("start");
let outputstop=document.getElementById("stop");
let outputreset=document.getElementById("reset");
function starttimer(){
    tens++;
    if(tens<9){
        outputtens.innerHTML="0"+tens
    }
    if(tens>9){
        outputtens.innerHTML=tens
    }
    if(tens>99){
        seconds++;
        outputseconds.innerHTML="0"+seconds;
        tens=0;
        outputtens.innerHTML="00"

    }
    if(seconds>9){
        outputseconds.innerHTML=seconds
    
    }
    if(seconds>59){
        seconds=0
        tens=0
        outputtens.innerHTML="00"
        outputseconds.innerHTML="00" 
        min++
        outputmin.innerHTML="0"+min
        

    }
    if(min>9){
        outputmin.innerHTML=min
    }

}
document.getElementById("start").addEventListener("click",starttimer)
let interval;
document.getElementById("start").addEventListener("click",function(){
    interval=setInterval(starttimer,10)
})
document.getElementById("stop").addEventListener("click",function(){
    clearInterval(interval)
})
document.getElementById("reset").addEventListener("click",function(){
    clearInterval(interval);
    second=0;
    tens=0;
    min=0;
    outputtens.innerHTML="00";
    outputseconds.innerHTML="00";
    outputmin.innerHTML="00";
})
document



