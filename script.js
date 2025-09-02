const displayMessage = document.querySelector(".displayMessage")
const hidden = document.querySelector(".hidden");
const changeBg = document.querySelector(".changeBg")
const body = document.querySelector("body");
const startCount = document.querySelector(".start")
const displayCount = document.querySelector(".counter");
const dropDown = document.querySelector(".dropDown")
const register = document.getElementById("register")
const message = document.getElementById("message");


//----part one
displayMessage.addEventListener("click", () => {
    hidden.classList.toggle("unhide");
})

changeBg.addEventListener("click", () => {
    body.style.background = `#${Math.floor(Math.random() * 17777612).toString(16)}`
})

//-----part two--

let count = 5
startCount.addEventListener("click", () => {
    startCount.innerHTML = "counter started"
    const interval = setInterval(() => {
        count -= 1
        displayCount.innerHTML = count


        if (count < 1) {
            clearInterval(interval)
            displayCount.innerHTML = "GO"
        }
    }, 1000);
})

dropDown.addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("showNav")
})

//-------------part three------------


register.addEventListener("submit", (e) => {
    e.preventDefault()
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password=document.getElementById("password").value.trim();
    
     //------checking if any fiels is empty
    if (username.value == "" || email.value=="" ||password.value=="") {
        message.innerHTML = "fill all fields";
        message.classList.add("error")

        setTimeout(() => {
            message.innerHTML = "";
            message.classList.remove("error")
        }, 3000);
        return
    }


    //-----checcking username length------
    if(username.length<4){
         message.innerHTML = "Username cannot be less than 4 characters";
        message.classList.add("error")

        setTimeout(() => {
            message.innerHTML = "";
            message.classList.remove("error")
        }, 3000);
    }

    //------checking email validity
const regX= /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!regX.test(email)){
        message.innerHTML = "invalid email";
        message.classList.add("error")

        setTimeout(() => {
            message.innerHTML = "";
            message.classList.remove("error")
        }, 3000);
        return
    }

    //checking password strength
    const passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
 if(!passwordPattern.test(password)){
        message.innerHTML = "Password must be 8 characters long, one captital and lowercase, number and special character";
        message.classList.add("error")

        setTimeout(() => {
            message.innerHTML = "";
            message.classList.remove("error")
        }, 3000);
        return
    }


})