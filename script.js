document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const main = document.getElementById("main-content");
  const visited = sessionStorage.getItem("visitedJanna");

  if (splash && main) {
    if (!visited) {
      splash.style.display = "flex";
      main.style.display = "none";

      setTimeout(() => {
        splash.style.display = "none";
        main.style.display = "block";
        sessionStorage.setItem("visitedJanna", "true");
      }, 4000);
    } else {
      splash.style.display = "none";
      main.style.display = "block";
    }
  }

  const featuredImages = [
    "white.jpg",
    "harry.jpg",
    "deadface.jpg"
  ];
  const img = document.getElementById("featured-img");
  if (img) {
    const randomIndex = Math.floor(Math.random() * featuredImages.length);
    img.src = featuredImages[randomIndex];
  }

  const text = "Janna is a passionate artist who expresses her feelings through colors and creativity. Her work reflects peace, beauty, and love.";
  const output = document.getElementById("typewriter");
  if (output) {
    let i = 0;
    const type = setInterval(() => {
      output.textContent += text.charAt(i);
      i++;
      if (i >= text.length) clearInterval(type);
    }, 30);
  }
});

// === Lightbox Gallery ===
const galleryImages = [
  "gallery/art1.jpg",
  "gallery/art2.jpg",
  "gallery/art3.jpg"
];

let currentImage = 0;

function openLightbox(index) {
  currentImage = index;
  document.getElementById("lightbox-img").src = galleryImages[currentImage];
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
  currentImage = (currentImage + 1) % galleryImages.length;
  document.getElementById("lightbox-img").src = galleryImages[currentImage];
}

function prevImage() {
  currentImage = (currentImage - 1 + galleryImages.length) % galleryImages.length;
  document.getElementById("lightbox-img").src = galleryImages[currentImage];
}
