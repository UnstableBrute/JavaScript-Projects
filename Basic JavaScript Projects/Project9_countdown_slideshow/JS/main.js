function countdown() {
    var seconds = document.getElementById("seconds").value; //transforms the value within the "seconds" input into a variable

    function tick() {
        seconds = seconds - 1; //decreases the variable by one
        timer.innerHTML = seconds; //has the paragraph marked as timer = the variable of "seconds"
        var time = setTimeout(tick,1000); //sets a variable that pauses the program for 1 second
        if (seconds == -1) { //triggers once the "seconds" is in the negatives
            alert("Time's up!"); //alerts the user with a pop up that the timer is done
            clearTimeout(time); //stops the timerfrom pauseing the program
            timer.innerHTML = ""; // clears the "timer" paragraph so that it doesn't keep displaying the most recent time(in this case '0')
        }
    }
    tick(); //calls the function 
}

let slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}