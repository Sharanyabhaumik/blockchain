function submitDonation() {
    const amount = document.getElementById('amount').value;
    
}


function updateProgressBar(percentage) {
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    
    progressBar.style.width = `${percentage}%`;
    progressText.innerText = `${percentage}% funded`;
}
let currentIndex = 0;

function nextImage() {
    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.slider img');
    const totalImages = images.length;

    currentIndex = (currentIndex + 1) % totalImages;

    const translateValue = -currentIndex * 100 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
}
