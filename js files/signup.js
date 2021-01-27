let email = document.getElementById("email");
let error = document.getElementById("error");
let phone = document.getElementById("phonenumber");
let phoneno = document.getElementById("phoneno");
let password = document.getElementById("password");
let incorrect = document.getElementById("incorrect");



function validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    
    if(regexp.test(email.value)){
        error.innerHTML = "";
        error.style.color = "";
        return true;
    }
    else{
        error.innerHTML = "Enter a valid mail-id";
        error.style.color = "red";
        return false;
        
    }
}

function validatephone(){
    let regexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (regexp.test(phone.value)) {
        phoneno.innerHTML = "";
        phoneno.style.color = "";
        return true;

    }
    else{
        phoneno.innerHTML = "Invalid format";
        phoneno.style.color = "red";
        return false;
    }
}

// function validatepassword(){
//     var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
//     // let regexp = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
//     if (strongRegexp.test(password.value)) {
//         incorrect.innerHTML = "valid";
//         incorrect.style.color = "green";
//         return true;
        
//     }
//     else{
//         incorrect.innerHTML = "invalid";
//         incorrect.style.color = "red";
//         return false;
//     }
// }
function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    var pwd = document.getElementById("password");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
    }
}

 function check() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
      return true;
    
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching';
      return false;
    }
  }



