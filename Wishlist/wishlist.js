/**
 * Wishlist Page JavaScript - Complete Fixed Version
 * Handles displaying wishlist items, moving to cart, and removing items
 */

// Global variables
let wishlistService = null;
let wishlistIds = [];
let productsData = [];
let isInitialized = false;
let initAttempts = 0;
const MAX_INIT_ATTEMPTS = 10;

// DOM elements
const wishlistGrid = document.getElementById('wishlist-grid');
const wishlistLoading = document.getElementById('wishlist-loading');
const emptyState = document.getElementById('empty-state');
const wishlistCountDisplay = document.getElementById('wishlist-count-display');
const moveAllContainer = document.getElementById('move-all-container');
const moveAllButton = document.getElementById('move-all-to-cart');

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    console.log("[Wishlist] DOM ready, initializing...");
    initWishlistPage();
});

/**
 * Initialize wishlist page with retry logic
 */
function initWishlistPage() {
    if (isInitialized) return;
    
    if (initAttempts >= MAX_INIT_ATTEMPTS) {
        console.error("[Wishlist] Max initialization attempts reached");
        showFallbackMessage();
        return;
    }
    
    initAttempts++;
    
    try {
        // Try to get wishlist service
        if (typeof window.getCartWishlistService !== 'undefined') {
            wishlistService = window.getCartWishlistService();
        } else if (typeof getCartWishlistService !== 'undefined') {
            wishlistService = getCartWishlistService();
        }
        
        if (wishlistService && typeof wishlistService.getWishlistItems === 'function') {
            console.log("[Wishlist] Service found");
            loadAllProductsData();
        } else {
            console.log("[Wishlist] Waiting for service... (attempt " + initAttempts + ")");
            setTimeout(initWishlistPage, 500);
        }
        
    } catch (error) {
        console.error("[Wishlist] Error initializing:", error);
        setTimeout(initWishlistPage, 500);
    }
}

/**
 * Load ALL products data from all available sources
 */
function loadAllProductsData() {
    console.log("[Wishlist] Loading all products data...");
    
    if (wishlistLoading) wishlistLoading.classList.remove('hidden');
    if (wishlistGrid) wishlistGrid.classList.add('hidden');
    if (emptyState) emptyState.classList.add('hidden');
    
    // Try multiple sources to get all products
    let allProductsData = [];
    
    // Source 1: Try to get from ProductDatabase
    if (window.ProductDatabase && typeof window.ProductDatabase.getAllProducts === 'function') {
        allProductsData = window.ProductDatabase.getAllProducts();
        console.log("[Wishlist] Products loaded from ProductDatabase:", allProductsData.length);
    }
    
    // Source 2: Try from global allProducts (from homesubcategory.js)
    else if (typeof window.allProducts !== 'undefined' && Array.isArray(window.allProducts) && window.allProducts.length > 0) {
        allProductsData = [...window.allProducts];
        console.log("[Wishlist] Products loaded from window.allProducts:", allProductsData.length);
    }
    
    // Source 3: Try from window.artezoproducts
    else if (typeof window.artezoproducts !== 'undefined' && Array.isArray(window.artezoproducts) && window.artezoproducts.length > 0) {
        allProductsData = [...window.artezoproducts];
        console.log("[Wishlist] Products loaded from window.artezoproducts:", allProductsData.length);
    }
    
    // Source 4: Build from ProductDatabase manually
    else if (window.ProductDatabase) {
        allProductsData = buildProductsFromDatabase();
        console.log("[Wishlist] Products built from ProductDatabase:", allProductsData.length);
    }
    
    // Source 5: Try from localStorage
    else {
        const storedProducts = localStorage.getItem('artezoproducts');
        if (storedProducts) {
            try {
                const parsed = JSON.parse(storedProducts);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    allProductsData = parsed;
                    console.log("[Wishlist] Products loaded from localStorage:", allProductsData.length);
                }
            } catch (e) {
                console.error("Error parsing stored products:", e);
            }
        }
    }
    
    // If still no products, use fallback with complete product data
    if (allProductsData.length === 0) {
        console.warn("[Wishlist] No product data found, using complete fallback database");
        allProductsData = getCompleteProductDatabase();
        console.log("[Wishlist] Using fallback database with:", allProductsData.length, "products");
    }
    
    productsData = allProductsData;
    console.log("[Wishlist] Final productsData loaded:", productsData.length, "products");
    console.log("[Wishlist] Sample product:", productsData[0]);
    
    // Now load wishlist IDs
    loadWishlistIds();
}

