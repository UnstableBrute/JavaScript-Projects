function nameFunciton() {
    var firstName = document.getElementById("firstName").innerHTML; //this assigns the the text marked with the id of 'firstName' to the variable 'firstName'
    var lastName = document.getElementById("lastName").innerHTML; //this assigns the the text marked with the id of 'lastName' to the variable 'lastName'
    var name = firstName; //makes a variable called name and assigns it the value of the 'firstName'
    name += " " + lastName; //adds a space and the variable 'lastName' to the name variable, adding it to the first name
    window.alert(name); //makes a pop up window with the 'name' variable as the text value
}