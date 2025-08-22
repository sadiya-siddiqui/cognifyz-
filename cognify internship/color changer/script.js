
                     // //random color
 window.addEventListener("DOMContentLoaded", function () {
let btn2=document.getElementById("btn2");
btn2.addEventListener("click",function(){
    let a=Math.floor(Math.random()*255)
    let b=Math.floor(Math.random()*255)
    let c=Math.floor(Math.random()*255)
document.body.style.backgroundColor=`rgb(${a},${b},${c})`;
 });
btn2.addEventListener("mouseleave",function(){
   document.body.style.backgroundColor="white"
});
});


                      // greeting message

const greetingElement = document.getElementById('greeting');
const dateElement = document.getElementById('date');
const timeElement = document.getElementById('time');

function getGreeting() {
    const currentTime = new Date().getHours();
    let greeting;

    if (currentTime < 12) {
        greeting = 'Good Morning!☀';
    } else if (currentTime < 17) {
        greeting = 'Good Afternoon! 🌞';
    } else if(currentTime<20) {
        greeting = 'Good Evening!🌅';
    }
    else{
        greeting="Good Night! 😴"
    }

    return greeting;
}

function getCurrentDate() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
}

function getCurrentTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

greetingElement.textContent = getGreeting();
dateElement.textContent = getCurrentDate();
timeElement.textContent = getCurrentTime();

// Update time every second
setInterval(() => {
    timeElement.textContent = getCurrentTime();
}, 1000);

