'use strict';

const buttons = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const show = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (const button of buttons) {
  button.addEventListener('click', function () {
    show();
  });
}



