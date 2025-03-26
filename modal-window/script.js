'use strict';

const modal = document.querySelector('.modal');
const closeBTN = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const showModals = document.querySelectorAll('.show-modal');

const openModal = function() {
    modal.classList.remove('hidden'); 
    overlay.classList.remove('hidden');
};

for (let i = 0; i < showModals.length; i++) {
    showModals[i].addEventListener('click', openModal);
};

const closeModal = function() {
    modal.classList.add('hidden'); 
    overlay.classList.add('hidden');
};

closeBTN.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal(); 
});