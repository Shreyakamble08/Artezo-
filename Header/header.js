// header.js
let isLoggedIn = true;
let cartCount = 4;
let wishlistCount = 3;

// Tailwind already initialized in HTML

function initTypingAnimation() {
  const phrases = [
    "Search for photoframes…",
    "Search for curtains…",
    "Search for home decor…",
    "Search for deals…",
    "Search for new arrivals…",
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timeout;

  const input = document.getElementById("search-input");

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      input.placeholder = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      input.placeholder = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      timeout = setTimeout(type, 1800);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      timeout = setTimeout(type, 400);
      return;
    }

    const speed = isDeleting ? 35 : 65;
    timeout = setTimeout(type, speed);
  }

  // Pause typing when focused
  input.addEventListener("focus", () => {
    clearTimeout(timeout);
    input.placeholder = "What are you looking for?";
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      charIndex = 0;
      type();
    }
  });

  type();
}

function renderAccountDropdown() {
  const dropdown = document.getElementById("account-dropdown");
  const avatarContainer = document.getElementById("account-avatar");
  const nameEl = document.getElementById("account-name-mobile");

  dropdown.innerHTML = "";

  if (isLoggedIn) {
    // Logged In View
    dropdown.innerHTML = `
            <div class="px-6 py-6 border-b">
                <div class="flex gap-4">
                    <img src="https://picsum.photos/id/64/64" 
                         class="w-14 h-14 rounded-2xl object-cover ring-2 ring-accent/30">
                    <div class="flex-1">
                        <div class="font-semibold text-xl">Shreya Sharma</div>
                        <div class="text-gray-500 text-sm">shreya.pune@gmail.com</div>
                    </div>
                </div>
            </div>
            
            <div class="py-2">
                <a href="#" class="flex items-center gap-x-4 px-7 py-4 hover:bg-zinc-50 text-sm">
                    <i class="fa-solid fa-user w-5 text-gray-400"></i>
                    <span>My Profile</span>
                </a>
                <a href="#" class="flex items-center gap-x-4 px-7 py-4 hover:bg-zinc-50 text-sm">
                    <i class="fa-solid fa-box w-5 text-gray-400"></i>
                    <span>My Orders</span>
                </a>
                <a href="#" class="flex items-center gap-x-4 px-7 py-4 hover:bg-zinc-50 text-sm">
                    <i class="fa-solid fa-heart w-5 text-gray-400"></i>
                    <span>Wishlist</span>
                </a>
                <a href="#" class="flex items-center gap-x-4 px-7 py-4 hover:bg-zinc-50 text-sm">
                    <i class="fa-solid fa-map-marker-alt w-5 text-gray-400"></i>
                    <span>Addresses</span>
                </a>
                <a href="#" class="flex items-center gap-x-4 px-7 py-4 hover:bg-zinc-50 text-sm">
                    <i class="fa-solid fa-bell w-5 text-gray-400"></i>
                    <span>Notifications</span>
                </a>
            </div>
            
            <div class="border-t mx-4 my-2"></div>
            
            <button onclick="logout()" 
                    class="w-full text-left flex items-center gap-x-4 px-7 py-4 text-red-600 hover:bg-red-50 text-sm">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                <span>Logout</span>
            </button>
        `;

    avatarContainer.innerHTML = `<img src="https://picsum.photos/id/64/32" class="w-full h-full object-cover">`;
    nameEl.textContent = "Shreya";
  } else {
    // Logged Out View
    dropdown.innerHTML = `
            <div class="p-8 space-y-4">
                <button onclick="login()" 
                        class="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-3xl font-semibold transition-colors">
                    Sign In
                </button>
                <button onclick="signup()" 
                        class="w-full py-4 border border-primary text-primary rounded-3xl font-semibold">
                    Create New Account
                </button>
                
                <div class="pt-6 text-center space-y-4 text-sm">
                    <a href="#" class="block text-gray-600 hover:text-primary">Track Your Order</a>
                    <a href="#" class="block text-gray-600 hover:text-primary">Need Help?</a>
                </div>
            </div>
        `;

    avatarContainer.innerHTML = `<i class="fa-solid fa-user text-2xl"></i>`;
    nameEl.textContent = "";
  }
}

function toggleAccountDropdown() {
  const dd = document.getElementById("account-dropdown");
  dd.classList.toggle("hidden");

  // Close other dropdowns
  document.getElementById("search-suggestions").classList.add("hidden");
  document.getElementById("categories-dropdown").classList.add("hidden");
}

