 

export function sendData(remainingTime, setTime, workcase,streakNumber) {

    console.log("Send Data started");
   

    if (setTime - remainingTime < 0) {
        console.log("Invalid time difference");
        return;
    }else if (setTime - remainingTime <= 5) {
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
            streakNumber.textContent = `Current Streak: ${data} day(s)`;
            console.log("Long sprint completed"); // ✅ now inside .then()
        })
        .catch(err => console.error("Fetch error:", err));
        break;

    default:
        console.log("Invalid workcase");
}
}