document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'img/xv/2.png',
        //'img/xv/3.png',
        'img/xv/4.png',
        'img/xv/1.png'
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