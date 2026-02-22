
import { setToSecondPage, resetToFirstPage } from "./subscripts/sprintmanager.js";


const button_5_min = document.getElementById("5-minutes-radio");
const button_10_min = document.getElementById("10-minutes-radio");
const button_25_min = document.getElementById("25-minutes-radio");
const button_custom = document.getElementById("Custom-button");

const stop_button = document.getElementById("yes-button");
const cancel_button = document.getElementById("no-button");

const sprint_start = document.getElementById("sprint-start");
const custom_sprint = document.getElementById("custom-sprint");
const pause_sprint = document.getElementById("pause-sprint");
const end_sprint = document.getElementById("end-sprint");
const resume_sprint = document.getElementById("resume-sprint");
const pop_up = document.getElementById("confirm-popup");

const first_page = document.getElementById("select-sprint");
const sprint_display = document.getElementById("sprint-display");
const second_page = document.getElementById("active-sprint");

let timer = null;
let remainingTime = 0;
let isPaused = false;
let setTime = 0;

/* ========================= */
/* DISPLAY TIMER */
/* ========================= */

function displayTimer(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    sprint_display.textContent =
        `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

/* ========================= */
/* COUNTDOWN */
/* ========================= */

function countdown(time) {
    clearInterval(timer);

    remainingTime = time;
    displayTimer(remainingTime);

    timer = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime--;
            displayTimer(remainingTime);
        } else {
            clearInterval(timer);
            sprint_display.textContent = "Time up!";
        }
    }, 1000);
}




/* ========================= */
/* START SPRINT */
/* ========================= */

sprint_start.addEventListener("click", () => {
    let time = 0;

    if (custom_sprint.value > 0) {
        button_10_min.checked = false;
        button_5_min.checked = false;
        button_25_min.checked = false;
        time = custom_sprint.value * 60;
    }else if (button_5_min.checked) {
        setTime=300;
        time = 300;
    } else if (button_10_min.checked) {
        setTime=600;
        time = 600;
    } else if (button_25_min.checked) {
        setTime=1500;
        time = 1500;
    } else if (custom_sprint.value > 0) {
        button_10_min.checked = false;
        button_5_min.checked = false;
        button_25_min.checked = false;
        time = custom_sprint.value * 60;
        setTime = time;
    }

    if (time <= 0) {
        console.log("Please select a valid sprint time.");
        return;
    }

    isPaused = false;
    countdown(time);
    setToSecondPage(first_page, second_page);
});

/* ========================= */
/* PAUSE / RESUME */
/* ========================= */

function resumeExecution() {
    if (isPaused && remainingTime > 0) {
        countdown(remainingTime);
        isPaused = false;

        pause_sprint.classList.remove("invisible");
        resume_sprint.classList.add("invisible");
    }
}

resume_sprint.addEventListener("click", resumeExecution);

pause_sprint.addEventListener("click", () => {
    clearInterval(timer);
    isPaused = true;

    pause_sprint.classList.add("invisible");
    resume_sprint.classList.remove("invisible");
});

/* ========================= */
/* END SPRINT */
/* ========================= */

end_sprint.addEventListener("click", () => {
    clearInterval(timer);
    isPaused = true;

    pop_up.classList.add("active");
});

/* ========================= */
/* POPUP BUTTONS */
/* ========================= */

stop_button.addEventListener("click", () => {
    resetToFirstPage(timer, isPaused, first_page, second_page, pop_up, pause_sprint, resume_sprint)
});

cancel_button.addEventListener("click", () => {
    pop_up.classList.remove("active");
    resumeExecution();
});

/* ========================= */
/* CUSTOM BUTTON */
/* ========================= */

button_custom.addEventListener("click", () => {
    custom_sprint.classList.remove("invisible");
});

