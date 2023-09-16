// Get a reference to the image element
const imageElement = document.getElementById("responsive-image");
// Define the image sources for desktop and mobile
const desktopImageSrc = "./assets/images/illustration-sign-up-desktop.svg";
const mobileImageSrc = "./assets/images/illustration-sign-up-mobile.svg";
// variables for the inside-container,form and thank-you-card
const emailForm = document.getElementById("emailForm");
const insideContainer = document.querySelector(".inside-container");
const thankYouCard = document.getElementById("thank-you-card");
const dismissButton = document.getElementById("dismiss-button");

// Function to update the image source based on screen width
const updateImageSource = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
        // Mobile view
        imageElement.src = mobileImageSrc;
    } else {
        // Desktop view
        imageElement.src = desktopImageSrc;
    }
};
// Initial call to set the image based on the initial screen width
updateImageSource();
// Add an event listener to update the image source when the window is resized
window.addEventListener("resize", updateImageSource);

// Add event Listener to the form
emailForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Perform any necessary validation here
    const emailInput = document.getElementById("emailInput");
    const confirmation = document.getElementById("confirmation");
    confirmation.innerHTML = e.target.emailInput.value;
    // Assuming the email submission is successful, show the "thank you" card
    showThankYouCard();
});
// function to show the thank you card
const showThankYouCard = () => {
    insideContainer.style.display = "none"; // Hide the form
    thankYouCard.style.display = "block"; // Show the "thank you" card
};
// event listener for dismiss button
dismissButton.addEventListener("click", () => {
    dismissThankYouCard();
});
//function take you back to the main card component
const dismissThankYouCard = () => {
    insideContainer.style.display = "flex";
    thankYouCard.style.display = "none";
};
