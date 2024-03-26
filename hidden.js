document.addEventListener("DOMContentLoaded", function() {
    // Variable to keep track of image state
    let imageDisplayed = false;

    // Button click event handler
    document.getElementById('display-image-btn').addEventListener('click', function() {
        // Specify the path of your uploaded image
        const imageUrl = './images/Essara.jpg';

        // Get the image container
        const imageContainer = document.getElementById('image-container');

        // If the image is currently displayed, remove it
        if (imageDisplayed) {
            imageContainer.innerHTML = '';
            imageDisplayed = false;
        } else {
            // If the image is not displayed, show it
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imageContainer.appendChild(imgElement);
            imageDisplayed = true;
        }
    });
});
