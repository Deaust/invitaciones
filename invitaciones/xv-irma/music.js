document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    const musicModal = document.getElementById('musicModal');
    const acceptMusic = document.getElementById('acceptMusic');
    const declineMusic = document.getElementById('declineMusic');

    // Ocultar el botón de música inicialmente
    musicToggle.style.display = 'none';

    // Función para reproducir música
    function playMusic() {
        music.currentTime = 1; // Establecer el inicio en el segundo 7
        music.play().then(() => {
            musicToggle.dataset.playing = "true";
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
            musicToggle.style.display = 'flex';
        }).catch(error => {
            console.error('Error al reproducir:', error);
        });
    }

    // Función para pausar música
    function pauseMusic() {
        music.pause();
        musicToggle.dataset.playing = "false";
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    }

    // Manejadores del modal
    acceptMusic.addEventListener('click', () => {
        musicModal.style.display = 'none';
        playMusic();
    });

    declineMusic.addEventListener('click', () => {
        musicModal.style.display = 'none';
        musicToggle.style.display = 'flex';
    });

    // Event listener para el botón de música
    musicToggle.addEventListener('click', () => {
        if (musicToggle.dataset.playing === "true") {
            pauseMusic();
        } else {
            music.currentTime = 1;
            playMusic();
        }
    });
});