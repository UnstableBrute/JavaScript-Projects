function getMsg(){
    //STEP 1: setup the XML HTTP request object
    let ajaxRequest = new XMLHttpRequest();

    //get input value of name that display to user after request has been made
    let inputVal = document.getElementById("fullName").value;

    //function to display user input value once request has been recieved
    ajaxRequest.onload = function(){
        document.getElementById("tkuMsg").innerHTML = "Thank you " + inputVal + " for signing up!";
    }

    //  STEP 2: prepare the type of request and what to request from the server
    ajaxRequest.open('GET', 'response.html', true);

    //STEP 3: defines the ajax response callback method that establishes whetehr the response was successful and where the data should be displayed
    ajaxRequest.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            document.getElementById('content').innerHTML = ajaxRequest.responseText;
        }
    }

    //STEP 4: send the request
    ajaxRequest.send();
}