// Opening Animation
function OpeningAnimation() {
  gsap.from(" #logo, .nav-link , .contact, #menu-icon", {
    y: -50,
    opacity: 0,
    delay: 0.1,
    stagger: 0.15,
  });
  gsap.from(" .greet, h1 , .desc , .btn-contain", {
    x: -50,
    skewX: -15,
    opacity: 0,
    delay: 1.5,
    stagger: 0.2,
  });
  gsap.from(" .social-links > a", {
    y: 50,
    skewX: -15,
    opacity: 0,
    delay: 2.4,
    stagger: 0.15,
  });
  gsap.from(" .my-img", {
    y: -50,
    skewX: 35,
    opacity: 0,
    delay: 2.7,
  });
  gsap.from(" .my-icon-img", {
    opacity: 0,
    delay: 3.2,
    stagger: 0.2,
  });
}
OpeningAnimation();

// Cursor
function cursor() {
  const cursor = document.querySelector(".custom-cursor");
  const navigation = document.querySelector(".nav-contain");
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
    cursor.animate(
      {
        left: e.pageX + "px",
        top: e.pageY + "px",
      },
      { duration: 200, fill: "forwards" }
    );
  });

  $(document).mouseenter((e) => {
    gsap.to(".custom-cursor", {
      scale: 1,
      duration: 0.01,
    });
  });
  $(document).mouseleave((e) => {
    gsap.to(".custom-cursor", {
      scale: 0,
      duration: 0.01,
    });
  });

  $(
    ".nav-link , #logo, .custom-btn-3 , .like, .certificate, .inner-contain>h4 , .my-link , .phn>a, #menu-icon, #close>i"
  ).mousemove((e) => {
    gsap.to(".custom-cursor", {
      scale: 3,
      duration: 0.01,
    });
  });
  $(
    ".nav-link, #logo, .custom-btn-3 , .like, .certificate, .inner-contain>h4 , .my-link , .phn>a, #menu-icon, #close>i"
  ).mouseleave((e) => {
    gsap.to(".custom-cursor", {
      scale: 1,
      duration: 0.01,
    });
  });
}
cursor();

// Typing Animation
function TypingAnimation() {
  var typed = new Typed(".auto-type", {
    strings: ["Frontend Developer", "FULL STACK DEVELOPER"],
    typeSpeed: 140,
    backkSpeed: 1000,
    loop: true,
  });
}
TypingAnimation();

// nav hide
function NavHide() {
  let navBar = document.querySelectorAll(".nav-link");
  let navCollapse = document.querySelector("#offcanvasNavbar");
  navBar.forEach(function (a) {
    a.addEventListener("click", function () {
      navCollapse.classList.remove("show");
    });
  });
}
NavHide();
