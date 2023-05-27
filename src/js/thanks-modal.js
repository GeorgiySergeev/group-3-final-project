const MODAL_ACTIVE_CLASS_NAME = 'active';
const thankModal = document.querySelector('.modal-thank-you');
const form = document.querySelector('.thank-form');
const backdrop = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.contacts-button');
const closeBtns = document.querySelectorAll('.close-btn');
const overlay = document.querySelector('.js-overlay-modal');

const openSuccessModal = () => {
  backdrop.classList.add(MODAL_ACTIVE_CLASS_NAME);
  thankModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
  document.body.style.overflow = 'hidden';
};
const closeSuccessModal = () => {
  thankModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
  backdrop.classList.remove(MODAL_ACTIVE_CLASS_NAME);
  document.body.style.overflow = 'auto';
};
closeBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    closeSuccessModal();
  });
});
form.addEventListener('submit', e => {
  e.preventDefault();
  setTimeout(openSuccessModal, 300);
});

overlay.addEventListener('click', function () {
  closeSuccessModal();
});
