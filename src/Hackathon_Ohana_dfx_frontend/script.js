// Get the left and right buttons
var leftButton = document.querySelector('.fa-chevron-left');
var rightButton = document.querySelector('.fa-chevron-right');

// Add click event listeners to the buttons
leftButton.addEventListener('click', goBack);
rightButton.addEventListener('click', goForward);

// Function to go back
function goBack() {
  window.history.back();
}

// Function to go forward
function goForward() {
  window.history.forward();
}
