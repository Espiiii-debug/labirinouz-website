
document.addEventListener('DOMContentLoaded', function () {
    // 🎨 Bouton couleur : appliquer une couleur homogène uniquement sur fond blanc des .grid-item
    const colorBtn = document.getElementById('color-toggle-btn');
    if (colorBtn) {
        const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);
        colorBtn.addEventListener('click', function () {
            const color = getRandomColor();
            document.querySelectorAll('.grid-item').forEach(el => {
                const containsMain = el.querySelector('#main-section');
                const isNav = el.classList.contains('grid-nav');
                if (!containsMain && !isNav) {
                    el.style.backgroundColor = color;
                }
            });
        });
    }

    // 📂 about_us.exe
    const aboutBtn = document.getElementById('btn-about_us');
    const aboutWrapper = document.getElementById('wrapper-about_us');
    const closeAbout = document.getElementById('btn-close-about_us');
    if (aboutBtn && aboutWrapper && closeAbout) {
        aboutBtn.addEventListener('click', () => {
            aboutWrapper.classList.add('show');
        });
        closeAbout.addEventListener('click', () => {
            aboutWrapper.classList.remove('show');
        });
    }

    // 🖼️ tutorial.exe avec diaporama manuel sur clic
    const tutorialBtn = document.getElementById('btn-tutorial');
    const tutorialWrapper = document.getElementById('wrapper-tutorial');
    const closeTutorial = document.getElementById('btn-close-tutorial');
    const dogPhoto = document.getElementById('dog-photo');

    if (tutorialBtn && tutorialWrapper && closeTutorial && dogPhoto) {
        const images = [
            "styles/images/capture1.png",
            "styles/images/capture2.png",
            "styles/images/capture3.png",
            "styles/images/capture4.png"
        ];
        let index = 0;

        tutorialBtn.addEventListener('click', () => {
            tutorialWrapper.classList.add('show');
            dogPhoto.src = images[index];
        });

        closeTutorial.addEventListener('click', () => {
            tutorialWrapper.classList.remove('show');
        });

        dogPhoto.addEventListener('click', () => {
            index = (index + 1) % images.length;
            dogPhoto.src = images[index];
        });
    }
});
