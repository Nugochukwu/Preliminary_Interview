const themeToggleButton = document.getElementById('themeToggle');

themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDarkTheme = document.body.classList.contains('dark');
  themeToggleButton.textContent = isDarkTheme ? 'Light Theme' : 'Dark Theme';
});

document.addEventListener("DOMContentLoaded", () => {
  const progressContainers = document.querySelectorAll(".progress-container");
// Target percentages for each bar
  const newProgressValues = [90,90,65, 50, 80, 60, 70, 70, 80,86, 80, 80, 82, 85];

  progressContainers.forEach((container, index) => {
    setTimeout(() => {
      container.style.setProperty("--progress", `${newProgressValues[index]}%`);
    }, index * 100);
  });
});

const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");
const images = document.querySelectorAll(".clickable-image");

// Open modal
images.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImage.src = image.src;
  });
});

// Close modal when the close button is clicked
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
