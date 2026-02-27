// Banner Slider Logic

  const sliderWrapper = document.querySelector('#banner-slider');
  const slider = document.querySelector('#banner-slider > div');
  const slides = document.querySelectorAll('#banner-slider > div > div');
  const dots = document.querySelectorAll('#banner-slider [data-slide]');
  
  let currentSlide = 0;
  const totalSlides = slides.length;
  let slideInterval;

  function goToSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    
    dots.forEach(dot => dot.classList.remove('bg-white'));
    dots[index].classList.add('bg-white');
    
    currentSlide = index;
  }

  // Dot Click
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.dataset.slide);
      goToSlide(slideIndex);
    });
  });

  // Start Auto Slide
  function startSlider() {
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
  sliderWrapper.addEventListener('mouseenter', stopSlider);
  sliderWrapper.addEventListener('mouseleave', startSlider);

  // Initialize
  goToSlide(0);
  startSlider();

  //countdown timer logic
document.addEventListener('DOMContentLoaded', () => {
  const hoursEl   = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (!hoursEl || !minutesEl || !secondsEl) {
    console.warn('Countdown elements not found');
    return;
  }

  const DURATION_HOURS = 6;
  let endTime = Date.now() + DURATION_HOURS * 60 * 60 * 1000;
  let intervalId = null;

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function update() {
    const remaining = endTime - Date.now();

    if (remaining <= 0) {
      hoursEl.textContent   = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      // Optional: add expired class / message
      hoursEl.closest('.countdown')?.classList.add('expired');
      stop();
      return;
    }

    const h = Math.floor(remaining / 3600000);
    const m = Math.floor((remaining % 3600000) / 60000);
    const s = Math.floor((remaining % 60000) / 1000);

    hoursEl.textContent   = pad(h);
    minutesEl.textContent = pad(m);
    secondsEl.textContent = pad(s);
  }

  function start() {
    if (intervalId) return;
    update(); // immediate
    intervalId = setInterval(update, 1000);
  }

  function stop() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  // Start
  start();

  // Cleanup (good practice)
  window.addEventListener('beforeunload', stop);
});