// Get a reference to the image element
const imageElement = document.getElementById("responsive-image");

// Define the image sources for desktop and mobile
const desktopImageSrc = "/assets/images/illustration-sign-up-desktop.svg";
const mobileImageSrc = "/assets/images/illustration-sign-up-mobile.svg";

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
