$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $("html, body").animate(
              {
                  scrollTop: $(hash).offset().top,
              },
              800,
              function () {
                  // Add hash (#) to URL when done scrolling (default click behavior)
                  window.location.hash = hash;
              }
          );
      } // End if
  });
});
let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let autoSlideInterval;

// Function to show slides
function showSlides(index) {
if (index >= slides.length) slideIndex = 0;
if (index < 0) slideIndex = slides.length - 1;

for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
slides[slideIndex].style.display = "block";
}

// Function to change slides
function changeSlide(n) {
clearInterval(autoSlideInterval); // Stop auto sliding when manually changing slides
slideIndex += n;
showSlides(slideIndex);
autoSlideInterval = setInterval(() => changeSlide(1), 3000); // Restart auto sliding
}

// Initialize the slider
showSlides(slideIndex);
autoSlideInterval = setInterval(() => changeSlide(1), 3000); // Auto slide every 3 seconds



// Event listeners for navigation buttons
document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
document.querySelector(".next").addEventListener("click", () => changeSlide(1));
// Example: Alert on clicking a category
document.querySelectorAll('.category-item').forEach(item => {
  item.addEventListener('click', () => {
    alert('Category clicked: ' + item.querySelector('h3').textContent);
  });
});

