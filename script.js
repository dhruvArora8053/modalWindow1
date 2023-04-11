'use strict';

const buttons = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');

const show = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const notShow = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (const button of buttons) {
  button.addEventListener('click', function () {
    show();
  });
}

close.addEventListener('click', function () {
  notShow();
});

overlay.addEventListener('click', function () {
  notShow();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    notShow();
  }
});
