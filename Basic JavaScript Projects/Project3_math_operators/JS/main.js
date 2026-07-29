function addition(X, Y){
    console.log("x is:" + X);
    console.log("y is:" + Y);
    let Z = Number(X) + Number(Y);
    console.log("z is:" + Z);
    document.getElementById("Math").innerHTML = X + " plus " + Y + " equals " + Z;
}
function subtraction(X, Y){
    console.log("x is:" + X);
    console.log("y is:" + Y);
    let Z = Number(X) - Number(Y);
    console.log("z is:" + Z);
    document.getElementById("Math").innerHTML = X + " minus " + Y + " equals " + Z;
}
function multiplication(X, Y){
    console.log("x is:" + X);
    console.log("y is:" + Y);
    let Z = Number(X) * Number(Y);
    console.log("z is:" + Z);
    document.getElementById("Math").innerHTML = X + " times " + Y + " equals " + Z;
}
function division(X, Y){
    console.log("x is:" + X);
    console.log("y is:" + Y);
    let Z = Number(X) / Number(Y);
    console.log("z is:" + Z);
    document.getElementById("Math").innerHTML = X + " divided by " + Y + " equals " + Z;
}
function modulation(X, Y){
    console.log("x is:" + X);
    console.log("y is:" + Y);
    let Z = Number(X) % Number(Y);
    console.log("z is:" + Z);
    document.getElementById("Math").innerHTML = X + " divided by " + Y + " has a remainder of " + Z;
}
function random(){
    var Z = Math.round(Math.random() * 100);
    console.log(Z);
    document.getElementById("Math").innerHTML = Z;
}