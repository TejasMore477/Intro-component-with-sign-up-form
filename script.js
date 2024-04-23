const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const Password = document.getElementById("Password");


//event
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    validate();
})


//email validation
const isemail = (emailValue) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    // Test the email against the pattern
    return emailPattern.test(emailValue);
}


function setErrorMsg(input , message){
    const formControl = input.parentElement;
    const error = formControl.querySelector("p");
    formControl.className = "form-control error";
    error.innerText = message;
}


function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}


const validate = () => {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const PasswordValue = Password.value.trim();


    //for fname
    if(fnameValue === ""){
        setErrorMsg(fname, "First Name cannot be empty");
    }
    else if(fname.length <= 2){
        setErrorMsg(fname, "Must have 3 characters");
    }
    else{
        setSuccessMsg(fname);
    }


    //for lname
    if(lnameValue === ""){
        setErrorMsg(lname, "Last Name cannot be empty");
    }
    else if(lnameValue.length <= 2){
        setErrorMsg(lname, "Must have 3 characters");
    }
    else{
        setSuccessMsg(lname);
    }


    //for email
    if(emailValue === ""){
        setErrorMsg(email, "email cannot be empty");
    }
    else if( !isemail(emailValue)){
        setErrorMsg(email, "Not a Valid email");
    }
    else{
        setSuccessMsg(email);
    }


    //for password
    if(PasswordValue === ""){
        setErrorMsg(Password, "password cannot be empty");
    }
    else if(PasswordValue.length <= 8){
        setErrorMsg(Password, "Password length > 8");
    }
    else{
        setSuccessMsg(Password);
    }

}