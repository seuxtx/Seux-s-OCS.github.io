const images = [
    "images/Falkedex042_1tl.png",
    "images/Falkedex042_2tl.png",
    "images/Falkedex042_3tl.png",
    
];

let currentIndex = 0;

function showImage(index) {
    const firstImage = document.getElementById('firstImage');
    const imgElement = firstImage.querySelector('img');
    imgElement.src = images[index];
}

document.getElementById('nextButton').addEventListener('click', () => {
    console.log("Next button clicked"); // Debugging
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

document.getElementById('prevButton').addEventListener('click', () => {
    console.log("Previous button clicked"); // Debugging
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

// Show the first image initially
showImage(currentIndex);