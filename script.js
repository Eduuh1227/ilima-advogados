const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
const mobileBackdrop = document.getElementById('mobileBackdrop');
const mobileLinks = mobileMenu.querySelectorAll('a');

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

menuToggle?.addEventListener('click', openMenu);
mobileClose?.addEventListener('click', closeMenu);
mobileBackdrop?.addEventListener('click', closeMenu);
mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
