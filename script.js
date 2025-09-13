const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const links = navbar.querySelectorAll('a');
menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
  if (navbar.classList.contains('active')) {
    menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    menuBtn.setAttribute('aria-expanded', 'true');
  } else {
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});

links.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});