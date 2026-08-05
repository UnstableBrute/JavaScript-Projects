function rideFunction(){ //quick function that checks an imput that is set to 52 but changeable, and gives an answer if it is over 52, and a different one if it is equal to or under 52
    var Height, canRide;
    Height = document.getElementById("Height").value;
    canRide = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = canRide + " to ride.";
}

function Dog(Breed, Name, YOB, Gender) { // a function that lets you make objects of the dog catagory
    //switches the given strings/numbers for the parameters into variables attached to the object
    this.dogBreed = Breed;
    this.dogName = Name;
    this.dogYOB = YOB;
    this.dogGender = Gender;
}
//builds a few of the children of the object function above
var Jack = new Dog("Mini-Aussie", "Jack", 2017, "Male") 
var Cisco = new Dog("Mini-Aussie", "Cisco", 2014, "Male")
var Yukon = new Dog("Border-Collie", "Yukon", 2006, "Male")
function Puppy() { //a function that prints out some text using the variables from the "Jack" object above
    document.getElementById("Puppy").innerHTML = "This dogs name is " + Jack.dogName + ", it's a " + Jack.dogGender + " " + Jack.dogBreed + " that was born in " + Jack.dogYOB + ".";
}

function countFunct() { //a function that grabs the text inside the "counter" paragraph and assigns it to a variable called "count"
    var count = document.getElementById("counter").innerHTML;
    console.log(count);
    function increment() { //uses "count", and adds one to it, and then replaces whats in the "counter" paragraph with the new "count"
        count ++;
        document.getElementById("counter").innerHTML = count;
        console.log(count);
    }
    increment(); //calls the incement function
}