/**
 * Cart and Wishlist Service - Complete Fixed Version with Custom Product Support
 * Handles all cart and wishlist operations with localStorage
 */

class CartWishlistService {
    constructor() {
        // Initialize with default values
        this.cart = { items: [], total: 0, count: 0 };
        this.wishlist = [];
        this.listeners = {
            cart: [],
            wishlist: []
        };
        this.isInitialized = false;
        this.isBackendAvailable = () => false;
        
        // Initialize the service
        this.init();
    }
    
    /**
     * Initialize the service
     */
    init() {
        try {
            if (this.isInitialized) return;
            
            this.initializeStorage();
            this.loadCart();
            this.loadWishlist();
            
            this.isInitialized = true;
            
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('cartServiceReady'));
                window.dispatchEvent(new CustomEvent('cartWishlistServiceReady'));
            }
            
            console.log("[CartWishlistService] Initialized successfully");
        } catch (error) {
            console.error("[CartWishlistService] Error during initialization:", error);
            this.isInitialized = false;
        }
    }
    
    /**
     * Initialize and sanitize localStorage data
     */
    initializeStorage() {
        try {
            let storedCart = localStorage.getItem("artezocart");
            if (!storedCart) {
                const defaultCart = { items: [], total: 0, count: 0 };
                localStorage.setItem("artezocart", JSON.stringify(defaultCart));
            } else {
                try {
                    const parsed = JSON.parse(storedCart);
                    if (!parsed || typeof parsed !== 'object') {
                        const defaultCart = { items: [], total: 0, count: 0 };
                        localStorage.setItem("artezocart", JSON.stringify(defaultCart));
                    } else if (!parsed.items || !Array.isArray(parsed.items)) {
                        const defaultCart = { items: [], total: 0, count: 0 };
                        localStorage.setItem("artezocart", JSON.stringify(defaultCart));
                    }
                } catch (e) {
                    console.error("Error parsing cart storage:", e);
                    const defaultCart = { items: [], total: 0, count: 0 };
                    localStorage.setItem("artezocart", JSON.stringify(defaultCart));
                }
            }
            
            let storedWishlist = localStorage.getItem("artezowishlist");
            if (!storedWishlist) {
                localStorage.setItem("artezowishlist", JSON.stringify([]));
            } else {
                try {
                    const parsed = JSON.parse(storedWishlist);
                    if (!Array.isArray(parsed)) {
                        localStorage.setItem("artezowishlist", JSON.stringify([]));
                    }
                } catch (e) {
                    console.error("Error parsing wishlist storage:", e);
                    localStorage.setItem("artezowishlist", JSON.stringify([]));
                }
            }
        } catch (error) {
            console.error("[CartWishlistService] Error in initializeStorage:", error);
            localStorage.setItem("artezocart", JSON.stringify({ items: [], total: 0, count: 0 }));
            localStorage.setItem("artezowishlist", JSON.stringify([]));
        }
    }
    
    /**
     * Load cart from localStorage
     */
    loadCart() {
        try {
            const storedCart = localStorage.getItem("artezocart");
            if (storedCart) {
                const parsed = JSON.parse(storedCart);
                if (parsed && typeof parsed === 'object' && Array.isArray(parsed.items)) {
                    this.cart = parsed;
                } else {
                    console.warn("Invalid cart structure, resetting");
                    this.cart = { items: [], total: 0, count: 0 };
                    this.saveCart();
                }
            } else {
                this.cart = { items: [], total: 0, count: 0 };
                this.saveCart();
            }
            
            this.updateCartTotals();
            this.notifyCartListeners();
            
            console.log("[CartWishlistService] Cart loaded:", this.cart.items.length, "items");
        } catch (error) {
            console.error("[CartWishlistService] Error loading cart:", error);
            this.cart = { items: [], total: 0, count: 0 };
            this.saveCart();
            this.notifyCartListeners();
        }
    }
    
    /**
     * Save cart to localStorage
     */
    saveCart() {
        try {
            const cartData = {
                items: Array.isArray(this.cart.items) ? this.cart.items : [],
                total: this.cart.total || 0,
                count: this.cart.count || 0
            };
            localStorage.setItem("artezocart", JSON.stringify(cartData));
            return true;
        } catch (error) {
            console.error("[CartWishlistService] Error saving cart:", error);
            return false;
        }
    }
    
    /**
     * Update cart totals based on current items - FIXED for customized products
     */
    updateCartTotals() {
        try {
            if (!Array.isArray(this.cart.items)) {
                this.cart.items = [];
            }
            
            let total = 0;
            let count = 0;
            
            for (let i = 0; i < this.cart.items.length; i++) {
                const item = this.cart.items[i];
                if (item && typeof item === 'object') {
                    // CRITICAL: Priority order for price: finalPrice (for customized) > unitPrice > price
                    let price = 0;
                    
                    if (item.finalPrice && item.finalPrice > 0) {
                        price = item.finalPrice;
                    } else if (item.unitPrice && item.unitPrice > 0) {
                        price = item.unitPrice;
                    } else if (item.price && item.price > 0) {
                        price = item.price;
                    }
                    
                    const quantity = item.quantity || 1;
                    const subtotal = price * quantity;
                    total += subtotal;
                    count += quantity;
                    
                    console.log(`[CartWishlistService] Item: ${item.name} - Price: ₹${price} x ${quantity} = ₹${subtotal}`);
                }
            }
            
            this.cart.total = total;
            this.cart.count = count;
            
            console.log(`[CartWishlistService] Cart totals updated - Total: ₹${total}, Count: ${count}`);
            
            this.saveCart();
            return true;
        } catch (error) {
            console.error("[CartWishlistService] Error updating cart totals:", error);
            this.cart.total = 0;
            this.cart.count = 0;
            return false;
        }
    }
    
    /**
     * Load wishlist from localStorage
     */
    loadWishlist() {
        try {
            const storedWishlist = localStorage.getItem("artezowishlist");
            if (storedWishlist) {
                const parsed = JSON.parse(storedWishlist);
                if (Array.isArray(parsed)) {
                    this.wishlist = parsed;
                } else {
                    console.warn("Invalid wishlist structure, resetting");
                    this.wishlist = [];
                    this.saveWishlist();
                }
            } else {
                this.wishlist = [];
                this.saveWishlist();
            }
            
            this.notifyWishlistListeners();
            console.log("[CartWishlistService] Wishlist loaded:", this.wishlist.length, "items");
        } catch (error) {
            console.error("[CartWishlistService] Error loading wishlist:", error);
            this.wishlist = [];
            this.saveWishlist();
            this.notifyWishlistListeners();
        }
    }
    
    /**
     * Save wishlist to localStorage
     */
    saveWishlist() {
        try {
            localStorage.setItem("artezowishlist", JSON.stringify(Array.isArray(this.wishlist) ? this.wishlist : []));
            return true;
        } catch (error) {
            console.error("[CartWishlistService] Error saving wishlist:", error);
            return false;
        }
    }
    
    /**
     * Add item to cart - FIXED for customized products
     * @param {Object} product - Product object
     * @param {number} quantity - Quantity to add
     */
    addToCart(product, quantity = 1) {
        try {
            if (!product) {
                console.error("[CartWishlistService] Invalid product for cart");
                return { success: false, message: "Invalid product" };
            }
            
            // Get product ID
            const productId = product.id || product.productId;
            
            if (!productId) {
                console.error("[CartWishlistService] Product has no ID", product);
                return { success: false, message: "Product has no ID" };
            }
            
            if (!Array.isArray(this.cart.items)) {
                this.cart.items = [];
            }
            
            // CRITICAL: Determine the correct price
            // For customized products, use finalPrice
            // For regular products, use unitPrice or price
            let finalPrice = product.finalPrice || product.unitPrice || product.price || 0;
            
            // Store base price separately for customized products
            const basePrice = product.basePrice || product.price || finalPrice;
            
            const productName = product.name || product.productName || product.titleName || `Product ${productId}`;
            const productImage = product.image || product.mainImage || "../Images/placeholder.jpg";
            
            // Check if product already exists in cart
            let existingIndex = -1;
            
            for (let i = 0; i < this.cart.items.length; i++) {
                const item = this.cart.items[i];
                const itemId = item.id || item.productId;
                
                if (itemId === productId) {
                    // For customized products, check if customization is the same
                    if (product.isCustomized && item.isCustomized) {
                        if (JSON.stringify(item.customization) === JSON.stringify(product.customization)) {
                            existingIndex = i;
                            break;
                        }
                    } else if (!product.isCustomized && !item.isCustomized) {
                        // For regular products with variants
                        if (product.variantId && item.variantId) {
                            if (product.variantId === item.variantId) {
                                existingIndex = i;
                                break;
                            }
                        } else {
                            existingIndex = i;
                            break;
                        }
                    }
                }
            }
            
            if (existingIndex !== -1) {
                // Update quantity for existing item
                const existingItem = this.cart.items[existingIndex];
                existingItem.quantity = (existingItem.quantity || 1) + quantity;
                console.log("[CartWishlistService] Updated existing item quantity:", existingItem.quantity);
            } else {
                // Create new item with all properties
                const newItem = {
                    id: productId,
                    productId: productId,
                    name: productName,
                    productName: productName,
                    titleName: productName,
                    // Store both price and finalPrice
                    price: finalPrice,
                    unitPrice: finalPrice,
                    finalPrice: finalPrice,
                    basePrice: basePrice,
                    quantity: quantity,
                    image: productImage,
                    selectedColor: product.selectedColor || product.color || "",
                    color: product.color || product.selectedColor || "",
                    selectedSize: product.selectedSize || product.size || "",
                    size: product.size || product.selectedSize || "",
                    sku: product.sku || `SKU-${productId}`,
                    variantId: product.variantId || null,
                    // Customization properties
                    isCustomized: product.isCustomized || false,
                    customization: product.customization || null,
                    mrpPrice: product.mrpPrice || product.mrp || Math.round(finalPrice * 1.35)
                };
                
                this.cart.items.push(newItem);
                console.log("[CartWishlistService] Added new item to cart:", newItem.name, "Final Price:", newItem.finalPrice);
            }
            
            // Update totals
            this.updateCartTotals();
            
            // Notify listeners
            this.notifyCartListeners();
            
            // Save to localStorage
            this.saveCart();
            
            return { success: true, message: "Added to cart", count: this.cart.count, total: this.cart.total };
        } catch (error) {
            console.error("[CartWishlistService] Error adding to cart:", error);
            return { success: false, message: error.message };
        }
    }
    
    /**
     * Remove item from cart
     * @param {number} productId - Product ID to remove
     */
    removeFromCart(productId) {
        try {
            if (!Array.isArray(this.cart.items)) {
                this.cart.items = [];
                return { success: false, message: "Cart is empty" };
            }
            
            const originalLength = this.cart.items.length;
            this.cart.items = this.cart.items.filter(item => 
                item && (item.id !== productId && item.productId !== productId)
            );
            
            if (originalLength === this.cart.items.length) {
                return { success: false, message: "Item not found in cart" };
            }
            
            this.updateCartTotals();
            this.notifyCartListeners();
            
            return { success: true, message: "Removed from cart" };
        } catch (error) {
            console.error("[CartWishlistService] Error removing from cart:", error);
            return { success: false, message: error.message };
        }
    }
    
    /**
     * Update cart item quantity
     * @param {number} productId - Product ID
     * @param {number} quantity - New quantity
     */
    updateCartQuantity(productId, quantity) {
        try {
            if (!Array.isArray(this.cart.items)) {
                this.cart.items = [];
                return { success: false, message: "Cart is empty" };
            }
            
            const itemIndex = this.cart.items.findIndex(item => 
                item && (item.id === productId || item.productId === productId)
            );
            
            if (itemIndex === -1) {
                return { success: false, message: "Item not found in cart" };
            }
            
            if (quantity <= 0) {
                return this.removeFromCart(productId);
            }
            
            this.cart.items[itemIndex].quantity = quantity;
            this.updateCartTotals();
            this.notifyCartListeners();
            
            return { success: true, message: "Quantity updated" };
        } catch (error) {
            console.error("[CartWishlistService] Error updating cart quantity:", error);
            return { success: false, message: error.message };
        }
    }
    
    /**
     * Clear entire cart
     */
    clearCart() {
        try {
            this.cart.items = [];
            this.cart.total = 0;
            this.cart.count = 0;
            this.saveCart();
            this.notifyCartListeners();
            return { success: true, message: "Cart cleared" };
        } catch (error) {
            console.error("[CartWishlistService] Error clearing cart:", error);
            return { success: false, message: error.message };
        }
    }
    
    /**
     * Get cart items
     * @returns {Array} Cart items
     */
    getCartItems() {
        return Array.isArray(this.cart.items) ? [...this.cart.items] : [];
    }
    
    /**
     * Get cart total
     * @returns {number} Cart total
     */
    getCartTotal() {
        return this.cart.total || 0;
    }
    
    /**
     * Get cart item count
     * @returns {number} Cart item count
     */
    getCartCount() {
        return this.cart.count || 0;
    }
    
    /**
     * Check if product is in cart
     * @param {number} productId - Product ID
     * @returns {boolean} True if in cart
     */
    isInCart(productId) {
        return Array.isArray(this.cart.items) && this.cart.items.some(item => 
            item && (item.id === productId || item.productId === productId)
        );
    }
    
    /**
     * Add to wishlist
     * @param {Object} product - Product object
     */
    addToWishlist(product) {
        try {
            if (!product) {
                return { success: false, message: "Invalid product" };
            }
            
            const productId = product.id || product.productId;
            
            if (!productId) {
                return { success: false, message: "Product has no ID" };
            }
            
            if (!Array.isArray(this.wishlist)) {
                this.wishlist = [];
            }
            
            if (!this.wishlist.includes(productId)) {
                this.wishlist.push(productId);
                this.saveWishlist();
                this.notifyWishlistListeners();
                return { success: true, message: "Added to wishlist" };
            }
            return { success: false, message: "Already in wishlist" };
        } catch (error) {
            console.error("[CartWishlistService] Error adding to wishlist:", error);
            return { success: false, message: error.message };
        }
    }
    
    /**
     * Remove from wishlist
     * @param {number} productId - Product ID
     */
    removeFromWishlist(productId) {
        try {
            if (!Array.isArray(this.wishlist)) {
                this.wishlist = [];
                return { success: false, message: "Wishlist is empty" };
            }
            
            const originalLength = this.wishlist.length;
            this.wishlist = this.wishlist.filter(id => id !== productId);
            
            if (originalLength === this.wishlist.length) {
                return { success: false, message: "Item not found in wishlist" };
            }
            
            this.saveWishlist();
            this.notifyWishlistListeners();
            
            return { success: true, message: "Removed from wishlist" };
        } catch (error) {
            console.error("[CartWishlistService] Error removing from wishlist:", error);
            return { success: false, message: error.message };
        }
    }
    
    /**
     * Toggle wishlist item
     * @param {Object} product - Product object
     * @returns {boolean} New wishlist status
     */
    toggleWishlist(product) {
        const productId = product.id || product.productId;
        
        if (this.isInWishlist(productId)) {
            this.removeFromWishlist(productId);
            return false;
        } else {
            this.addToWishlist(product);
            return true;
        }
    }
    
    /**
     * Check if product is in wishlist
     * @param {number} productId - Product ID
     * @returns {boolean} True if in wishlist
     */
    isInWishlist(productId) {
        return Array.isArray(this.wishlist) && this.wishlist.includes(productId);
    }
    
    /**
     * Get wishlist items
     * @returns {Array} Wishlist items (IDs)
     */
    getWishlistItems() {
        return Array.isArray(this.wishlist) ? [...this.wishlist] : [];
    }
    
    /**
     * Get wishlist count
     * @returns {number} Wishlist count
     */
    getWishlistCount() {
        return Array.isArray(this.wishlist) ? this.wishlist.length : 0;
    }
    
    /**
     * Clear wishlist
     */
    clearWishlist() {
        try {
            this.wishlist = [];
            this.saveWishlist();
            this.notifyWishlistListeners();
            return { success: true, message: "Wishlist cleared" };
        } catch (error) {
            console.error("[CartWishlistService] Error clearing wishlist:", error);
            return { success: false, message: error.message };
        }
    }
    
    /**
     * Add cart change listener
     * @param {Function} callback - Callback function
     */
    onCartChange(callback) {
        if (typeof callback === 'function') {
            this.listeners.cart.push(callback);
            try {
                callback({
                    items: this.getCartItems(),
                    total: this.getCartTotal(),
                    count: this.getCartCount()
                });
            } catch (error) {
                console.error("[CartWishlistService] Error in initial cart callback:", error);
            }
        }
    }
    
    /**
     * Add wishlist change listener
     * @param {Function} callback - Callback function
     */
    onWishlistChange(callback) {
        if (typeof callback === 'function') {
            this.listeners.wishlist.push(callback);
            try {
                callback({
                    items: this.getWishlistItems(),
                    count: this.getWishlistCount()
                });
            } catch (error) {
                console.error("[CartWishlistService] Error in initial wishlist callback:", error);
            }
        }
    }
    
    /**
     * Notify cart listeners
     */
    notifyCartListeners() {
        const cartData = {
            items: this.getCartItems(),
            total: this.getCartTotal(),
            count: this.getCartCount()
        };
        
        this.listeners.cart.forEach(callback => {
            try {
                callback(cartData);
            } catch (error) {
                console.error("[CartWishlistService] Error in cart listener:", error);
            }
        });
    }
    
    /**
     * Notify wishlist listeners
     */
    notifyWishlistListeners() {
        const wishlistData = {
            items: this.getWishlistItems(),
            count: this.getWishlistCount()
        };
        
        this.listeners.wishlist.forEach(callback => {
            try {
                callback(wishlistData);
            } catch (error) {
                console.error("[CartWishlistService] Error in wishlist listener:", error);
            }
        });
    }
    
    /**
     * Remove all listeners
     */
    removeAllListeners() {
        this.listeners.cart = [];
        this.listeners.wishlist = [];
    }
    
    /**
     * Check if service is ready
     */
    isReady() {
        return this.isInitialized;
    }
    
    /**
     * Reset service
     */
    reset() {
        try {
            this.cart = { items: [], total: 0, count: 0 };
            this.wishlist = [];
            this.saveCart();
            this.saveWishlist();
            this.notifyCartListeners();
            this.notifyWishlistListeners();
            return { success: true, message: "Service reset" };
        } catch (error) {
            console.error("[CartWishlistService] Error resetting service:", error);
            return { success: false, message: error.message };
        }
    }
    
    /**
     * Debug - Log current cart state
     */
    debugCart() {
        console.log("[CartWishlistService] Cart Debug:");
        console.log("  Items:", this.cart.items);
        console.log("  Total:", this.cart.total);
        console.log("  Count:", this.cart.count);
        return this.cart;
    }
}

