let button_5_min = document.getElementById("5-minutes-radio");
let button_10_min = document.getElementById("10-minutes-radio");
let button_25_min = document.getElementById("25-minutes-radio");
let button_custom = document.getElementById("Custom-button");
let sprint_start = document.getElementById("sprint-start");
let custom_sprint= document.getElementById("custom-sprint")



let first_page=document.getElementById('select-sprint');
let sprint_display=document.getElementById('sprint-display');



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




sprint_start.addEventListener("click", ()=>{
    if(button_5_min.checked){
        time=300;
        
        console.log("Your 5 minuted have started")

    }else if(button_10_min.checked)
    {
        time=600;
        console.log("Your 10 minuted have started")
    }else if(button_25_min.checked){
        time=1500;
    }else if(custom_sprint.value!=" "){
        time=custom_sprint.value*60;
    console.log(time);
    countdown(time);

    }

    else{
        console.log("No good selection")
    }
countdown(time);

})




/*button_5_min.addEventListener('click', ()=>{
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

countdown(time);
console.log("Your 25 minuted have started")
})*/

button_custom.addEventListener('click', ()=>{
    custom_sprint.classList.remove('invisible');


   /* let custom_sprint= document.getElementById("custom-sprint").value;
    
    time=custom_sprint*60;
    console.log(time);
    countdown(time);*/
})
    
