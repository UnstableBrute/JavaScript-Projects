var ten = 10; //a global variable that assigns the number 10 a variable named "ten"
function timeTeller() {
    var time = new Date().getHours(); //a local variable that assigns the the hour read from the computer to a variable named "time" when the function is called
    var answer; //a unassigned variable named "answer"
    if (time < 12 == time > 0) {
        answer = "It's morning time.";
    } //a conditional that applies a string to the "answer" variable if the "time" variable fits between the two numbers given
    else if (time >= 12 == time < 18) {
        answer = "It's the afternoon.";
    } //a conditional that applies a string to the "answer" variable if the "time" variable fits between the two numbers given
    else if (time >= 18 == time <= 23) {
        answer = "It's evening time.";
    } //a conditional that applies a string to the "answer" variable if the "time" variable fits between the two numbers given
    else {
        answer = "Could not read the time.";
    } //applies a string to the "answer" variable if non of the conditionals suceeded, warning the user that ther is some issue
    document.getElementById("generalTime").innerHTML = answer; //prints the "answer" variable to the paragraph with the "generalTime" id tag
}
function specificTime() {
    console.log(time); //writes a log in the console containing whatever is applied to the time variable
} //this function will fail as it cannot access the variable "time", as it is a local variable of another function