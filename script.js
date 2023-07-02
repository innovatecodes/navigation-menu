const actived = 'actived';
const nav = document.querySelector('nav');
const btnToggle = document.querySelector('#btn-toggle');
function onClickToggleMenu() {
  if (this.type === "touchstart") {
    this.preventDefault();
  }
  
  if (!nav.classList.contains(actived)) {
    nav.classList.add(actived)
    btnToggle.setAttribute("aria-label", "Fechar menu");
    btnToggle.setAttribute("aria-expanded", true);
    btnToggle.setAttribute("aria-pressed", true);
  } else if (nav.classList.contains(actived)) {
    nav.classList.remove(actived)
    btnToggle.setAttribute("aria-label", "Abrir menu");
    btnToggle.setAttribute("aria-expanded", false);
    btnToggle.setAttribute("aria-pressed", false);
  }
}

document.querySelector('#btn-toggle').addEventListener('click', onClickToggleMenu);
document.querySelector('#btn-toggle').addEventListener('touchstart', onClickToggleMenu);

const body = document.querySelector('body');

window.addEventListener('scroll', () => {
  if (window.pageYOffset === 0) {
    document.querySelector('header').style.transform = 'translate3d(0px, 0px, 0px)';
    body.style.paddingTop = '0px';
    body.classList.remove('header-fixed');
  }

  if (window.pageYOffset > 0) {
    document.querySelector('header').style.transform = 'translate3d(0px, -63px, 0px)';
  }

  if (window.pageYOffset >= document.querySelector('header').clientHeight) {
    document.querySelector('header').style.transform = 'translate3d(0px, 0px, 0px)'
    body.style.paddingTop = '63px';
    body.classList.add('header-fixed');
  }
})

const links = document.querySelectorAll('a[href^="#"]');
const sections = document.querySelectorAll('section');

links.forEach((a) => {
  a.addEventListener('click', () => {
    if (nav.classList.contains(actived))
    onClickToggleMenu();
  })
})