function toggleCategoriesDropdown() {
  const dd = document.getElementById("categories-dropdown");
  dd.classList.toggle("hidden");
}

function toggleCartPreview() {
  // Create cart preview on the fly if not exists
  let preview = document.getElementById("cart-preview");
  if (!preview) {
    preview = document.createElement("div");
    preview.id = "cart-preview";
    preview.className = `absolute right-0 top-16 w-96 bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 z-50 hidden`;
    preview.innerHTML = `
            <div class="font-semibold text-lg mb-6 flex justify-between">
                <span>Your Cart</span>
                <span class="text-accent text-sm font-normal">${cartCount} items</span>
            </div>
            
            <div class="space-y-6 max-h-96 overflow-auto">
                <!-- Item 1 -->
                <div class="flex gap-4">
                    <img src="https://picsum.photos/id/201/80/80" class="w-20 h-20 object-cover rounded-2xl">
                    <div class="flex-1">
                        <div class="font-medium leading-tight">Photoframes</div>
                        <div class="text-accent mt-1">₹28,999</div>
                        <div class="text-xs text-gray-400 mt-2">Qty: 1</div>
                    </div>
                    <button class="text-red-400 text-xl self-start">×</button>
                </div>
                
                <!-- Item 2 -->
                <div class="flex gap-4">
                    <img src="https://picsum.photos/id/237/80/80" class="w-20 h-20 object-cover rounded-2xl">
                    <div class="flex-1">
                        <div class="font-medium leading-tight">Cashmere Oversized Sweater</div>
                        <div class="text-accent mt-1">₹6,499</div>
                        <div class="text-xs text-gray-400 mt-2">Qty: 1 • Black</div>
                    </div>
                    <button class="text-red-400 text-xl self-start">×</button>
                </div>
            </div>
            
            <div class="mt-8 pt-6 border-t flex justify-between text-lg">
                <span class="font-medium">Subtotal</span>
                <span class="font-semibold">₹35,498</span>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mt-8">
                <a href="#" 
                   class="py-4 border border-primary text-primary font-medium rounded-3xl text-center text-sm hover:bg-zinc-50">View Cart</a>
                <a href="#" 
                   class="py-4 bg-primary text-white font-medium rounded-3xl text-center text-sm">Checkout</a>
            </div>
        `;
    document
      .getElementById("account-wrapper")
      .parentElement.appendChild(preview);
  }

  preview.classList.toggle("hidden");
}

function toggleWishlist() {
  wishlistCount = wishlistCount === 3 ? 4 : 3;
  document.getElementById("wishlist-count").textContent = wishlistCount;
  document.getElementById("mobile-wishlist-count").textContent = wishlistCount;
  // Could open wishlist modal in real app
  alert("❤️ Added to Wishlist (demo)");
}

function quickSearch(el) {
  const term = el.textContent.trim();
  document.getElementById("search-input").value = term;
  document.getElementById("search-suggestions").classList.add("hidden");
  // Simulate search
  setTimeout(() => {
    alert(`🔍 Searching for "${term}"... (demo)`);
  }, 300);
}

function clearRecentSearches() {
  const list = document.getElementById("recent-list");
  list.innerHTML =
    '<div class="text-gray-400 text-sm py-8 text-center">No recent searches</div>';
}

function login() {
  isLoggedIn = true;
  renderAccountDropdown();
  document.getElementById("account-dropdown").classList.remove("hidden");
}

function signup() {
  alert("Redirecting to signup page... (demo)");
}

function logout() {
  isLoggedIn = false;
  renderAccountDropdown();
  document.getElementById("account-dropdown").classList.add("hidden");
}

function toggleLoginState() {
  isLoggedIn = !isLoggedIn;
  renderAccountDropdown();
  alert(isLoggedIn ? "✅ Logged in as Shreya" : "👋 Logged out");
}

// Mobile Menu Controls
function openMobileMenu() {
  document.getElementById("mobile-menu").classList.remove("translate-x-full");
}

function closeMobileMenu() {
  document.getElementById("mobile-menu").classList.add("translate-x-full");
}

function showMobileSearch() {
  document.getElementById("mobile-search-overlay").classList.remove("hidden");
  document.getElementById("mobile-search-input").focus();
}

function hideMobileSearch() {
  document.getElementById("mobile-search-overlay").classList.add("hidden");
}

