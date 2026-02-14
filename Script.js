let button_5_min = document.getElementById("5-minutes");
let button_10_min = document.getElementById("10-minutes");
let button_25_min = document.getElementById("25-minutes");
let button_custom = document.getElementById("Custom-button");
let custom_sprint= document.getElementById("custom-sprint");

let first_page=document.getElementById('select-sprint');
let sprint_display=document.getElementById('sprint-display');


custom_sprint=Math.floor(custom_sprint);
let timer; // store interval globally

function displayTimer(time){
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    sprint_display.textContent =
        `${minutes} : ${seconds.toString().padStart(2, "0")}`;
}

function countdown(time){

    clearInterval(timer); // stop previous timer if running

    displayTimer(time); // show initial time

    timer = setInterval(() => {

        if (time > 0){
            time--;
            displayTimer(time);
        } else {
            clearInterval(timer);
            sprint_display.textContent = "Time up!";
        }

    }, 1000);
}





button_5_min.addEventListener('click', ()=>{
time=300;
countdown(time);
console.log("Your 5 minuted have started")
})


button_10_min.addEventListener('click', ()=>{
time=600;
countdown(time);
console.log("Your 10 minuted have started")
})

button_25_min.addEventListener('click', ()=>{
time=1500;
countdown(time);
console.log("Your 25 minuted have started")
})

button_custom.addEventListener('click', ()=>{
    
    //time=custom_sprint*60;
    console.log(custom_sprint);
    //countdown(time);
})
    
