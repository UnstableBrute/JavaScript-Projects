function getReceipt() {
    //this initializes our string so it can get passed from function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    //runs through the array of sizes to see which one is checked, them makes the checked on a variable
    for (var i = 0; i < sizeArray.length; i++){
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>"
        }
    }
    if (selectedSize === "Personal Pizza"){
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza"){
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza"){
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza"){
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza"){
        sizeTotal = 16;
    }

    //adjusts the price of the order according to the size chosen
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get pased on to each function
    getTopping(runningTotal, text1);
};
function getTopping(runningTotal, text1){
    //initializes the toppings array
    var toppingTotal = 0;
    var selectedTopping = [];
    var selectedMeat = [];
    var selectedVeg = [];
    var toppingArray = document.getElementsByClassName("toppings");
    var meatToppingArray = document.getElementsByClassName("meatToppings");
    var vegToppingArray = document.getElementsByClassName("vegToppings");
    //runs through the array of toppings to see which ones were chosen
    for (var j = 0; j < toppingArray.length; j++){
        //adds the checked items to separate a separate array
        if (toppingArray[j].checked){
            selectedTopping.push(toppingArray[j].value);
            //adds the checked items to a different secondary array depending on what type of topping it is
            if (toppingArray[j].classList.contains("meatToppings")){
                selectedMeat.push(toppingArray[j].value);
            } else if (toppingArray[j].classList.contains("vegToppings")){
                selectedVeg.push(toppingArray[j].value);
            };
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    var meatCount = selectedMeat.length;
    var vegCount = selectedVeg.length;
    //adds up the total cost based off the size, which type of toppings, and number of those toppings
    if (toppingCount > 1){
        if (meatCount >= 1 && vegCount >= 1){
            toppingTotal = (meatCount - 1 + 0.5 * (vegCount - 1));
        } else if (meatCount >= 1 && vegCount < 1){
            toppingTotal = (meatCount - 1);
        } else if (meatCount < 1 && vegCount >= 1){
            toppingTotal = ((vegCount - 1) * 0.5);
        } else {
            console.log("something went real wrong");
        }
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal).toFixed(2);
    console.log("total selected topping items: "+toppingCount);
    console.log(meatCount+" meat topping(s) - 1 free meat topping and "+vegCount+" veggie topping(s) - 1 free veggie topping = $"+toppingTotal);
    console.log("topping text1: "+text1);
    console.log("Purchased Total: $"+runningTotal);
    //adds the chosen toppings and the total price to the view
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+"</strong></h3>";
}