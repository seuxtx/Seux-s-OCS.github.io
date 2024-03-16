        // Variable to keep track of image state
        var imageDisplayed = false;

        // JavaScript to handle button click event
        document.getElementById('display-image-btn').addEventListener('click', function() {
            // Specify the path of your uploaded image
            var imageUrl = './images/Sneakgolbs.png';

            // Create an image element
            var imgElement = document.createElement('img');
            imgElement.src = imageUrl;

            // Clear previous image if any
            var imageContainer = document.getElementById('image-container');
            imageContainer.innerHTML = '';

            if (!imageDisplayed) {
                // Append the new image element to the image container
                imageContainer.appendChild(imgElement);
                // Update image state
                imageDisplayed = true;
            } else {
                // Reset image state
                imageDisplayed = false;
            }
        });