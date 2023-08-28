import langObj from './languageObj.js';

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