import langObj from './language.js';

//Change language
const textToTranslate = document.querySelectorAll('[data-lang]');

let current = localStorage.getItem('lang_CV_IVAN_KASENKA')
  ? localStorage.getItem('lang_CV_IVAN_KASENKA')
  : 'en';

const lang = document.querySelectorAll('.lang');

current === 'en'
  ? lang[0].classList.add('active')
  : lang[1].classList.add('active');

getTranslate(current);

lang.forEach((el) => {
  el.addEventListener('click', () => {
    lang.forEach((el) => el.classList.remove('active'));
    el.classList.add('active');
    current = `${el.innerText}`;
    getTranslate(current);
    localStorage.setItem('lang_CV_IVAN_KASENKA', current);
  });
});

function getTranslate(language) {
  textToTranslate.forEach((element) => element.textContent = langObj
  [language][element.dataset.lang])
};
//END change language

//Section highlighting
const links = document.querySelectorAll('.nav__ul-a');
links.forEach((el) => {
  el.addEventListener('mouseover', () => {
    highlightSec(`${el.hash}`);
  })
  el.addEventListener('mouseout', () => {
    highlightSec(`${el.hash}`);
  })
});

function highlightSec(elem) {
  document.querySelector(elem).classList.toggle('section-hover');
}
//END section highlighting