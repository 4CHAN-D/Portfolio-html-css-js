function burgerMenu() {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.querySelector(".nav-links");
  const links = navLinks.querySelectorAll("a");
  console.log(menuBtn);
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
      menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'; // X
      menuBtn.setAttribute("aria-expanded", "true");
    } else {
      menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>'; // ☰
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}
burgerMenu();