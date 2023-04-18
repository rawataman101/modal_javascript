'use strict';

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}
// closing modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// key press
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
