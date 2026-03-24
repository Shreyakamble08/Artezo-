// Banner Slider Logic
const sliderWrapper = document.querySelector("#banner-slider");
const slider = document.querySelector("#banner-slider > div");
const slides = document.querySelectorAll("#banner-slider > div > div");
const dots = document.querySelectorAll("#banner-slider [data-slide]");

let currentSlide = 0;
const totalSlides = slides.length;
let slideInterval;

function goToSlide(index) {
  if (slider) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    
    dots.forEach((dot) => dot.classList.remove("bg-white"));
    if (dots[index]) dots[index].classList.add("bg-white");
    
    currentSlide = index;
  }
}

// Dot Click
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const slideIndex = parseInt(dot.dataset.slide);
    if (!isNaN(slideIndex)) goToSlide(slideIndex);
  });
});

// Start Auto Slide
function startSlider() {
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    let nextSlide = (currentSlide + 1) % totalSlides;
    goToSlide(nextSlide);
  }, 3000);
}

// Stop Auto Slide
function stopSlider() {
  clearInterval(slideInterval);
}

// Pause on Hover
if (sliderWrapper) {
  sliderWrapper.addEventListener("mouseenter", stopSlider);
  sliderWrapper.addEventListener("mouseleave", startSlider);
}

// Initialize
if (slides.length > 0) {
  goToSlide(0);
  startSlider();
}

// ============================================
// DISCOVER SECTION (FIRST appearance of prevBtn/nextBtn/productSlider)
// ============================================
document.addEventListener("DOMContentLoaded", function() {
  // Get elements from the Discover section (first occurrence)
  const discoverSection = document.querySelector('.bg-teal-50.rounded-xl'); // Discover section container
  const discoverSlider = document.getElementById("productSlider");
  const discoverPrevBtn = document.getElementById("prevBtn");
  const discoverNextBtn = document.getElementById("nextBtn");
  
  // Scroll amount
  const discoverScrollAmount = 320;
  
  if (discoverPrevBtn) {
    discoverPrevBtn.onclick = () => {
      if (discoverSlider) discoverSlider.scrollLeft -= discoverScrollAmount;
    };
  }
  
  if (discoverNextBtn) {
    discoverNextBtn.onclick = () => {
      if (discoverSlider) discoverSlider.scrollLeft += discoverScrollAmount;
    };
  }
});

// ============================================
// TOP RATED SECTION (SECOND appearance of prevBtn/nextBtn/productSlider)
// ============================================
document.addEventListener("DOMContentLoaded", function() {
  // Get elements from the Top Rated section using the class we added
  const topRatedSection = document.querySelector('.top-rated-section');
  const topRatedSlider = topRatedSection?.querySelector('#productSlider');
  const topRatedPrevBtn = topRatedSection?.querySelector('#prevBtn');
  const topRatedNextBtn = topRatedSection?.querySelector('#nextBtn');
  
  // Calculate scroll amount based on card width + gap
  const cardWidth = 260; // min-w-[260px]
  const gap = 24; // gap-6 = 24px
  const topRatedScrollAmount = cardWidth + gap;
  
  console.log('Top Rated Section:', { topRatedSlider, topRatedPrevBtn, topRatedNextBtn });
  
  // Next button click handler
  if (topRatedNextBtn && topRatedSlider) {
    topRatedNextBtn.addEventListener("click", function(e) {
      e.preventDefault();
      topRatedSlider.scrollBy({
        left: topRatedScrollAmount,
        behavior: "smooth"
      });
    });
  }
  
  // Previous button click handler
  if (topRatedPrevBtn && topRatedSlider) {
    topRatedPrevBtn.addEventListener("click", function(e) {
      e.preventDefault();
      topRatedSlider.scrollBy({
        left: -topRatedScrollAmount,
        behavior: "smooth"
      });
    });
  }
  
  // Optional: Update button visibility based on scroll position
  function updateTopRatedButtons() {
    if (!topRatedSlider || !topRatedPrevBtn || !topRatedNextBtn) return;
    
    // Show/hide prev button
    if (topRatedSlider.scrollLeft <= 10) {
      topRatedPrevBtn.style.opacity = '0.5';
      topRatedPrevBtn.style.cursor = 'not-allowed';
    } else {
      topRatedPrevBtn.style.opacity = '1';
      topRatedPrevBtn.style.cursor = 'pointer';
    }
    
    // Show/hide next button
    if (topRatedSlider.scrollLeft + topRatedSlider.clientWidth >= topRatedSlider.scrollWidth - 10) {
      topRatedNextBtn.style.opacity = '0.5';
      topRatedNextBtn.style.cursor = 'not-allowed';
    } else {
      topRatedNextBtn.style.opacity = '1';
      topRatedNextBtn.style.cursor = 'pointer';
    }
  }
  
  // Add scroll event listener
  if (topRatedSlider) {
    topRatedSlider.addEventListener('scroll', updateTopRatedButtons);
    // Initial check
    setTimeout(updateTopRatedButtons, 100);
  }
});

