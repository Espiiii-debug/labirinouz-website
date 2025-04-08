document.addEventListener('DOMContentLoaded', function () {
    // 🎨 Bouton couleur : appliquer une couleur homogène partout sauf main-section
    const colorBtn = document.getElementById('color-toggle-btn');
    if (colorBtn) {
        const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

        colorBtn.addEventListener('click', function () {
            const color = getRandomColor();

            // Changer fond du body
            document.body.style.backgroundColor = color;

            // Changer tous les grid-item sauf #main-section
            document.querySelectorAll('.grid-item').forEach(el => {
                if (el.id !== 'main-section') {
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

    // 🖼️ tutorial.exe avec diaporama manuel avec flèches
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

        // Injecter les flèches si elles n'existent pas encore
        if (!document.getElementById("prev-btn")) {
            const prevBtn = document.createElement("button");
            prevBtn.id = "prev-btn";
            prevBtn.className = "arrow-btn";
            prevBtn.innerHTML = '<img src="styles/images/arrow-left.png" alt="prev">';
            
            const nextBtn = document.createElement("button");
            nextBtn.id = "next-btn";
            nextBtn.className = "arrow-btn";
            nextBtn.innerHTML = '<img src="styles/images/arrow-right.png" alt="next">';

            const slideshow = document.getElementById("slideshow");
            slideshow.insertBefore(prevBtn, dogPhoto);
            slideshow.appendChild(nextBtn);

            prevBtn.addEventListener("click", () => {
                index = (index - 1 + images.length) % images.length;
                dogPhoto.src = images[index];
            });

            nextBtn.addEventListener("click", () => {
                index = (index + 1) % images.length;
                dogPhoto.src = images[index];
            });
        }
    });

    closeTutorial.addEventListener('click', () => {
        tutorialWrapper.classList.remove('show');
    });
}
});