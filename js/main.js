// Opening Animationfunction OpeningAnimation() {
const timeline = gsap.timeline();

// Animate header elements (logo, navigation links, contact, and menu icon)
timeline
  .from("#logo, .nav-link, .contact, #menu-icon", {
    y: -50,
    opacity: 0,
    stagger: 0.15,
    ease: "power2.out",
  })
  // Animate greeting, heading, description, and button container
  .from(
    ".greet, h1, .desc, .btn-contain",
    {
      x: -50,
      skewX: -15,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
    },
    "+=0.5" // Delay between sections
  )
  // Animate social links
  .from(
    ".social-links > a",
    {
      y: 50,
      skewX: -15,
      opacity: 0,
      stagger: 0.15,
      ease: "power2.out",
    },
    "+=0.5"
  )
  // Animate the main image
  .from(
    ".my-img",
    {
      y: -50,
      skewX: 35,
      opacity: 0,
      ease: "power2.out",
    },
    "+=0.3"
  )
  // Animate icons
  .from(
    ".my-icon-img",
    {
      opacity: 0,
      stagger: 0.2,
      ease: "elastic.out",
    },
    "+=0.5"
  );

// Cursor Animation
function customCursor() {
  const cursor = document.querySelector(".custom-cursor");
  const interactiveElements = document.querySelectorAll(
    ".nav-link, #logo, .custom-btn-3, .like, .certificate, .inner-contain > h4, .my-link, .phn > a, #menu-icon, #close > i"
  );

  // Move cursor with smooth animation
  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.pageX,
      y: e.pageY,
      duration: 0.1,
    });
  });

  // Show cursor on mouse enter
  document.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
      duration: 0.2,
    });
  });

  // Hide cursor on mouse leave
  document.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
      duration: 0.2,
    });
  });

  // Scale cursor when hovering over interactive elements
  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 3,
        duration: 0.2,
      });
    });
    element.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.2,
      });
    });
  });
}
customCursor();

// Typing Animation
function TypingAnimation() {
  const typed = new Typed(".auto-type", {
    strings: ["Frontend Developer", "MERN Developer"],
    typeSpeed: 140,
    backSpeed: 50,
    loop: true,
  });
}
TypingAnimation();

// Navbar Hide on Link Click
function NavHide() {
  const navLinks = document.querySelectorAll(".nav-link");
  const navCollapse = document.querySelector("#offcanvasNavbar");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navCollapse.classList.remove("show");
    });
  });
}
NavHide();
