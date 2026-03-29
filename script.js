const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
const mobileBackdrop = document.getElementById('mobileBackdrop');
const mobileLinks = mobileMenu.querySelectorAll('a');
const imgPrata = document.getElementById("imgPrata");
const imgBege = document.getElementById("imgBege");



revealElements.forEach((el) => observer.observe(el));
function openMenu() {
    mobileMenu.classList.add('open');
    mobileBackdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileMenu.classList.remove('open');
    mobileBackdrop.classList.remove('show');
    document.body.style.overflow = '';
}

function trocarImagem(el) {
  const mainImage = document.getElementById('mainImage');
  const thumbs = document.querySelectorAll('.empresarial-thumbs img');

 mainImage.style.opacity = 0;

  setTimeout(() => {
    mainImage.src = el.src;
    mainImage.alt = el.alt;
    mainImage.style.opacity = 1;
  }, 200);

  thumbs.forEach(img => img.classList.remove('active'));
  el.classList.add('active');
}

menuToggle?.addEventListener('click', openMenu);
mobileClose?.addEventListener('click', closeMenu);
mobileBackdrop?.addEventListener('click', closeMenu);
mobileLinks.forEach(link => link.addEventListener('click', closeMenu));