const modeToggle = document.getElementById('modeToggle');

modeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', modeToggle.checked);
});
  const images = [
    "images/image-1.jpeg",
    "images/image-2.jpeg",
    "images/image-3.jpeg",
    "images/image-4.jpeg",
    "images/image-5.jpeg",
    "images/image-6.jpeg",
    "images/image-7.jpeg",
  ];

  let currentIndex = 0;
  const imgElement = document.getElementById("img");

  function nextImg() {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
    animateImage();
  }

  function previousImg() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imgElement.src = images[currentIndex];
    animateImage();
  }

  function animateImage() {
    imgElement.style.transform = "scale(1.05)";
    setTimeout(() => {
      imgElement.style.transform = "scale(1)";
    }, 300);
  }