// Create and export a single instance with safety checks
let cartWishlistServiceInstance = null;
let serviceCreationAttempts = 0;
const MAX_CREATION_ATTEMPTS = 3;

function getCartWishlistService() {
    if (serviceCreationAttempts >= MAX_CREATION_ATTEMPTS) {
        console.warn("[CartWishlistService] Max creation attempts reached, returning fallback service");
        return getFallbackService();
    }
    
    if (!cartWishlistServiceInstance) {
        try {
            serviceCreationAttempts++;
            cartWishlistServiceInstance = new CartWishlistService();
            
            if (!cartWishlistServiceInstance.isReady()) {
                console.warn("[CartWishlistService] Service created but not ready, attempting recovery");
                cartWishlistServiceInstance.reset();
            }
            
            serviceCreationAttempts = 0;
        } catch (error) {
            console.error("[CartWishlistService] Error creating service instance:", error);
            
            if (serviceCreationAttempts >= MAX_CREATION_ATTEMPTS) {
                console.error("[CartWishlistService] Failed to create service after multiple attempts");
                cartWishlistServiceInstance = getFallbackService();
            } else {
                cartWishlistServiceInstance = null;
            }
        }
    }
    
    return cartWishlistServiceInstance || getFallbackService();
}

/**
 * Create a fallback service
 */
