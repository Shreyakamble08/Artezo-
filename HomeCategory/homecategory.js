
    //categories toggle
    function toggleCategories() {
      const more = document.getElementById("moreCategories");
      if (more) {
        more.classList.toggle("hidden");
      }
    }

    function toggleCategories() {
      const extraCategories = document.querySelectorAll('.extra-category');
      const btn = document.querySelector('button[onclick="toggleCategories()"]');

      extraCategories.forEach(cat => {
        cat.classList.toggle('hidden'); // show/hide extra categories
      });

      // Update button text
      btn.innerText = btn.innerText === 'View More Categories'
        ? 'View Less Categories'
        : 'View More Categories';
    }


    // decor for wall slider
    const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const scrollAmount = 300; // Adjust scroll distance per click

    nextBtn.addEventListener('click', () => {
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    // new arrivals slider
    const newSlider = document.getElementById('newSlider');
    const newPrev = document.getElementById('newPrev');
    const newNext = document.getElementById('newNext');

    const newScrollAmount = 300;

    newNext.addEventListener('click', () => {
      newSlider.scrollBy({ left: newScrollAmount, behavior: 'smooth' });
    });

    newPrev.addEventListener('click', () => {
      newSlider.scrollBy({ left: -newScrollAmount, behavior: 'smooth' });
    });


