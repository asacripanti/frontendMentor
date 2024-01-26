const container = document.querySelector(".container");
const containerTwo = document.querySelector(".containerTwo");
const form = document.querySelector(".subscribeForm");
const emailInput = document.querySelector(".emailInput");
const successMsg = document.querySelector(".successMsg");
const dismissBtn = document.querySelector(".dismissBtn")
const errorMsg = document.querySelector(".errorMsg");
const submitBtn = document.querySelector(".submitBtn");


form.addEventListener("submit", (e) => {
    e.preventDefault();


    emailInput.setCustomValidity("");
    emailInput.classList.remove("error");
    

    container.classList.add("hide");
    containerTwo.classList.remove("hide");

    const email = emailInput.value
    emailInput.classList.add('formEmail')

    successMsg.innerHTML = `A confirmation email has been sent to <strong>${email}</strong>. 
    Please open it and click the button inside to confirm your subscription.`;
})

dismissBtn.addEventListener("click", function(){
    containerTwo.classList.add("hide");
    container.classList.remove("hide");
})

submitBtn.addEventListener("click", function(){
    if(!form.checkValidity()){
        errorMsg.classList.add("errorMsgView");
    }
    else{
        errorMsg.classList.remove("errorMsgView");
    }
})