/**
 * Build complete product database from ProductDatabase
 */
function buildProductsFromDatabase() {
    const products = [];
    
    // Add main product
    if (window.ProductDatabase && window.ProductDatabase.mainProduct) {
        const main = window.ProductDatabase.mainProduct;
        products.push({
            id: main.productId,
            name: main.productName,
            price: main.currentSellingPrice,
            material: main.specifications?.material || "Premium Acrylic",
            color: main.selectedColor,
            size: "Standard",
            style: "modern",
            image: main.mainImage,
            subcategory: "wall-plates",
            isCustomizable: false,
            popular: 100,
            newest: 1
        });
        
        // Add variants as separate products
        if (main.availableVariants && Array.isArray(main.availableVariants)) {
            main.availableVariants.forEach(variant => {
                products.push({
                    id: main.productId,
                    name: main.productName + " - " + variant.color,
                    price: variant.price,
                    material: main.specifications?.material || "Premium Acrylic",
                    color: variant.color,
                    size: variant.size || "Standard",
                    style: "modern",
                    image: variant.mainImage,
                    subcategory: "wall-plates",
                    isCustomizable: false
                });
            });
        }
    }
    
    // Add Zando product
    if (window.ProductDatabase && window.ProductDatabase.zandoProduct) {
        const zando = window.ProductDatabase.zandoProduct;
        products.push({
            id: zando.productId,
            name: zando.productName,
            price: zando.currentSellingPrice,
            material: "Teak Wood",
            color: zando.selectedColor,
            size: "M",
            style: "handcrafted",
            image: zando.mainImage,
            subcategory: "planters",
            isCustomizable: false,
            popular: 80,
            newest: 2
        });
        
        // Add variants
        if (zando.availableVariants && Array.isArray(zando.availableVariants)) {
            zando.availableVariants.forEach(variant => {
                products.push({
                    id: zando.productId,
                    name: zando.productName + " (" + variant.size + ", " + variant.color + ")",
                    price: variant.price,
                    material: "Teak Wood",
                    color: variant.color,
                    size: variant.size,
                    style: "handcrafted",
                    image: variant.mainImage,
                    subcategory: "planters",
                    isCustomizable: false
                });
            });
        }
    }
    
    // Add customizable products
    if (window.ProductDatabase && window.ProductDatabase.customizableProducts) {
        window.ProductDatabase.customizableProducts.forEach(product => {
            products.push({
                id: product.id,
                name: product.name,
                price: product.price,
                material: product.material,
                color: product.color,
                size: product.size,
                style: product.style,
                image: product.image,
                subcategory: product.subcategory,
                isCustomizable: true,
                popular: product.popular || 0,
                newest: product.newest || 0
            });
        });
    }
    
    // Add non-customizable products
    if (window.ProductDatabase && window.ProductDatabase.nonCustomizableProducts) {
        window.ProductDatabase.nonCustomizableProducts.forEach(product => {
            products.push({
                id: product.id,
                name: product.name,
                price: product.price,
                material: product.material,
                color: product.color,
                size: product.size,
                style: product.style,
                image: product.image,
                subcategory: product.subcategory,
                isCustomizable: false,
                popular: product.popular || 0,
                newest: product.newest || 0
            });
        });
    }
    
    return products;
}

/**
 * Get complete fallback product database with all products
 */
