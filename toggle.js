document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const images1 = document.querySelectorAll('.pokemon-grid .image img');
    const originalSources = Array.from(images1).map(img => img.src);

    const images2 = [
        "./images/006Zard3.png",
        "./images/025Pikachan3.png",
        "./images/026Chuu3.png",
        "./images/041Zubs4.png",
        "./images/Falkedex042_4tl.png",
        "./images/hallie2.png"
    ];

    let isSet1 = true;

    toggleButton.addEventListener("click", function() {
        if (isSet1) {
            images1.forEach((img, index) => {
                img.src = images2[index];
            });
            isSet1 = false;
        } else {
            images1.forEach((img, index) => {
                img.src = originalSources[index];
            });
            isSet1 = true;
        }
    });
});
