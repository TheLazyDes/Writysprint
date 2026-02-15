let button_5_min = document.getElementById("5-minutes-radio");
let button_10_min = document.getElementById("10-minutes-radio");
let button_25_min = document.getElementById("25-minutes-radio");
let button_custom = document.getElementById("Custom-button");



let sprint_start = document.getElementById("sprint-start");
let custom_sprint= document.getElementById("custom-sprint");
let pause_sprint=document.getElementById("pause-sprint");
let end_sprint=document.getElementById("end-sprint");
let resume_sprint=document.getElementById("resume-sprint");
let pop_up=document.getElementById("confirm-popup");



let first_page=document.getElementById('select-sprint');
let sprint_display=document.getElementById('sprint-display');
let second_page=document.getElementById('active-sprint');



let timer; 
let remainingTime;// store interval globally
let isPaused= false;


function displayTimer(time){
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    sprint_display.textContent =
        `${minutes} : ${seconds.toString().padStart(2, "0")}`;
}

function countdown(time){

    clearInterval(timer);

    remainingTime = time;   // store globally
    displayTimer(remainingTime);

    timer = setInterval(() => {

        if (remainingTime > 0){
            remainingTime--;
            displayTimer(remainingTime);
        } else {
            clearInterval(timer);
            sprint_display.textContent = "Time up!";
        }

    }, 1000);
}

function resetToFirstPage(){
    clearInterval(timer);
    first_page.classList.remove('invisible');
    second_page.classList.add('invisible');
    pop_up.classList.add('invisible');
}

function setToSecondPage(){
//second_page_container.classList.remove('invisible');
second_page.classList.remove('invisible');

first_page.classList.add('invisible');

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
    }else if(custom_sprint.value > 0){
        time=custom_sprint.value*60;
    console.log(time);

    }
    else{
        console.log("No good selection")
    }
countdown(time);

setToSecondPage();

})


resume_sprint.addEventListener('click', ()=>{
    if (isPaused) {
        countdown(remainingTime);
        isPaused = false;
        console.log("Your sprint has resumed")
        pause_sprint.classList.remove('invisible');
        resume_sprint.classList.add('invisible');
    }
})

pause_sprint.addEventListener('click', ()=>{
    clearInterval(timer);

       isPaused = true;
    console.log("Your sprint is paused")
    pause_sprint.classList.add('invisible');
     resume_sprint.classList.remove('invisible');
    }
)

end_sprint.addEventListener('click', ()=>{
    clearInterval(timer);
    sprint_display.textContent = "Sprint Ended";

    setTimeout(()=>{
        /*second_page.classList.add("invisible");
        first_page.classList.remove("invisible");

        */pop_up.classList.remove("invisible");
    },1000)
    console.log("Your sprint has ended")
})


button_custom.addEventListener('click', ()=>{
    custom_sprint.classList.remove('invisible');


   /* let custom_sprint= document.getElementById("custom-sprint").value;
    
    time=custom_sprint*60;
    console.log(time);
    countdown(time);*/
})
    
