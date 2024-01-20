function donate() {
    alert("Thank you for your donation!");
}    
let currentSlide = 0;
const slides = document.getElementsByClassName("slider-image");

function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlide].style.display = "block";
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}


showSlide(currentSlide);

function warning() {
    alert("Please sign up/sign in for donating");

    
}
function performSearch() {
    const searchInput = document.getElementById('searchInput').value;
    
    
    console.log(`Performing search for: ${searchInput}`);
}


