document.addEventListener("DOMContentLoaded", function () {
  // ---------- Product Detail Logic ----------
  // 1. Thumbnail image switching
  const mainImg = document.getElementById("mainProductImage");
  const thumbs = document.querySelectorAll(".thumbnail-img");
  if (thumbs.length && mainImg) {
    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", function () {
        thumbs.forEach((t) =>
          t.classList.remove("active", "ring-2", "ring-[#e39f32]"),
        );
        this.classList.add("active", "ring-2", "ring-[#e39f32]");
        const newSrc = this.dataset.full;
        if (newSrc) mainImg.src = newSrc;
      });
    });
  }

  // 2. Share popup
  const shareBtn = document.getElementById("shareButton");
  const sharePopup = document.getElementById("sharePopup");
  if (shareBtn && sharePopup) {
    shareBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      sharePopup.classList.toggle("hidden");
    });
    document.addEventListener("click", (e) => {
      if (!shareBtn.contains(e.target) && !sharePopup.contains(e.target)) {
        sharePopup.classList.add("hidden");
      }
    });
  }

  // 3. Color swatch → main image
  const swatches = document.querySelectorAll(".color-swatch");
  if (swatches.length && mainImg) {
    swatches.forEach((sw) => {
      sw.addEventListener("click", function () {
        // Update active state
        swatches.forEach((s) => {
          s.classList.remove("ring-2", "ring-[#e39f32]");
          s.classList.add("ring-1", "ring-gray-300");
        });
        this.classList.add("ring-2", "ring-[#e39f32]");
        this.classList.remove("ring-1", "ring-gray-300");

        // Update image
        const imgUrl = this.dataset.img;
        if (imgUrl) mainImg.src = imgUrl;
      });
    });
  }

  // 4. Coupon expand / collapse
  const viewAllBtn = document.getElementById("viewAllCoupons");
  const extraCoupons = document.getElementById("extraCoupons");
  const chevron = document.getElementById("couponChevron");
  if (viewAllBtn && extraCoupons) {
    viewAllBtn.addEventListener("click", function () {
      extraCoupons.classList.toggle("hidden");
      if (chevron) {
        chevron.style.transform = extraCoupons.classList.contains("hidden")
          ? "rotate(0deg)"
          : "rotate(180deg)";
      }
      viewAllBtn.textContent = extraCoupons.classList.contains("hidden")
        ? "View More Coupons"
        : "View Less Coupons";
    });
  }

  // 5. Apply coupon feedback
  const applyBtns = document.querySelectorAll(".apply-coupon");
  const appliedMsg = document.getElementById("appliedMessage");
  const appliedSpan = document.getElementById("appliedCode");
  if (applyBtns.length && appliedMsg && appliedSpan) {
    applyBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        const couponCard = this.closest(".coupon-card, .bg-white");
        const codeElem = couponCard?.querySelector(
          ".font-mono, code, .coupon-code",
        );
        if (codeElem) {
          const codeText = codeElem.innerText.replace("Code:", "").trim();
          appliedSpan.innerText = codeText + " applied!";
          appliedMsg.classList.remove("hidden", "opacity-0");
          appliedMsg.classList.add("opacity-100");

          // Visual feedback on button
          const originalText = this.textContent;
          this.textContent = "Applied!";
          this.classList.add("bg-green-600");
          this.classList.remove("bg-[#1D3C4A]", "hover:bg-[#0f2a38]");

          setTimeout(() => {
            appliedMsg.classList.add("opacity-0");
            setTimeout(() => appliedMsg.classList.add("hidden"), 300);
            this.textContent = originalText;
            this.classList.remove("bg-green-600");
            this.classList.add("bg-[#1D3C4A]", "hover:bg-[#0f2a38]");
          }, 2000);
        }
      });
    });
  }

  // 6. Quantity
   let quantity = 1;
  let stock = 5;

  const quantityEl = document.getElementById("quantity");
  const stockInfo = document.getElementById("stockInfo");
  const increaseBtn = document.getElementById("increaseBtn");
  const decreaseBtn = document.getElementById("decreaseBtn");

  function updateUI() {
    quantityEl.textContent = quantity;

    let remaining = stock - quantity;

    if (remaining > 0) {
      stockInfo.textContent = `Only ${remaining} items left in stock`;
      stockInfo.className = "text-xs font-medium text-green-600";
    } else {
      stockInfo.textContent = "Out of stock";
      stockInfo.className = "text-xs font-medium text-red-600";
    }
  }

  increaseBtn.addEventListener("click", () => {
    if (quantity < stock) {
      quantity++;
      updateUI();
    }
  });

  decreaseBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      updateUI();
    }
  });

  updateUI();

  // 7. Countdown timer
  function updateTimer() {
    const hoursEl = document.getElementById("timerHours");
    const minsEl = document.getElementById("timerMinutes");
    const secsEl = document.getElementById("timerSeconds");
    if (!hoursEl || !minsEl || !secsEl) return;

    let hours = parseInt(hoursEl.innerText) || 0;
    let mins = parseInt(minsEl.innerText) || 0;
    let secs = parseInt(secsEl.innerText) || 0;

    if (secs > 0) {
      secs--;
    } else if (mins > 0) {
      mins--;
      secs = 59;
    } else if (hours > 0) {
      hours--;
      mins = 59;
      secs = 59;
    }

    secsEl.innerText = secs.toString().padStart(2, "0");
    minsEl.innerText = mins.toString().padStart(2, "0");
    hoursEl.innerText = hours.toString().padStart(2, "0");
  }
  setInterval(updateTimer, 1000);

  // ---------- FIXED: Offer Overlay Logic ----------
  const overlay = document.getElementById("offerOverlay");
  const modal = document.getElementById("offerModal");
  const btn = document.getElementById("viewMoreBtn");
  const closeBtn = document.getElementById("closeOffersBtn");

  // Check if elements exist
  if (overlay && modal && btn && closeBtn) {
    console.log("Offer overlay initialized"); // Debug

    // Open modal
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      console.log("Opening modal"); // Debug

      // Remove hidden classes and show overlay
      overlay.classList.remove("hidden", "opacity-0", "pointer-events-none");
      overlay.classList.add("flex", "opacity-100");

      // Show modal with animation
      modal.classList.remove("hidden", "scale-95", "opacity-0");
      modal.classList.add("flex", "scale-100", "opacity-100");

      // Prevent body scroll
      document.body.classList.add("overflow-hidden");
    });

    // Close function
    function closeOffers() {
      console.log("Closing modal"); // Debug

      // Hide overlay
      overlay.classList.add("opacity-0", "pointer-events-none");
      overlay.classList.remove("opacity-100");

      // Hide modal
      modal.classList.add("scale-95", "opacity-0");
      modal.classList.remove("scale-100", "opacity-100");

      // Restore scroll after animation
      setTimeout(() => {
        if (overlay.classList.contains("opacity-0")) {
          overlay.classList.add("hidden");
          modal.classList.add("hidden");
        }
        document.body.classList.remove("overflow-hidden");
      }, 300);
    }

    // Close button click
    closeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeOffers();
    });

    // Click outside to close
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) {
        closeOffers();
      }
    });

    // Close on escape key
    document.addEventListener("keydown", function (e) {
      if (
        e.key === "Escape" &&
        !overlay.classList.contains("hidden") &&
        !overlay.classList.contains("opacity-0")
      ) {
        closeOffers();
      }
    });
  } else {
    console.warn("Offer overlay elements not found:", {
      overlay: !!overlay,
      modal: !!modal,
      btn: !!btn,
      closeBtn: !!closeBtn,
    });
  }
});

