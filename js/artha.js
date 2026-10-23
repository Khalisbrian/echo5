// Animasi hover tombol aksi
const buttons = document.querySelectorAll('.btn-glow');

buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'translateY(-3px) scale(1.03)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translateY(0) scale(1)';
  });
});

// 1. Select Elemen
const btnContact = document.querySelector('#btn-contact');
const btnClose = document.querySelector('#btn-close-modal');
const modalOverlay = document.querySelector('#contact-modal');

// 2. Buka Modal saat tombol Contact Me diklik
btnContact.addEventListener('click', () => {
  modalOverlay.classList.add('active');
});

// 3. Tutup Modal saat tombol (X) diklik
btnClose.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
});

// 4. Tutup Modal saat area luar kotak pop-up diklik
window.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove('active');
  }
});