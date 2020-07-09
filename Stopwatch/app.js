// function timer(){
//     console.log("Running .....")

// }
// setInterval(timer,1000) // har 1 sec bad Running aaye ga


// function timeout(){
//     console.log("Runing after 10 sec and then stop ")
// }
// setTimeout(timeout,3000)  // one time chale ga 

// // how to stop this function 
// var count =0;
// var interval;
// function timer(){
//     console.log(count);
//     count++;
// }

// interval=setInterval(timer,1000) 
//  // ab te function 5sec tak chale ga
// setTimeout(function(){
//     clearInterval(interval);
// }
// ,5000)







// stop watch


var min=00;
var sec=00;
var msec=00;
var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");
var interval;

function timer(){
    msec++
    msecHeading.innerHTML=msec;
    if (msec>= 100){
        sec++
        secHeading.innerHTML=sec
        msec=0;
    }
    else if (sec>=59){
        min++
        minHeading.innerHTML=min
        sec=0
    }
    
}

function start(){
    document.getElementById("startbtn").disabled = true;
interval=setInterval(timer,10); // ab ye 10 mili sec ke speed se chale ga very fast

}

function stop(){
    document.getElementById("startbtn").disabled = false;
    clearInterval(interval)
}
function reset(){
    document.getElementById("startbtn").disabled = false;
    clearInterval(interval)
     min=00;
     sec=00;
     msec=00;
    secHeading.innerHTML="00"
    minHeading.innerHTML="00"
    msecHeading.innerHTML="00"

}














