document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!mobileMenu.contains(event.target) && event.target !== hamburger) {
      mobileMenu.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed: 1200,
    effect: "fade",
  });
});

window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const active = document.getElementById("active");
  const active2 = document.getElementById("active2");
  if (window.scrollY > 110) {
    header.style.backgroundColor = "white";
    mobileMenu.style.backgroundColor = "white";
    header.style.color = "black";
    active.style.color = "black";
    active2.style.color = "black";
  } else {
    header.style.backgroundColor = "white";
    mobileMenu.style.backgroundColor = "white";
    header.style.color = "black";
    active2.style.color = "black";
    active.style.color = "black";
  }
});

tailwind.config = {
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        fadeInDown: "fadeInDown 1s ease-out forwards",
        fadeInUp: "fadeInUp 1s ease-out forwards",
        fadeInLeft: "fadeInLeft 1s ease-out forwards",
        fadeInRight: "fadeInRight 1s ease-out forwards",
        scaleIn: "scaleIn 1s ease-out forwards",
        scaleOut: "scaleOut 0.4s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeInDown: {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        scaleOut: {
          from: { opacity: "0", transform: "scale(1.1)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
};

// testimonial swipper code
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// video open in center
function openModal(videoId) {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoIframe");
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoIframe");
  iframe.src = "";
  modal.classList.add("hidden");
}

// Get the "Back to Top" button
const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});
backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// scroll down
const scrollDownButton = document.querySelector('a[href="#experience"]');
scrollDownButton.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("experience").scrollIntoView({
    behavior: "smooth",
  });
});

// expereience part animation script
ScrollReveal().reveal(".reveal-exp-card", {
  origin: "bottom",
  distance: "60px",
  duration: 2500,
  interval: 160,
  scale: 0.97,
  opacity: 0,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  reset: true,
});