// Click outside handlers
function handleClickOutside(e) {
  // Account
  const accountWrapper = document.getElementById("account-wrapper");
  if (!accountWrapper.contains(e.target)) {
    document.getElementById("account-dropdown").classList.add("hidden");
  }

  // Search suggestions
  const searchContainer = document.getElementById("desktop-search-container");
  if (!searchContainer.contains(e.target)) {
    document.getElementById("search-suggestions").classList.add("hidden");
  }

  // Categories
  const catBtn = document.querySelector(
    '[onclick="toggleCategoriesDropdown()"]',
  );
  if (catBtn && !catBtn.parentElement.contains(e.target)) {
    document.getElementById("categories-dropdown").classList.add("hidden");
  }
}

// Typing animation for navbar (next to logo)
const typingData = [
  {
    icon: "fa-store",
    text: "Welcome to Artezo Store",
  },
  {
    icon: "fa-couch",
    text: "Elevate Your Home Decor",
  },
  {
    icon: "fa-image",
    text: "Crafted for Every Space",
  },
  {
    icon: "fa-gift",
    text: "Create a Home You Love",
  },
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout;

function typeEffect() {
  const typingTextEl = document.getElementById("typing-text");
  const typingIconEl = document.getElementById("typing-icon");

  // Safety check
  if (!typingTextEl || !typingIconEl) {
    console.log("Typing elements not found");
    return;
  }

  const currentItem = typingData[textIndex];

  // Update icon
  if (charIndex === 0 || (isDeleting === false && charIndex === 1)) {
    typingIconEl.innerHTML = `<i class="fa-solid ${currentItem.icon} mr-2"></i>`;
  }

  const currentText = currentItem.text;

  // Handle typing/deleting logic
  if (isDeleting) {
    typingTextEl.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingTextEl.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  // Determine next action
  let speed = isDeleting ? 40 : 100; // Slightly slower for better readability

  // If word is complete
  if (!isDeleting && charIndex === currentText.length) {
    speed = 2000; // Pause at full text (2 seconds)
    isDeleting = true;
  }
  // If deletion is complete
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typingData.length;
    speed = 500; // Pause before next word
  }

  // Clear previous timeout and set new one
  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(typeEffect, speed);
}

// Start the animation when page loads
document.addEventListener("DOMContentLoaded", function () {
  // Small delay to ensure everything is loaded
  setTimeout(() => {
    console.log("Starting navbar typing animation...");
    typeEffect();
  }, 100);
});

if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  setTimeout(typeEffect, 100);
}
// Init everything
function initializeHeader() {
  // Typing animation
  initTypingAnimation();

  // Account
  renderAccountDropdown();

  // Search focus shows suggestions
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("focus", () => {
    document.getElementById("search-suggestions").classList.remove("hidden");
  });

  // Hamburger
  document
    .getElementById("hamburger-btn")
    .addEventListener("click", openMobileMenu);
  document
    .getElementById("close-menu-btn")
    .addEventListener("click", closeMobileMenu);

  // Mobile search
  document
    .getElementById("mobile-search-btn")
    .addEventListener("click", showMobileSearch);

  // Cart
  document
    .getElementById("cart-btn")
    .addEventListener("click", toggleCartPreview);
  document
    .getElementById("mobile-cart-btn")
    .addEventListener("click", toggleCartPreview);

  // Account button
  document
    .getElementById("account-btn")
    .addEventListener("click", toggleAccountDropdown);

  // Global click outside
  document.addEventListener("click", handleClickOutside);

  // Fake recent searches
  const recentHTML = `
        <div onclick="quickSearch(this)" class="px-4 py-3 hover:bg-zinc-50 border rounded-full cursor-pointer flex justify-between font-lexend font-normal text-sm">
            <span>Photoframes</span>
        </div>
        <div onclick="quickSearch(this)" class="px-4 py-3 hover:bg-zinc-50 border rounded-full cursor-pointer flex justify-between font-lexend font-normal text-sm">
            <span>curtains </span>
        </div>
            <div onclick="quickSearch(this)" class="px-4 py-3 hover:bg-zinc-50 border rounded-full cursor-pointer flex justify-between font-lexend font-normal text-sm">
            <span>wall paintings </span>
        </div>
    `;
  document.getElementById("recent-list").innerHTML = recentHTML;

  // Demo: update cart count
  setTimeout(() => {
    cartCount = 5;
    document.getElementById("cart-count").textContent = cartCount;
    document.getElementById("mobile-cart-count").textContent = cartCount;
  }, 4500);

  console.log(
    "%c Artezo Store Header initialized successfully (Production Ready)",
    "color:#E39F32; font-weight:600",
  );
}

// Auto start
window.onload = initializeHeader;
