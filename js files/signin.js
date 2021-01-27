let email = document.getElementById("email");
let error = document.getElementById("error");
function validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    
    if(regexp.test(email.value)){
        error.innerHTML = "";
        error.style.color = "";
        return true;
    }
    else{
        error.innerHTML = "Enter your email";
        error.style.color = "red";
        return false;
        
    }
}

let password = document.getElementById("password");
let incorrect = document.getElementById("incorrect");

function validatepassword(){
    let regexp = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;

    if(regexp.test(password.value)){
        incorrect.innerHTML = "";
        incorrect.style.color = "";
        return true;
    }
    else{
        incorrect.innerHTML = "Invalid password";
        incorrect.style.color = "red";
        return false;
    }

}