// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close Mobile Menu when clicking a link
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal Animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Reveal header content
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 1000,
});

// Reveal features and other sections
ScrollReveal().reveal(".feature__card", {
  duration: 1000,
  interval: 500,
});
ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".package__card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".client__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Swiper initialization (for client reviews slider)
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,  // Enable looping of slides for an infinite carousel
  autoplay: {
    delay: 3000, // 3 seconds interval between slides
  },
});

// Smooth Scroll for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 50, // Adjusted for any fixed navigation bar
      behavior: "smooth",
    });
  });
});
