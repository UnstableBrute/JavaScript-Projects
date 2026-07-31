function dictionary(){
    var Car = { //opens the variable named 'Car'
        Make: "Toyota", //child of 'Car', represents the make
        Model: "Hilux", //child of 'Car', represents the model
        Year: 2003, //child of 'Car', represents the year it was made
        Milage: 261398 //child of 'Car', represents the milage it currently has
    }
    delete Car.Model; //deletes the milage child of var 'Car'
    document.getElementById("Dictionary").innerHTML = Car.Model; //writes the content of the 'Car' variable child 'Model' in place of the content of the paragraph with the ID "Dictionary" when this function is called
}