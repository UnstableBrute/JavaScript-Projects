function validateFunction(){
    let firstName = document.forms["contactForm"]["firstName"].value;
    let secondName = document.forms["contactForm"]["secondName"].value;
    let emailAddress = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;
    if (firstName == "" || secondName == "" || emailAddress == "" || message == ""){
        alert("Please fill in all the boxes");
        return false;
    }
    else{
        alert("Form was filled out properly"); //would say that it was submitted, but didn't do that side of it yet
        return;
    }
}