function getCompleteProductDatabase() {
    return [
        // Wall Clocks (IDs 101-109)
        { id: 101, name: "Rustic Wooden effect Wall Clock", price: 1299, material: "Wood", color: "Brown", size: "Large", style: "vintage", popular: 120, newest: 3, image: "https://i.etsystatic.com/18909544/r/il/4d908c/7682769240/il_1588xN.7682769240_b8zb.jpg", subcategory: "wall-clock", isCustomizable: false },
        { id: 102, name: "Monaco Line Wall Clock", price: 2499, material: "Metal", color: "Black", size: "Medium", style: "industrial", popular: 85, newest: 1, image: "https://i.etsystatic.com/34705037/r/il/e6fbee/7524212685/il_1588xN.7524212685_971u.jpg", subcategory: "wall-clock", isCustomizable: false },
        { id: 103, name: "Emerald Gold Geode Resin Wall Clock", price: 899, material: "Acrylic", color: "White", size: "Small", style: "modern", popular: 210, newest: 5, image: "https://i.etsystatic.com/32365247/r/il/38d2e1/7626635886/il_1588xN.7626635886_9ong.jpg", subcategory: "wall-clock", isCustomizable: false },
        { id: 104, name: "Large Wooden Wall Clock", price: 1899, material: "Wood", color: "Beige", size: "Large", style: "vintage", popular: 95, newest: 2, image: "https://i.etsystatic.com/64718721/r/il/511d00/7814875017/il_1588xN.7814875017_7yrv.jpg", subcategory: "wall-clock", isCustomizable: false },
        { id: 105, name: "Delta Clock Oak", price: 1599, material: "Metal", color: "Gold", size: "Large", style: "modern", popular: 140, newest: 4, image: "https://i.etsystatic.com/44080229/r/il/6056cb/6675890781/il_1588xN.6675890781_7arh.jpg", subcategory: "wall-clock", isCustomizable: false },
        { id: 106, name: "Minimalist Design Wall Clock", price: 1199, material: "Acrylic", color: "Black", size: "Small", style: "modern", popular: 60, newest: 6, image: "https://i.etsystatic.com/35571911/r/il/1f282a/7411981503/il_1588xN.7411981503_77jz.jpg", subcategory: "wall-clock", isCustomizable: false },
        { id: 107, name: "Nordic Wooden Wall Clock", price: 3299, material: "Metal", color: "Gold", size: "Large", style: "vintage", popular: 200, newest: 7, image: "https://i.etsystatic.com/64025687/r/il/19c00a/7693825536/il_1588xN.7693825536_kk3a.jpg", subcategory: "wall-clock", isCustomizable: false },
        { id: 108, name: "Japanese Bamboo Wall Clock", price: 2199, material: "Wood", color: "Brown", size: "Medium", style: "modern", popular: 180, newest: 8, image: "https://i.etsystatic.com/59405372/r/il/3577be/7738496626/il_1588xN.7738496626_o4hf.jpg", subcategory: "wall-clock", isCustomizable: false },
        { id: 109, name: "Modern LED Wall Clock", price: 4199, material: "Wood", color: "Brown", size: "large", style: "modern", newest: 8, image: "https://i.etsystatic.com/64484747/r/il/e1921b/7692667042/il_1588xN.7692667042_ntd8.jpg", subcategory: "wall-clock", isCustomizable: false },
        
        // Paintings - Customizable (IDs 201-205)
        { id: 201, name: "Mughal Floral Arch Print", price: 4299, material: "Canvas", color: "Blue", size: "Large", style: "abstract", popular: 210, newest: 9, image: "https://i.etsystatic.com/24426965/r/il/1a2154/7320284410/il_1588xN.7320284410_9gj3.jpg", subcategory: "paintings", isCustomizable: true },
        { id: 202, name: "Large Abstract Horse Oil Painting", price: 3899, material: "Canvas", color: "Green", size: "Medium", style: "impressionist", popular: 134, newest: 3, image: "https://i.etsystatic.com/24877167/r/il/7ef537/6088607241/il_1588xN.6088607241_blvw.jpg", subcategory: "paintings", isCustomizable: true },
        { id: 203, name: "Textured Ocean Wave Oil Painting", price: 5599, material: "Canvas", color: "Brown", size: "Large", style: "modern", popular: 87, newest: 7, image: "https://i.etsystatic.com/26843029/r/il/88f0f2/7070660187/il_1588xN.7070660187_q3xj.jpg", subcategory: "paintings", isCustomizable: true },
        { id: 204, name: "Pichwai Temple Art Print", price: 6799, material: "Canvas", color: "Gold", size: "Large", style: "abstract", popular: 260, newest: 2, image: "https://i.etsystatic.com/10724506/r/il/2bc592/6878046174/il_1588xN.6878046174_9421.jpg", subcategory: "paintings", isCustomizable: true },
        { id: 205, name: "Embrace of Love Abstract Canvas", price: 3199, material: "Canvas", color: "Blue", size: "Small", style: "impressionist", newest: 4, image: "https://i.etsystatic.com/63074056/r/il/661801/7566623964/il_1588xN.7566623964_63j0.jpg", subcategory: "paintings", isCustomizable: true },
        
        // Wall Sketches (IDs 301-302)
        { id: 301, name: "Abstract Charcoal Woman Portrait", price: 1599, material: "Paper", color: "Black", size: "Medium", style: "portrait", popular: 70, newest: 3, image: "https://i.etsystatic.com/51859104/r/il/b9655d/6932475264/il_1588xN.6932475264_g6gf.jpg", subcategory: "wall-sketch", isCustomizable: true },
        { id: 302, name: "Minimalist Botanical Set of 2", price: 999, material: "Paper", color: "Green", size: "Small", style: "botanical", popular: 130, newest: 8, image: "https://i.etsystatic.com/53518994/r/il/4972f5/7261478818/il_1588xN.7261478818_4a34.jpg", subcategory: "wall-sketch", isCustomizable: true },
        
        // Nameplates (IDs 401-402)
        { id: 401, name: "Personalized Brass Nameplate", price: 1499, material: "Brass", color: "Gold", size: "Medium", style: "traditional", popular: 145, newest: 5, image: "https://housenama.com/cdn/shop/files/veli-red-2.jpg?v=1766609828&width=1100", subcategory: "nameplates", isCustomizable: true },
        { id: 402, name: "Modern Acrylic Nameplate - LED Backlit", price: 2499, material: "Acrylic", color: "Clear", size: "Medium", style: "modern", popular: 98, newest: 3, image: "https://m.media-amazon.com/images/I/51+Bg5kefuL._SY300_SX300_QL70_FMwebp_.jpg", subcategory: "nameplates", isCustomizable: true },
        
        // Jharokas (IDs 403-404)
        { id: 403, name: "Hand-Carved Wooden Jharokha", price: 12499, material: "Brass", color: "Gold", size: "Medium", style: "ornate", popular: 60, newest: 2, image: "https://i.etsystatic.com/48701049/r/il/3bd6b1/7450079728/il_1588xN.7450079728_91hd.jpg", subcategory: "jharokas", isCustomizable: false },
        { id: 404, name: "Wood Jharokha with Accent", price: 9999, material: "Wood", color: "Brown", size: "Large", style: "traditional", popular: 190, newest: 8, image: "https://m.media-amazon.com/images/I/51+Bg5kefuL._SY300_SX300_QL70_FMwebp_.jpg", subcategory: "jharokas", isCustomizable: false },
        
        // Metal Wall Hangings (IDs 501-502)
        { id: 501, name: "Goldfern Metal Wall Accent", price: 3499, material: "Metal", color: "Black", size: "Large", style: "modern", popular: 89, newest: 4, image: "https://cdn.shopify.com/s/files/1/0632/2526/6422/files/9100000045771_6.jpg?v=1771489110&width=4320", subcategory: "metal-wall-hangings", isCustomizable: false },
        { id: 502, name: "Decorative Metal Wall Art", price: 4299, material: "Metal", color: "Gold", size: "Medium", style: "modern", popular: 120, newest: 3, image: "https://m.media-amazon.com/images/I/717lPel5ZRL._SX522_.jpg", subcategory: "metal-wall-hangings", isCustomizable: false },
        
        // Wallpapers (IDs 601-602)
        { id: 601, name: "Floral Bird Wallpaper", price: 2999, material: "Paper", color: "Pink", size: "Roll", style: "floral", popular: 156, newest: 7, image: "https://www.kalakaarihaath.com/cdn/shop/files/TheRoyalApprentice_aqua_2.jpg?v=1768403784&width=1280", subcategory: "wallpapers", isCustomizable: false },
        { id: 602, name: "Elegant Gold Line Art Peony Wallpaper", price: 3299, material: "Vinyl", color: "Blue", size: "Roll", style: "modern", popular: 98, newest: 5, image: "https://i.etsystatic.com/15639703/r/il/d45fb4/4997090418/il_1588xN.4997090418_6dst.jpg", subcategory: "wallpapers", isCustomizable: false },
        
        // Brass Wall Hangings (IDs 901-902)
        { id: 901, name: "Brass Temple Bells", price: 4499, material: "Brass", color: "Gold", size: "Medium", style: "traditional", popular: 178, newest: 3, image: "https://placehold.co/400x300/4d6b5c/ffffff?text=🔔+Brass+Bells", subcategory: "brass-wall-hangings", isCustomizable: false },
        { id: 902, name: "Brass Wall Mask", price: 5999, material: "Brass", color: "Gold", size: "Large", style: "traditional", popular: 134, newest: 5, image: "https://placehold.co/400x300/3d7a5c/ffffff?text=🎭+Brass+Mask", subcategory: "brass-wall-hangings", isCustomizable: false }
    ];
}

