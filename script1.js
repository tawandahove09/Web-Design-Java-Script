


const loginForm = document.getElementById("loginForm");


const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");


loginForm.addEventListener("submit", function(event) {

    
    event.preventDefault();

    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    
    errorMessage.textContent = "";
    successMessage.textContent = "";

    
    if (email === "" || password === "") {

        errorMessage.textContent = "Please enter your email and password.";

    } else {

        
        successMessage.textContent = "Login successful!";

    }

});
