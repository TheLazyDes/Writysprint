 

export function sendData(remainingTime, setTime, workcase) {

    console.log("Send Data started");
   let worktime= setTime - remainingTime

    if ( worktime < 0) {
        console.log("Invalid time difference");
        return;
    }else if (worktime <= 5) {
        workcase = "short";
    } else {
        workcase = "long";
    }

 
       switch (workcase) {
    case "short":
        console.log("Short sprint completed");
        break;

    case "long":
        fetch('/Writysprint/model/model.php', {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            credentials: "same-origin",
            body: "action=makestreak"
        })
        .then(response => response.text())
        .then(data => {
            console.log("Server returned streak:", data);
            console.log("Long sprint completed"); // ✅ now inside .then()
        })
        .catch(err => console.error("Fetch error:", err));
        break;

    default:
        console.log("Invalid workcase");
}
}

export function getData(streakNumber, timeLeft){

    fetch('/Writysprint/model/model.php', {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            credentials: "same-origin",
            body: "action=getstreak"
        })
        .then(response => response.text())
        .then(data => {
            console.log("Server returned streak:", data);
            console.log("Long sprint completed"); // ✅ now inside .then()
            streakNumber.textContent= data;
        })
        .catch(err => console.error("Fetch error:", err));

}


export function sendtime(setTime, remainingTime){
    console.log("Your complete time", setTime-remainingTime);

    //modify code to send to php backend to store in timespent
    //write the code to replenish the time spent for the day and for the month

    

}