document.addEventListener("DOMContentLoaded", function () {
    // Function to manually list the image filenames
    function fetchImages() {
    const imgFilenames = [
    "basketball (2).jpg",
    "charles-deloye-2RouMSg9Rnw-unsplash.jpg",
    "element5-digital-jCIMcOpFHig-unsplash.jpg",
    "michael-marsh-U0dBV_QeiYk-unsplash.jpg",
    "nathan-dumlao-ewGMqs2tmJI-unsplash.jpg",
    "vasily-koloda-8CqDvPuo_kI-unsplash.jpg"
    // Add more filenames as needed
];

        const imgDirectory = "./img"; // Assuming 'img' folder is in the same directory as the HTML file
        const imgContainer = document.getElementById("gallery-container");

        imgFilenames.forEach((filename) => {
            const imgPath = `${imgDirectory}/${filename}`;

            // Create a gallery item
            const galleryItem = document.createElement("div");
            galleryItem.classList.add("gallery-item");
            galleryItem.dataset.text = filename.replace(".jpg", ""); // Display filename without extension

            // Create an image element
            const imgElement = document.createElement("img");
            imgElement.src = imgPath;
            imgElement.alt = filename;

            // Append the image to the gallery item
            galleryItem.appendChild(imgElement);

            // Append the gallery item to the container
            imgContainer.appendChild(galleryItem);
        });
    }

    // Call the fetchImages function to populate the gallery
    fetchImages();
});
