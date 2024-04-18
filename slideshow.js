/* document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach(function (slider, index) {
    let slideIndex = 0;

    const slides = slider.querySelectorAll(".slide");
    const indicators = slider
      .querySelector(".slide-indicators")
      .getElementsByTagName("img");
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");

    function showSlide(n) {
      if (n < 0) {
        slideIndex = slides.length - 1;
      } else if (n >= slides.length) {
        slideIndex = 0;
      } else {
        slideIndex = n;
      }

      slides.forEach(function (slide) {
        slide.style.display = "none";
      });

      indicators.forEach(function (indicator) {
        indicator.classList.remove("active-slide");
      });

      slides[slideIndex].style.display = "block";
      indicators[slideIndex].classList.add("active-slide");
    }

    function nextSlide() {
      showSlide(slideIndex + 1);
    }

    function prevSlide() {
      showSlide(slideIndex - 1);
    }

    function gotoSlide(n) {
      showSlide(n);
    }

    prevBtn.addEventListener("click", function () {
      prevSlide();
    });

    nextBtn.addEventListener("click", function () {
      nextSlide();
    });

    indicators.forEach(function (indicator, i) {
      indicator.addEventListener("click", function () {
        gotoSlide(i);
        // Change the opacity of all indicators
        indicators.forEach(function (indicator) {
          indicator.style.opacity = "1"; // Reset opacity
        });
        // Change the opacity of the clicked indicator
        indicator.style.opacity = "0.5"; // Adjust opacity as needed
      });
    });

    showSlide(slideIndex);
  });
});

*/
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}
