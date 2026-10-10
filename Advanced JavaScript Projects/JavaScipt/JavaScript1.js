function switchFunction(){
    var input = document.getElementById("switchInput").value; //makes the user input into a variable usable in javascript
    var switchOutput; //an empty string to add too later depending on the input
    switch(input){
        //specializes the output(using the variable) depending on which number the input is
        case "1":
            switchOutput = "1 is the first number."
        break;
        case "2":
            switchOutput = "2 is the second number."
        break;
        case "3":
            switchOutput = "3 is the third number."
        break;
        case "4":
            switchOutput = "4 is the forth number."
        break;
        case "5":
            switchOutput = "5 is the fifth number."
        break;
        case "6":
            switchOutput = "6 is the sixth number."
        break;
        case "7":
            switchOutput = "7 is the seventh number."
        break;
        case "8":
            switchOutput = "8 is the eighth number."
        break;
        case "9":
            switchOutput = "9 is the ninth number."
        break;
        case "10":
            switchOutput = "10 is the tenth number."
        break;
        default:
            switchOutput = "Please enter a whole number from 1-10."; //informs the user that the input was not within the parameters of the function
    }
    document.getElementById("switchOutput").innerHTML = switchOutput; //prints the output variable into the html element that has the listed id
}

function classFunction(){
    var C = document.getElementsByClassName("classOut"); //assigns a variable to the command that grabs the elements with the class named "classOut"
    C[1].innerHTML = "This sentence changed because of the button."; //changes the content of the second element(based off of the index) with the "classOut" class
}