// Get references to the elements
const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spinButton");

let spinning = false;
let rotation = 0;
let spinSpeed = 6; // Adjust the spinning speed as needed

// Function to start spinning
function startSpin() {
    if (!spinning) {
        spinning = true;
        rotateWheel();
        const randomDuration = getRandomDuration();

        // Calculate the rotation needed to stop the wheel within the specified duration
        const stopRotation = rotation + (randomDuration / 500) * spinSpeed;

        // Set the transition to stop the wheel smoothly
        wheel.style.transition = `transform ${randomDuration / 1000}s cubic-bezier(0.68, -0.55, 0.27, 1.55)`;

        // Rotate the wheel to the calculated stop position
        wheel.style.transform = `rotate(${stopRotation}
            
            deg)`;

        setTimeout(pickOption, randomDuration); // Call pickOption after randomDuration
    }
}

// Function to rotate the wheel
function rotateWheel() {
    rotation += spinSpeed;
    wheel.style.transform = `rotate(${rotation}deg)`;
    if (spinning) {
        requestAnimationFrame(rotateWheel);
    }
}

// Function to pick an option when the wheel stops
function pickOption() {
    // Calculate which option is at the top when the wheel stops
    const options = document.querySelectorAll(".section");
    const optionHeight = options[0].offsetHeight;
    const wheelRotation = rotation % 360;
    const topOptionIndex = Math.floor((360 - wheelRotation) / 60);

    // Do something with the selected option (e.g., display it)
    const selectedOption = options[topOptionIndex];
    console.log("Selected Option:", selectedOption.textContent);

    // Reset the rotation and transition properties
    rotation = 0;
    wheel.style.transform = "rotate(0deg)";
    wheel.style.transition = "";

    // End the spinning state
    spinning = false;
}

// Add click event listener to the button
spinButton.addEventListener("click", startSpin);

// Function to get a random spinning duration between 5 and 7 seconds
function getRandomDuration() {
    return Math.floor(Math.random() * 2000) + 5000; // Between 5000 and 7000 milliseconds
}


/* Hamburger menu */
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('mobile-hidden');
});