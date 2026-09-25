function countLoop(){
    var noodles = ""; //empty string to add to later
    var count = 3; //variable for what the count is to
    while (count >= 0){ //keeps the while loop going until the count is less then 0
        noodles += count + "<br>"; //adds the count to a string and then adds a line break after it
        console.log(count);
        count --; //decrements the count by one
    }
    document.getElementById("countdown").innerHTML = noodles; //prints the string with all of numbers from each cycle of the loop in it in the html
}

var colors = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]; //creats an array that consists of multiple different colors
function colorLoop(){
    var I; //index variable
    var noodles = ""; //empty string to add to later
    for (I = 0; I < colors.length; I++){ //a for loop that designates the index at 0 for the start, keeps the loop going while the index is less then the total number of objects in the array, and increments the index by one each cycle
        noodles += colors[I] + "<br>"; //adds the currently selected object of the array(decided by the index) and adds it to the string with a line break after it
        console.log(colors[I])
    }
    document.getElementById("colorArray").innerHTML = noodles; //prints the string with the arrays contents added to it in the html
}

const NPC = {name:"William", race:"human", age:36}; //makes a constant object with three different properties
function constantFunction(){
    NPC.gender = "male"; //adds a fourth property to the constant
    NPC.age = 37; //adjusts one of the existing properties of the constant
    document.getElementById("constant").innerHTML = "The NPC's name is " + NPC.name + ", he is a " + NPC.race + " that is " + NPC.age + " years old." //prints a large string with multiple different properties from the constant added to it into the html
}

function objectFunction(){
    let game = { //creates a function leveled object
        title: "Halo: Combat Evolved", //adds a title property
        genre: "First Person Shooter", //adds a genre property
        platforms: "XBOX", //adds a platform property
        yearOfRelease: "2001", //adds a YOR property
        description: function() {
            return "This game is a " + this.genre + " named " + this.title + ", and it was released on " + this.platforms + " in " + this.yearOfRelease + ".";
        } //adds a function that returns a string with that lists all of the objects properties within a structured sentence
    };
    document.getElementById("object").innerHTML = game.description(); // prints the result of the called function(the one from the end of the game object) into the html
}