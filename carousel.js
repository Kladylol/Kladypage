let carouselImages = document.querySelectorAll(".carousel-image");
let currentIndex = 0;
let nextIndex = 1;

function changeImage() {
    carouselImages.forEach((img, index) => {
        if(index === currentIndex) {
            img.classList.remove("active");
        } else if(index === nextIndex) {
            img.classList.add("active");
        }
    });

    currentIndex = (currentIndex + 1) % carouselImages.length;
    nextIndex = (currentIndex + 1) % carouselImages.length;
}

setInterval(changeImage, 3000); // Change image every 3 seconds