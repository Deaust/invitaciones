document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'img/hotel/logo.png',
        'img/hotel/1.png',
        'img/hotel/2.png',
        'img/hotel/3.png'
    ];
    
    let currentIndex = 0;
    const imgElement = document.getElementById('carouselImage');

    function changeImage() {
        imgElement.style.opacity = '0';
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            imgElement.src = images[currentIndex];
            imgElement.style.opacity = '1';
        }, 500);
    }

    // Cambiar imagen cada 2 segundos
    setInterval(changeImage, 3000);
});
