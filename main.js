const parallaxDiv = document.querySelector('.hero-overlay');

// window.addEventListener('scroll', function() {
//   const scrollPosition = window.scrollY;

//   // Adjust the background position based on scroll position
//   parallaxDiv.style.backgroundPositionY = `${scrollPosition * (0.25)}px`; // Adjust the multiplier for the parallax effect
// });

function locate() {
  const scrollAmount = window.innerHeight - window.scrollY; // Adjust the amount to scroll by
  window.scrollTo({
    top: window.scrollY + scrollAmount,
    behavior: 'smooth' // Optional: Add smooth scrolling effect
  });
};