//similar products section
function selectDesign(card, name) {
  document.getElementById("selectedDesign").innerText = name;

  document.querySelectorAll(".design-card > div").forEach((el) => {
    el.classList.remove("bg-[#fff8ef]", "border-2", "border-[#e39f32]");
    el.classList.add("bg-[#E8F1F4]", "border", "border-[#e5e7eb]");
  });

  const selected = card.querySelector("div");
  selected.classList.remove("bg-[#E8F1F4]", "border", "border-[#e5e7eb]");
  selected.classList.add("bg-[#fff8ef]", "border-2", "border-[#e39f32]");
}

//8. additional information toggle
 const items = document.querySelectorAll(".item");

  items.forEach(item => {
    const btn = item.querySelector(".toggle");
    const content = item.querySelector(".content");
    const icon = item.querySelector(".icon");

    btn.addEventListener("click", () => {

      items.forEach(i => {
        if (i !== item) {
          i.querySelector(".content").classList.remove("open");
          i.querySelector(".icon").style.transform = "rotate(0deg)";
        }
      });

      content.classList.toggle("open");

      if (content.classList.contains("open")) {
        icon.style.transform = "rotate(45deg)";
      } else {
        icon.style.transform = "rotate(0deg)";
      }

    });
  });


  //frequently bought together toggle
  const checkboxes = document.querySelectorAll('.product-check');
  const btn = document.getElementById('addToCartBtn');

  function updateTotal() {
    let total = 0;
    let count = 0;

    checkboxes.forEach(box => {
      if (box.checked) {
        total += parseInt(box.dataset.price);
        count++;
      }
    });

    btn.innerHTML = `
      Add To Cart (${count}) 
      <span class="text-[#e39f32]">• Total ₹${total.toLocaleString()}</span>
    `;
  }

  checkboxes.forEach(box => {
    box.addEventListener('change', updateTotal);
  });

  updateTotal();


  //review section toggle
  document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const reviewsContainer = document.getElementById('reviewsContainer');
    
    // Additional reviews data with varied gradients
    const moreReviews = [
      {
        name: 'Vikram S.',
        image: 'https://randomuser.me/api/portraits/men/45.jpg',
        rating: 5,
        location: 'Delhi',
        time: '2 weeks ago',
        text: 'Perfect addition to my home office. The ergonomics are spot on and it looks stylish. Worth every rupee!',
        verified: true,
        likes: 45,
        gradient: 'to-[#fff4e6]'
      },
      {
        name: 'Neha P.',
        image: 'https://randomuser.me/api/portraits/women/72.jpg',
        rating: 4,
        location: 'Pune',
        time: '2 weeks ago',
        text: 'Very happy with the purchase. The color matched exactly what I ordered. Slightly heavy but that shows quality.',
        verified: true,
        likes: 27,
        gradient: 'to-[#e6f3f0]'
      },
      {
        name: 'Arjun R.',
        image: 'https://randomuser.me/api/portraits/men/52.jpg',
        rating: 5,
        location: 'Hyderabad',
        time: '3 weeks ago',
        text: 'My wife loves it! We got it for our dining room and it has completely transformed the space. Great craftsmanship.',
        verified: true,
        likes: 38,
        gradient: 'to-[#f3e6ff]'
      }
    ];

    // Function to render star rating
    function renderStars(rating) {
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
          stars += '<i class="fa-solid fa-star"></i>';
        } else {
          stars += '<i class="fa-regular fa-star"></i>';
        }
      }
      return stars;
    }

    // Get random gradient
    function getRandomGradient(index) {
      const gradients = ['to-[#fff9f2]', 'to-[#f0f7fa]', 'to-[#faf5ff]', 'to-[#fff4e6]', 'to-[#e6f3f0]', 'to-[#f3e6ff]'];
      return gradients[index % gradients.length];
    }

    // Load more functionality
    loadMoreBtn.addEventListener('click', function() {
      // Hide the button after clicking
      loadMoreBtn.disabled = true;
      loadMoreBtn.innerHTML = '<span class="relative">Loading...</span> <i class="fa-solid fa-spinner fa-spin relative"></i>';
      
      // Simulate loading delay
      setTimeout(() => {
        moreReviews.forEach((review, index) => {
          const reviewCard = document.createElement('div');
          reviewCard.className = `bg-gradient-to-br from-white ${getRandomGradient(index)} rounded-2xl border border-[#e5e7eb] p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group`;
          
          reviewCard.innerHTML = `
            <div class="absolute inset-0 bg-gradient-to-br from-[#e39f32]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#e39f32]/10 to-transparent rounded-bl-full -mr-8 -mt-8 group-hover:scale-110 transition-transform duration-500"></div>
            <div class="relative">
              <div class="flex items-start gap-4 mb-4">
                <img src="${review.image}" alt="${review.name}" class="w-12 h-12 rounded-full object-cover border-2 border-[#e39f32] ring-2 ring-[#e39f32]/20">
                <div>
                  <h4 class="font-semibold text-[#1D3C4A]">${review.name}</h4>
                  <div class="flex items-center gap-2 text-sm">
                    <div class="flex text-[#e39f32]">
                      ${renderStars(review.rating)}
                    </div>
                    ${review.verified ? '<span class="text-green-600 text-xs flex items-center bg-green-50 px-2 py-0.5 rounded-full"><i class="fa-solid fa-circle-check mr-1"></i> Verified</span>' : ''}
                  </div>
                </div>
              </div>
              <p class="text-[#1D3C4A]/80 text-sm leading-relaxed mb-3 italic">"${review.text}"</p>
              <div class="flex items-center gap-2 text-xs text-gray-500 border-t border-[#e5e7eb] pt-3 mt-2">
                <span>${review.time}</span>
                <span>•</span>
                <span>${review.location}</span>
                <span class="ml-auto"><i class="fa-regular fa-heart text-[#e39f32]"></i> ${review.likes}</span>
              </div>
            </div>
          `;
          
          reviewsContainer.appendChild(reviewCard);
        });
        
        // Remove button after loading all reviews
        loadMoreBtn.parentElement.remove();
      }, 1000);
    });
  });

  //whatsapp custom message
  const productName = "Premium Wireless Headphones"; // from page
const msg = encodeURIComponent(`Hi, interested in ${productName}. Can you send live videos? 📹`);
link.href = `https://wa.me/+91xxxxxxxxxx?text=${msg}`;
