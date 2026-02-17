
export function setToSecondPage(first_page, second_page) {
    second_page.classList.remove("invisible");
    first_page.classList.add("invisible");
}

export function resetToFirstPage(timer, isPaused, first_page, second_page, pop_up, pause_sprint, resume_sprint) {
    clearInterval(timer);
    isPaused = false;

    first_page.classList.remove("invisible");
    second_page.classList.add("invisible");
    pop_up.classList.remove("active");

    pause_sprint.classList.remove("invisible");
    resume_sprint.classList.add("invisible");
}
