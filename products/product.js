// Image Gallery Logic
function changeImage(thumbnail, src) {
    const mainImg = document.getElementById('main-product-img');
    
    // Smooth transition effect
    mainImg.style.opacity = '0.4';
    
    setTimeout(() => {
        mainImg.src = src;
        mainImg.style.opacity = '1';
    }, 200);

    // Update active thumbnail
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
}

// Quantity Logic
function updateQty(val) {
    const input = document.getElementById('qty-input');
    let current = parseInt(input.value);
    if (current + val >= 1) {
        input.value = current + val;
    }
}

// Coupon Toggle Logic
function toggleCoupons(btn) {
    const hiddenCoupons = document.querySelectorAll('.coupon-card.hidden');
    const isExpanding = btn.innerText.includes('View All');
    
    hiddenCoupons.forEach(coupon => {
        coupon.style.display = isExpanding ? 'flex' : 'none';
    });

    btn.innerHTML = isExpanding ? 
        'View Less <i data-lucide="chevron-up"></i>' : 
        'View All Coupons <i data-lucide="chevron-down"></i>';
    
    lucide.createIcons();
}

// Share Modal Logic
function toggleShareModal() {
    const modal = document.getElementById('share-modal');
    const isVisible = modal.style.display === 'flex';
    modal.style.display = isVisible ? 'none' : 'flex';
}

// Swatch Selection
function selectSwatch(el, colorName) {
    document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('selected-color').innerText = colorName;
    
    // Simulate image change on variant select
    const mainImg = document.getElementById('main-product-img');
    mainImg.style.filter = 'hue-rotate(45deg)'; // Visual feedback
    setTimeout(() => mainImg.style.filter = 'none', 500);
}

// Simple Countdown Timer
let time = 15795; // seconds
setInterval(() => {
    time--;
    const h = Math.floor(time / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = time % 60;
    document.getElementById('timer').innerText = 
        `${h}h ${m}m ${s}s`;
}, 1000);

// Apply Coupon Animation
document.querySelectorAll('.apply-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.innerText = 'Applied!';
        this.style.color = '#27ae60';
        this.parentElement.style.borderColor = '#27ae60';
        this.parentElement.style.backgroundColor = '#f0fff4';
    });
});

