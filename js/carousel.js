
const track = document.getElementById("carouselTrack");
const windowElement = document.getElementById("carouselWindow");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const indicators = document.getElementById("carouselIndicators");
const counter = document.getElementById("carouselCounter");

const cards = Array.from(
    track.querySelectorAll(".member-card")
);

let currentIndex = 0;
let visibleCards = 3;
let maxIndex = 0;
let resizeTimer;


/* Menghitung jumlah kartu yang terlihat */
function calculateCarousel() {
    if (cards.length === 0) return;

    const windowWidth = windowElement.clientWidth;
    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;

    visibleCards = Math.max(
        1,
        Math.floor((windowWidth + gap) / (cardWidth + gap))
    );

    maxIndex = Math.max(0, cards.length - visibleCards);

    currentIndex = Math.min(currentIndex, maxIndex);

    renderIndicators();
    updateCarousel();
}


/* Membuat indikator */
function renderIndicators() {
    indicators.innerHTML = "";

    for (let i = 0; i <= maxIndex; i++) {
        const dot = document.createElement("button");

        dot.type = "button";
        dot.classList.add("carousel-dot");

        dot.setAttribute(
            "aria-label",
            `Tampilkan posisi ${i + 1}`
        );

        dot.addEventListener("click", () => {
            currentIndex = i;
            updateCarousel();
        });

        indicators.appendChild(dot);
    }
}


/* Memperbarui posisi carousel */
function updateCarousel() {
    if (cards.length === 0) return;

    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const cardWidth = cards[0].getBoundingClientRect().width;

    const offset = currentIndex * (cardWidth + gap);

    track.style.transform = `translateX(-${offset}px)`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= maxIndex;

    Array.from(indicators.children).forEach((dot, index) => {
        dot.classList.toggle(
            "active",
            index === currentIndex
        );
    });

    const startNumber = currentIndex + 1;
    const endNumber = Math.min(
        currentIndex + visibleCards,
        cards.length
    );

    counter.textContent =
        `${String(startNumber).padStart(2, "0")} — ` +
        `${String(endNumber).padStart(2, "0")}`;
}


/* Tombol sebelumnya */
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});


/* Tombol berikutnya */
nextBtn.addEventListener("click", () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
    }
});


/* Hitung ulang saat ukuran jendela berubah */
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
        calculateCarousel();
    }, 100);
});


/* Inisialisasi */
calculateCarousel();
