// script.js

// Function to handle the "Buy Now" button click
function buyNow() {
    alert("Thank you for your purchase!");
  }
  
  // Get all the "Buy Now" buttons
  var buyNowButtons = document.querySelectorAll(".t-shirt a");
  
  // Attach click event listeners to each button
  for (var i = 0; i < buyNowButtons.length; i++) {
    buyNowButtons[i].addEventListener("click", buyNow);
  }
  