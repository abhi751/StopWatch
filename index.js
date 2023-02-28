let [milliseconds,seconds,minutes,hours]=[0,0,0,0];
let timer=document.querySelector(".timerDisplay")
let int;
document.getElementById("startTime").addEventListener("click",()=>{
    int=setInterval(Display,10)
})

document.getElementById("pauseTime").addEventListener("click",()=>{
    clearInterval(int)
})

document.getElementById("resetTime").addEventListener("click",()=>{
    clearInterval(int)
    timer.innerHTML= '00 : 00 : 00 : 000 ';
})

document.getElementById("castTime").addEventListener("click",()=>{
    clearInterval(int)
    document.querySelector(".display").innerHTML= timer.innerHTML
})

function Display(){
    milliseconds+=10
    if(milliseconds==1000){
        milliseconds=0
        seconds++;
        if(seconds==60){
            seconds=0;
            minutes++;
            if(minutes==60){
                minutes=0
                hours++
            }
        }

    }
    let h=hours<10 ?"0"+hours:hours;
    let m=minutes <10 ? "0" + minutes :minutes;
    let s= seconds <10 ? "0" + seconds :seconds;
    let ms= milliseconds<10 ? "00" +milliseconds : milliseconds<100 ? "0" + milliseconds : milliseconds;
    timer.innerHTML=`${h} : ${m} : ${s} : ${ms}`
}