// ============================================
// SUGGESTED PRODUCTS SCROLL LOGIC
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.getElementById("suggestedScroll");
  const leftArrow = document.getElementById("scrollLeft");
  const rightArrow = document.getElementById("scrollRight");
  
  if (!scrollContainer || !leftArrow || !rightArrow) return;
  
  const cardWidth = 224 + 20; // 224px (w-56 = 14rem = 224px) + 20px gap

  // Arrow click handlers
  leftArrow.addEventListener("click", () => {
    const newPosition = Math.max(scrollContainer.scrollLeft - cardWidth * 2, 0);
    scrollContainer.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  });

  rightArrow.addEventListener("click", () => {
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.offsetWidth;
    const newPosition = Math.min(
      scrollContainer.scrollLeft + cardWidth * 2,
      maxScroll,
    );
    scrollContainer.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  });
});

// ============================================
// TRENDING PRODUCTS SCROLL LOGIC
// ============================================
function scrollRow(row, direction) {
  const container = document.getElementById(row);
  if (container) {
    container.scrollBy({
      left: direction * 350,
      behavior: "smooth",
    });
  }
}

// ============================================
// PHOTO FRAME SCROLL LOGIC
// ============================================
document.addEventListener("DOMContentLoaded", function() {
  const photoContainer = document.getElementById("photoFramesContainer");
  const pfLeftBtn = document.getElementById("pfLeft");
  const pfRightBtn = document.getElementById("pfRight");
  
  if (!photoContainer || !pfLeftBtn || !pfRightBtn) return;
  
  const pfScrollAmount = 220; // Adjust according to card width + gap

  pfLeftBtn.addEventListener("click", () => {
    photoContainer.scrollBy({ left: -pfScrollAmount, behavior: "smooth" });
  });

  pfRightBtn.addEventListener("click", () => {
    photoContainer.scrollBy({ left: pfScrollAmount, behavior: "smooth" });
  });
});

// ============================================
// DEAL SCROLL LOGIC
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  const dealScrollContainer = document.getElementById("dealScroll");
  const dealLeftBtn = document.getElementById("dealLeft");
  const dealRightBtn = document.getElementById("dealRight");
  
  if (!dealScrollContainer || !dealLeftBtn || !dealRightBtn) return;
  
  const dealScrollAmount = 300; // distance to scroll

  dealRightBtn.addEventListener("click", function () {
    dealScrollContainer.scrollBy({
      left: dealScrollAmount,
      behavior: "smooth",
    });
  });

  dealLeftBtn.addEventListener("click", function () {
    dealScrollContainer.scrollBy({
      left: -dealScrollAmount,
      behavior: "smooth",
    });
  });
});

// ============================================
// COUNTDOWN TIMER LOGIC (if you have it)
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (!hoursEl || !minutesEl || !secondsEl) {
    console.warn("Countdown elements not found");
    return;
  }

  const DURATION_HOURS = 6;
  let endTime = Date.now() + DURATION_HOURS * 60 * 60 * 1000;
  let intervalId = null;

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function update() {
    const remaining = endTime - Date.now();

    if (remaining <= 0) {
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      if (hoursEl.closest) {
        hoursEl.closest(".countdown")?.classList.add("expired");
      }
      stop();
      return;
    }

    const h = Math.floor(remaining / 3600000);
    const m = Math.floor((remaining % 3600000) / 60000);
    const s = Math.floor((remaining % 60000) / 1000);

    hoursEl.textContent = pad(h);
    minutesEl.textContent = pad(m);
    secondsEl.textContent = pad(s);
  }

  function start() {
    if (intervalId) return;
    update();
    intervalId = setInterval(update, 1000);
  }

  function stop() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  start();
  window.addEventListener("beforeunload", stop);
});