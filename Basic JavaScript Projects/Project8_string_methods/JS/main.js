function concatenate() {
    var sect1 = "Pressing the button ";
    var sect2 = "below will grab the string ";
    var sect3 = "located at the points ";
    var sect4 = "'9' and '19' in this paragraph.";
    var full = sect1.concat(sect2, sect3, sect4); //combines the previous 4 variables into a single one named 'full'
    document.getElementById("sentence").innerHTML = full;
} //names a bunch of variables and assigns them strings, and then concatenates those variables into a single one, then replaces the <p> with the id 'sentence' with the new sentence
function slice() {
    var currentSentence = document.getElementById("sentence").innerHTML; //grabs the text within the element with the id of 'sentence'
    var nine_nineteen = currentSentence.slice(9, 19); //makes a new string from a specific section of the string just grabbed
    document.getElementById("sliceButt").innerHTML = nine_nineteen; //replaces the text on the button with the section of the string that was grabbed
}
function numbing() {
    var X = 54897622.24598138575354953244578; //a variable of a long random number
    var Y = X.toPrecision(7); //assigns a variable to the previous number rounded/shortend to 7 units long
    var Z = Y.toString(); //converts the precious rounded variable into a string
    document.getElementById("numbSentence").innerHTML = Z; //writes the string number variable inside of the element with the id of 'numbSentence'
}