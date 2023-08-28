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
