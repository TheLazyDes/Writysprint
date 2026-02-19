let login_switch = document.getElementById("login-switch");
let signup_switch = document.getElementById("signup-switch");
let login= document.getElementById("login");
let signup = document.getElementById("signup");

login_switch.addEventListener("click", ()=>{
    signup.classList.add("invisible");
    login.classList.remove("invisible")

})

signup_switch.addEventListener("click", ()=>{
    login.classList.add("invisible");
    signup.classList.remove("invisible");
})