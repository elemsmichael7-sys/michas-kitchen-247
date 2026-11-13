// VARIABLES
let specialDishes = ["Jollof Rice + Chicken - ₦4,500", "Grilled Chicken + Chips - ₦6,000", "Shawarma - ₦3,500"];

// FUNCTION 1: Show Today's Special (Interactive Feature)
function showSpecial() {
  let randomIndex = Math.floor(Math.random() * specialDishes.length);
  let messageElement = document.getElementById("specialMessage");
  if (messageElement) {
    messageElement.textContent = "Today's Special: " + specialDishes[randomIndex];
    messageElement.style.color = "#E85A42";
    messageElement.style.fontWeight = "bold";
  }
}

// FUNCTION 2: Mobile Menu Toggle
function toggleMenu() {
  let navLinks = document.getElementById("navLinks");
  if (navLinks) {
    navLinks.classList.toggle("show");
  }
}

// FUNCTION 3: Validate Contact Form
function validateForm(event) {
  event.preventDefault(); // Stop form from refreshing page

  let fullName = document.getElementById("fullName").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();

  let isValid = true;

  // Clear old errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("subjectError").textContent = "";
  document.getElementById("messageError").textContent = "";

  if (fullName === "") {
    document.getElementById("nameError").textContent = "Please enter your full name.";
    isValid = false;
  }
  if (email === "" || !email.includes("@")) {
    document.getElementById("emailError").textContent = "Please enter a valid email.";
    isValid = false;
  }
  if (subject === "") {
    document.getElementById("subjectError").textContent = "Please enter a subject.";
    isValid = false;
  }
  if (message.length < 10) {
    document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMessage").textContent = "Thank you " + fullName + "! Your message has been received. (Demo only - not sent to a real server)";
    document.getElementById("successMessage").style.color = "green";
    document.getElementById("contactForm").reset();
  }
}

// EVENT HANDLING - Run when page loads
document.addEventListener("DOMContentLoaded", function() {
  let welcomeBtn = document.getElementById("welcomeBtn");
  if (welcomeBtn) {
    welcomeBtn.addEventListener("click", showSpecial);
  }

  let menuBtn = document.getElementById("menuBtn");
  if (menuBtn) {
    menuBtn.addEventListener("click", toggleMenu);
  }

  let contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", validateForm);
  }
});