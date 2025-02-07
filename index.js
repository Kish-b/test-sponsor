const hamburger = document.getElementById("hambergar");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});






const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.info');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
let currentIndex = 0;

// Function to update the carousel
const updateCarousel = () => {
  if (window.innerWidth > 768) { // Carousel only works on larger screens
    const cardWidth = cards[0].offsetWidth + 400; // Card width + margin
    const offset = -(currentIndex * cardWidth);
    track.style.transform = `translateX(${offset}px)`;
  } else {
    track.style.transform = 'none'; // Disable carousel on small screens
  }
};

// Event listener for Next button
nextButton.addEventListener('click', () => {
  if (window.innerWidth > 768) {
    currentIndex++;
    updateCarousel();

    // Disable Next button after one click
    nextButton.disabled = true;
    nextButton.style.opacity = '0.5'; // Optional visual feedback
    prevButton.disabled = false;
    prevButton.style.opacity = '1';
  }
});

// Event listener for Prev button
prevButton.addEventListener('click', () => {
  if (window.innerWidth > 768 && currentIndex > 0) {
    currentIndex--;
    updateCarousel();

    // Enable Next button when Prev is clicked
    nextButton.disabled = false;
    nextButton.style.opacity = '1';
    prevButton.disabled = currentIndex <= 0; // Disable Prev if at the start
    prevButton.style.opacity = prevButton.disabled ? '0.5' : '1';
  }
});

// Disable both buttons on small screens
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    nextButton.disabled = true;
    prevButton.disabled = true;
  }
});

// Initial setup
updateCarousel();
nextButton.disabled = false;
prevButton.disabled = true;
prevButton.style.opacity = '0.5'; // Prev button starts disabled