function getFallbackService() {
    const fallbackService = {
        cart: { items: [], total: 0, count: 0 },
        wishlist: [],
        isInitialized: true,
        isReady: () => true,
        isBackendAvailable: () => false,
        addToCart: (product, quantity) => {
            console.warn("[CartWishlistService] Fallback: addToCart called", product);
            // Store in localStorage directly as fallback
            try {
                let cart = JSON.parse(localStorage.getItem('artezocart')) || { items: [], total: 0, count: 0 };
                const productId = product.id || product.productId;
                const price = product.finalPrice || product.unitPrice || product.price || 0;
                
                const existingItem = cart.items.find(item => (item.id === productId || item.productId === productId));
                if (existingItem) {
                    existingItem.quantity = (existingItem.quantity || 1) + (quantity || 1);
                } else {
                    cart.items.push({
                        id: productId,
                        productId: productId,
                        name: product.name || product.productName,
                        price: price,
                        unitPrice: price,
                        finalPrice: price,
                        quantity: quantity || 1,
                        image: product.image,
                        isCustomized: product.isCustomized || false,
                        customization: product.customization || null
                    });
                }
                
                cart.total = cart.items.reduce((sum, item) => sum + ((item.finalPrice || item.unitPrice || item.price || 0) * (item.quantity || 1)), 0);
                cart.count = cart.items.reduce((sum, item) => sum + (item.quantity || 1), 0);
                localStorage.setItem('artezocart', JSON.stringify(cart));
                
                return { success: true, message: "Added to cart", count: cart.count, total: cart.total };
            } catch (e) {
                return { success: false, message: e.message };
            }
        },
        removeFromCart: (id) => {
            console.warn("[CartWishlistService] Fallback: removeFromCart called");
            try {
                let cart = JSON.parse(localStorage.getItem('artezocart')) || { items: [], total: 0, count: 0 };
                cart.items = cart.items.filter(item => (item.id !== id && item.productId !== id));
                cart.total = cart.items.reduce((sum, item) => sum + ((item.finalPrice || item.unitPrice || item.price || 0) * (item.quantity || 1)), 0);
                cart.count = cart.items.reduce((sum, item) => sum + (item.quantity || 1), 0);
                localStorage.setItem('artezocart', JSON.stringify(cart));
                return { success: true, message: "Removed from cart" };
            } catch (e) {
                return { success: false, message: e.message };
            }
        },
        updateCartQuantity: (id, qty) => {
            console.warn("[CartWishlistService] Fallback: updateCartQuantity called");
            try {
                let cart = JSON.parse(localStorage.getItem('artezocart')) || { items: [], total: 0, count: 0 };
                const itemIndex = cart.items.findIndex(item => (item.id === id || item.productId === id));
                if (itemIndex !== -1) {
                    cart.items[itemIndex].quantity = qty;
                    cart.total = cart.items.reduce((sum, item) => sum + ((item.finalPrice || item.unitPrice || item.price || 0) * (item.quantity || 1)), 0);
                    cart.count = cart.items.reduce((sum, item) => sum + (item.quantity || 1), 0);
                    localStorage.setItem('artezocart', JSON.stringify(cart));
                }
                return { success: true, message: "Quantity updated" };
            } catch (e) {
                return { success: false, message: e.message };
            }
        },
        clearCart: () => {
            console.warn("[CartWishlistService] Fallback: clearCart called");
            localStorage.setItem('artezocart', JSON.stringify({ items: [], total: 0, count: 0 }));
            return { success: true, message: "Cart cleared" };
        },
        getCartItems: () => {
            const cart = JSON.parse(localStorage.getItem('artezocart')) || { items: [] };
            return cart.items;
        },
        getCartTotal: () => {
            const cart = JSON.parse(localStorage.getItem('artezocart')) || { total: 0 };
            return cart.total;
        },
        getCartCount: () => {
            const cart = JSON.parse(localStorage.getItem('artezocart')) || { count: 0 };
            return cart.count;
        },
        isInCart: () => false,
        addToWishlist: (product) => {
            console.warn("[CartWishlistService] Fallback: addToWishlist called");
            return { success: true, message: "Added to wishlist (fallback)" };
        },
        removeFromWishlist: (id) => {
            console.warn("[CartWishlistService] Fallback: removeFromWishlist called");
            return { success: true, message: "Removed from wishlist (fallback)" };
        },
        toggleWishlist: (product) => {
            console.warn("[CartWishlistService] Fallback: toggleWishlist called");
            return true;
        },
        isInWishlist: (id) => false,
        getWishlistItems: () => [],
        getWishlistCount: () => 0,
        clearWishlist: () => {
            console.warn("[CartWishlistService] Fallback: clearWishlist called");
            return { success: true, message: "Wishlist cleared (fallback)" };
        },
        onCartChange: (cb) => {
            if (typeof cb === 'function') cb({ items: [], total: 0, count: 0 });
        },
        onWishlistChange: (cb) => {
            if (typeof cb === 'function') cb({ items: [], count: 0 });
        },
        removeAllListeners: () => {},
        reset: () => ({ success: true, message: "Reset (fallback)" }),
        debugCart: () => ({ items: [], total: 0, count: 0 })
    };
    
    return fallbackService;
}

// Make available globally
if (typeof window !== 'undefined') {
    if (!window.CartWishlistService) {
        window.CartWishlistService = CartWishlistService;
    }
    if (!window.getCartWishlistService) {
        window.getCartWishlistService = getCartWishlistService;
    }
    
    if (!window.cartWishlistService) {
        window.cartWishlistService = getCartWishlistService();
    }
    
    if (!window._cartServiceLogged) {
        console.log("[CartWishlistService] Service loaded and available globally");
        window._cartServiceLogged = true;
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CartWishlistService, getCartWishlistService };
}