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

// Desktop crossfade (keep as is, but safer with a length check)
const images = document.querySelectorAll(".hero-bg-img");
if (images.length) {
  let idx = 0;
  setInterval(() => {
    images[idx].style.opacity = 0;
    idx = (idx + 1) % images.length;
    images[idx].style.opacity = 1;
    images.forEach((img, i) => {
      if (i !== idx) img.style.opacity = 0;
    });
  }, 4000);
}

// Mobile crossfade (new)
const mobileImages = document.querySelectorAll(".mobile-hero-img");
if (mobileImages.length) {
  let mobileIdx = 0;
  setInterval(() => {
    mobileImages[mobileIdx].style.opacity = 0;
    mobileIdx = (mobileIdx + 1) % mobileImages.length;
    mobileImages[mobileIdx].style.opacity = 1;
    mobileImages.forEach((img, i) => {
      if (i !== mobileIdx) img.style.opacity = 0;
    });
  }, 4000);
}

window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const mobileMenu = document.getElementById("mobileMenu");
  const active = document.getElementById("active");
  const active2 = document.getElementById("active2");
  const navLinks = header.querySelectorAll("a");
  // Change this to match the id you put on your body tag for the white nav text page
  const isWhiteHeaderPage = document.body.id === "white-header-page";

  if (window.scrollY > 110) {
    header.style.backgroundColor = "white";
    header.style.color = "black";
    if (mobileMenu) mobileMenu.style.backgroundColor = "white";
    navLinks.forEach((link) => {
      if (link === active || link === active2) {
        link.style.color = "#B33791";
        link.style.fontWeight = "600"; // "semibold" isn't valid, use "600"
      } else {
        link.style.color = "black";
        link.style.fontWeight = "normal";
      }
    });
  } else {
    header.style.backgroundColor = "transparent";
    // Use white text if on the special page, else black
    header.style.color = isWhiteHeaderPage ? "white" : "black";
    if (mobileMenu) mobileMenu.style.backgroundColor = "white";
    navLinks.forEach((link) => {
      if (link === active || link === active2) {
        link.style.color = "#B33791";
        link.style.fontWeight = "600";
      } else {
        link.style.color = isWhiteHeaderPage ? "white" : "black";
        link.style.fontWeight = "normal";
      }
    });
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

// images changes in mobile view in landing part