/**
 * Load wishlist IDs from service
 */
function loadWishlistIds() {
    try {
        wishlistIds = wishlistService.getWishlistItems();
        console.log("[Wishlist] Wishlist IDs from service:", wishlistIds);
        
        if (!wishlistIds || wishlistIds.length === 0) {
            showEmptyState();
            return;
        }
        
        renderWishlistItems();
        
    } catch (error) {
        console.error("[Wishlist] Error loading wishlist IDs:", error);
        showFallbackMessage();
    }
}

/**
 * Render wishlist items using actual product data
 */
function renderWishlistItems() {
    try {
        // Create a map of products by ID for faster lookup
        const productMap = new Map();
        productsData.forEach(product => {
            productMap.set(product.id, product);
        });
        
        console.log("[Wishlist] Product map created with", productMap.size, "products");
        console.log("[Wishlist] Looking for IDs:", wishlistIds);
        
        // Find products that match wishlist IDs
        const wishlistProducts = [];
        const notFoundIds = [];
        
        for (let i = 0; i < wishlistIds.length; i++) {
            const wishlistId = wishlistIds[i];
            const product = productMap.get(wishlistId);
            if (product) {
                wishlistProducts.push(product);
                console.log("[Wishlist] Found product:", product.id, product.name);
            } else {
                notFoundIds.push(wishlistId);
                console.warn("[Wishlist] Product not found for ID:", wishlistId);
            }
        }
        
        console.log("[Wishlist] Found products in wishlist:", wishlistProducts.length);
        
        if (wishlistProducts.length === 0) {
            showEmptyState();
            return;
        }
        
        // Update count display
        if (wishlistCountDisplay) {
            wishlistCountDisplay.textContent = wishlistProducts.length;
        }
        
        // Show move all button
        if (moveAllContainer) {
            moveAllContainer.classList.remove('hidden');
        }
        
        // Generate HTML for wishlist items
        let wishlistHTML = '';
        
        wishlistProducts.forEach(product => {
            const mrp = Math.round(product.price * 1.35);
            const discount = Math.round(((mrp - product.price) / mrp) * 100);
            
            // Get image URL - ensure it's valid
            let imageUrl = product.image;
            if (!imageUrl || imageUrl === '' || imageUrl === 'undefined' || imageUrl === '../Images/chair1.jfif') {
                imageUrl = 'https://placehold.co/400x300/e2e8f0/475569?text=' + encodeURIComponent(product.name);
            }
            
            wishlistHTML += `
                <div class="wishlist-item bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300" data-product-id="${product.id}">
                    <div class="relative">
                        <div class="aspect-square bg-gray-100 overflow-hidden">
                            <img src="${imageUrl}" 
                                 alt="${escapeHtml(product.name)}" 
                                 class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                 onerror="this.src='https://placehold.co/400x300/e2e8f0/475569?text=Product'">
                        </div>
                        
                        <!-- Discount Badge -->
                        ${discount > 0 ? `
                            <div class="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                ${discount}% OFF
                            </div>
                        ` : ''}
                        
                        <!-- Customizable Badge -->
                        ${product.isCustomizable ? `
                            <div class="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                                CUSTOMIZABLE
                            </div>
                        ` : ''}
                        
                        <!-- Remove Button -->
                        <button class="remove-wishlist-btn absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-red-500 hover:text-white transition-all duration-300"
                                data-product-id="${product.id}"
                                onclick="removeFromWishlist(${product.id})">
                            <i class="fa-solid fa-trash-can text-sm"></i>
                        </button>
                    </div>
                    
                    <div class="p-4">
                        <!-- Product Name -->
                        <h3 class="font-medium text-gray-800 text-sm mb-2 line-clamp-2 min-h-[40px]">
                            ${escapeHtml(product.name)}
                        </h3>
                        
                        <!-- Price Section -->
                        <div class="mb-3">
                            <div class="flex items-baseline gap-2 flex-wrap">
                                <span class="font-bold text-lg" style="color:#1D3C4A;">₹${product.price.toLocaleString()}</span>
                                <span class="text-xs text-gray-400 line-through">₹${mrp.toLocaleString()}</span>
                                ${discount > 0 ? `
                                    <span class="text-xs font-semibold text-green-600">${discount}% off</span>
                                ` : ''}
                            </div>
                        </div>
                        
                        <!-- Product Details Chips -->
                        <div class="flex flex-wrap gap-1 mb-4">
                            ${product.material ? `
                                <span class="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">
                                    ${escapeHtml(product.material)}
                                </span>
                            ` : ''}
                            ${product.size ? `
                                <span class="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">
                                    ${escapeHtml(product.size)}
                                </span>
                            ` : ''}
                            ${product.color ? `
                                <span class="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">
                                    ${escapeHtml(product.color)}
                                </span>
                            ` : ''}
                            ${product.isCustomizable ? `
                                <span class="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                                    ✨ Customizable
                                </span>
                            ` : ''}
                        </div>
                        
                        <!-- Action Buttons -->
                        <div class="flex gap-2">
                            <button class="move-to-cart-btn flex-1 bg-gray-100 hover:bg-primary text-gray-700 hover:text-white py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2"
                                    onclick="moveToCart(${product.id})">
                                <i class="fa-solid fa-cart-shopping text-xs"></i>
                                Move to Cart
                            </button>
                            <button class="view-details-btn bg-white border border-gray-300 hover:border-primary text-gray-600 hover:text-primary py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-300"
                                    onclick="viewProductDetails(${product.id})">
                                <i class="fa-regular fa-eye"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
        
        // Hide loading, show grid
        if (wishlistLoading) wishlistLoading.classList.add('hidden');
        if (wishlistGrid) {
            wishlistGrid.innerHTML = wishlistHTML;
            wishlistGrid.classList.remove('hidden');
        }
        if (emptyState) emptyState.classList.add('hidden');
        
        isInitialized = true;
        
    } catch (error) {
        console.error("[Wishlist] Error rendering wishlist:", error);
        showFallbackMessage();
    }
}

/**
 * Show empty state
 */
function showEmptyState() {
    if (wishlistLoading) wishlistLoading.classList.add('hidden');
    if (wishlistGrid) wishlistGrid.classList.add('hidden');
    if (emptyState) emptyState.classList.remove('hidden');
    if (moveAllContainer) moveAllContainer.classList.add('hidden');
    if (wishlistCountDisplay) wishlistCountDisplay.textContent = '0';
}

/**
 * Show fallback message
 */
function showFallbackMessage() {
    if (wishlistLoading) wishlistLoading.classList.add('hidden');
    if (wishlistGrid) wishlistGrid.classList.add('hidden');
    
    if (emptyState) {
        emptyState.classList.remove('hidden');
        const emptyStateDiv = emptyState.querySelector('div');
        if (emptyStateDiv && !emptyStateDiv.querySelector('.retry-button')) {
            const retryButton = document.createElement('button');
            retryButton.innerText = 'Retry Loading Wishlist';
            retryButton.className = 'mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition';
            retryButton.onclick = () => {
                initAttempts = 0;
                initWishlistPage();
            };
            retryButton.classList.add('retry-button');
            emptyStateDiv.appendChild(retryButton);
        }
    }
    
    if (moveAllContainer) moveAllContainer.classList.add('hidden');
}

/**
 * Move product to cart
 */
window.moveToCart = function(productId) {
    try {
        const product = productsData.find(p => p.id === productId);
        
        if (!product) {
            console.error("[Wishlist] Product not found:", productId);
            showToast('Product details not found', 'error');
            return;
        }
        
        // Create product with proper ID structure
        const cartProduct = {
            id: product.id,
            productId: product.id,
            name: product.name,
            productName: product.name,
            price: product.price,
            unitPrice: product.price,
            image: product.image,
            quantity: 1,
            material: product.material,
            color: product.color,
            size: product.size,
            sku: `SKU-${product.id}`,
            selectedColor: product.color,
            selectedSize: product.size
        };
        
        if (wishlistService && typeof wishlistService.addToCart === 'function') {
            const result = wishlistService.addToCart(cartProduct, 1);
            if (result && result.success) {
                showToast('Added to cart!', 'success');
                removeFromWishlist(productId);
            } else {
                showToast(result?.message || 'Error adding to cart', 'error');
            }
        } else {
            // Fallback: use localStorage directly
            let cart = JSON.parse(localStorage.getItem('artezocart')) || { items: [], total: 0, count: 0 };
            const existingItem = cart.items.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity = (existingItem.quantity || 1) + 1;
            } else {
                cart.items.push(cartProduct);
            }
            
            cart.total = cart.items.reduce((sum, item) => sum + (item.unitPrice || item.price || 0) * (item.quantity || 1), 0);
            cart.count = cart.items.reduce((sum, item) => sum + (item.quantity || 1), 0);
            
            localStorage.setItem('artezocart', JSON.stringify(cart));
            showToast('Added to cart!', 'success');
            removeFromWishlist(productId);
        }
        
    } catch (error) {
        console.error("[Wishlist] Error moving to cart:", error);
        showToast('Error moving to cart', 'error');
    }
};

/**
 * Remove product from wishlist
 */
window.removeFromWishlist = function(productId) {
    try {
        // Show animation on the item
        const wishlistItem = document.querySelector(`.wishlist-item[data-product-id="${productId}"]`);
        if (wishlistItem) {
            wishlistItem.style.opacity = '0.5';
            wishlistItem.style.transform = 'scale(0.95)';
        }
        
        // Remove from service
        if (wishlistService && typeof wishlistService.removeFromWishlist === 'function') {
            wishlistService.removeFromWishlist(productId);
        } else {
            // Fallback: remove from localStorage directly
            let wishlist = JSON.parse(localStorage.getItem('artezowishlist')) || [];
            wishlist = wishlist.filter(id => id !== productId);
            localStorage.setItem('artezowishlist', JSON.stringify(wishlist));
        }
        
        showToast('Removed from wishlist', 'info');
        
        // Reload wishlist after a short delay
        setTimeout(() => {
            loadWishlistIds();
        }, 300);
        
    } catch (error) {
        console.error("[Wishlist] Error removing from wishlist:", error);
        showToast('Error removing from wishlist', 'error');
        
        setTimeout(() => {
            loadWishlistIds();
        }, 500);
    }
};

/**
 * Move all items to cart
 */
window.moveAllToCart = function() {
    try {
        // Get all wishlist items
        const ids = wishlistIds.length > 0 ? wishlistIds : 
                   (wishlistService ? wishlistService.getWishlistItems() : 
                   (JSON.parse(localStorage.getItem('artezowishlist')) || []));
        
        if (!ids || ids.length === 0) {
            showToast('No items in wishlist', 'info');
            return;
        }
        
        if (moveAllButton) {
            moveAllButton.disabled = true;
            moveAllButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Moving...';
        }
        
        let addedCount = 0;
        
        ids.forEach(productId => {
            const product = productsData.find(p => p.id === productId);
            if (product) {
                const cartProduct = {
                    id: product.id,
                    productId: product.id,
                    name: product.name,
                    productName: product.name,
                    price: product.price,
                    unitPrice: product.price,
                    image: product.image,
                    quantity: 1,
                    material: product.material,
                    color: product.color,
                    size: product.size
                };
                
                if (wishlistService && typeof wishlistService.addToCart === 'function') {
                    wishlistService.addToCart(cartProduct, 1);
                } else {
                    let cart = JSON.parse(localStorage.getItem('artezocart')) || { items: [], total: 0, count: 0 };
                    const existingItem = cart.items.find(item => item.id === productId);
                    
                    if (existingItem) {
                        existingItem.quantity = (existingItem.quantity || 1) + 1;
                    } else {
                        cart.items.push(cartProduct);
                    }
                    
                    cart.total = cart.items.reduce((sum, item) => sum + (item.unitPrice || item.price || 0) * (item.quantity || 1), 0);
                    cart.count = cart.items.reduce((sum, item) => sum + (item.quantity || 1), 0);
                    
                    localStorage.setItem('artezocart', JSON.stringify(cart));
                }
                addedCount++;
            }
        });
        
        // Clear wishlist after moving all
        if (wishlistService && typeof wishlistService.clearWishlist === 'function') {
            wishlistService.clearWishlist();
        } else {
            localStorage.setItem('artezowishlist', JSON.stringify([]));
        }
        
        showToast(`Moved ${addedCount} item(s) to cart!`, 'success');
        
        setTimeout(() => {
            loadWishlistIds();
        }, 500);
        
    } catch (error) {
        console.error("[Wishlist] Error moving all to cart:", error);
        showToast('Error moving items to cart', 'error');
    } finally {
        if (moveAllButton) {
            moveAllButton.disabled = false;
            moveAllButton.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Move All to Cart';
        }
    }
};

/**
 * View product details
 */
window.viewProductDetails = function(productId) {
    const product = productsData.find(p => p.id === productId);
    if (product && product.isCustomizable) {
        // For customizable products, open customization overlay
        if (window.openCustomizationOverlay) {
            window.openCustomizationOverlay(productId);
        } else {
            window.location.href = `../Product-Details/product-detail.html?id=${productId}`;
        }
    } else {
        window.location.href = `../Product-Details/product-detail.html?id=${productId}`;
    }
};

/**
 * Show toast notification
 */
function showToast(message, type = 'success') {
    let toast = document.getElementById('toast-notification');
    
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        toast.className = 'fixed bottom-6 right-6 transform translate-y-0 transition-all duration-300 z-50';
        document.body.appendChild(toast);
    }
    
    const bgColor = type === 'success' ? 'bg-green-500' : (type === 'error' ? 'bg-red-500' : 'bg-primary');
    const icon = type === 'success' ? 'fa-check-circle' : (type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle');
    
    toast.innerHTML = `
        <div class="${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 min-w-[200px] animate-slide-in">
            <i class="fa-solid ${icon}"></i>
            <span class="text-sm">${escapeHtml(message)}</span>
        </div>
    `;
    
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('opacity-0');
        setTimeout(() => {
            toast.innerHTML = '';
            toast.classList.remove('opacity-0');
        }, 300);
    }, 3000);
}

/**
 * Escape HTML
 */
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Add animation styles
 */
function addAnimationStyles() {
    if (document.getElementById('wishlist-animation-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'wishlist-animation-styles';
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        .animate-slide-in {
            animation: slideIn 0.3s ease-out;
        }
        .wishlist-item {
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

addAnimationStyles();

// Set up move all button listener
if (moveAllButton) {
    moveAllButton.addEventListener('click', moveAllToCart);
}

// Listen for storage events
window.addEventListener('storage', function(e) {
    if (e.key === 'artezowishlist') {
        console.log("[Wishlist] Storage event detected, reloading");
        loadWishlistIds();
    }
});

// Listen for custom events
window.addEventListener('wishlistUpdated', function() {
    console.log("[Wishlist] Wishlist updated event received");
    loadWishlistIds();
});

// Listen for cart service ready event
window.addEventListener('cartServiceReady', function() {
    console.log("[Wishlist] Cart service ready event received");
    initAttempts = 0;
    initWishlistPage();
});

// Export functions
window.initWishlistPage = initWishlistPage;
window.loadWishlistIds = loadWishlistIds;
window.removeFromWishlist = removeFromWishlist;
window.moveToCart = moveToCart;
window.moveAllToCart = moveAllToCart;
window.viewProductDetails = viewProductDetails;

console.log("[Wishlist] Script loaded");