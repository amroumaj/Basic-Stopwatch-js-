const startBtn=document.getElementById('startBtn');
const resetBtn=document.getElementById('resetBtn');
const pauseBtn=document.getElementById('pauseBtn');
const Display=document.getElementById('stopwatch');

let startTime=0;
let paused=true;
let elapseTime=0;
let hrs=0;
let mins=0;
let secs=0;
let intervalId;

startBtn.addEventListener("click",()=>{
    if (paused){
        paused=false;
        startTime=Date.now()-elapseTime;
        intervalId=setInterval(updateTime,1000);
    }
})

resetBtn.addEventListener("click",()=>{
    
    startTime=0;
    paused=true;
    elapseTime=0;
    hrs=0;
    mins=0;
    secs=0;
    clearInterval(intervalId);
    Display.textContent="00:00:00";
})

pauseBtn.addEventListener("click",()=>{
    if (!paused){
        paused=true;
        elapseTime=Date.now()-startTime;
        clearInterval(intervalId);
    }
})

function updateTime(){
    elapseTime=Date.now()-startTime;
    secs =Math.floor((elapseTime/1000)%60);
    mins=Math.floor((elapseTime/(1000*60))%60);
    hrs=Math.floor((elapseTime/(60*60*1000))%60);
    
    secs=pad(secs);
    mins=pad(mins);
    hrs=pad(hrs);
    
    Display.textContent=`${hrs}:${mins}:${secs}`;

    function pad(unit){
        return (("0"+unit).length>2? unit:"0"+unit);
    }

}