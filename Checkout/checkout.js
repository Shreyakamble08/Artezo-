// ============================================================================
// CHECKOUT PAGE - Complete JavaScript
// ============================================================================

let currentStep = 1;
const totalSteps = 4;
let checkoutData = {
    address: {},
    shipping: {},
    payment: {},
    cart: {},
};

// Shipping options
const shippingOptions = [
    {
        id: 'standard',
        name: 'Standard Delivery',
        description: 'Delivery in 5-7 business days',
        price: 0,
        icon: 'fa-truck'
    },
    {
        id: 'express',
        name: 'Express Delivery',
        description: 'Delivery in 2-3 business days',
        price: 99,
        icon: 'fa-bolt'
    },
    {
        id: 'overnight',
        name: 'Overnight Delivery',
        description: 'Next day delivery',
        price: 299,
        icon: 'fa-rocket'
    }
];

// Promo codes
const promoCodes = {
    'SAVE10': { discount: 0.10, description: '10% off on orders above ₹500' },
    'WELCOME20': { discount: 0.20, description: '20% off on first order' },
    'ARTEZO5': { discount: 0.05, description: '5% off on all orders' },
    'SHIP50': { discount: 0, shipping: 50, description: '₹50 off on shipping' },
};

// ============================================================================
// INITIALIZATION
// ============================================================================

function initCheckout() {
    console.log('[Checkout] Initializing...');
    
    // Load cart data
    loadCartData();
    
    // Setup event listeners
    setupEventListeners();
    
    // Render shipping options
    renderShippingOptions();
    
    // Render order summary
    updateOrderSummary();
    
    // Set initial step
    goToStep(1);
    
    console.log('[Checkout] Ready!', checkoutData);
}

function setupEventListeners() {
    // Payment method change
    document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const cardDetails = document.getElementById('card-details');
            if (e.target.value === 'card') {
                cardDetails.style.display = 'block';
            } else {
                cardDetails.style.display = 'none';
            }
        });
    });

    // Auto-format card number
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', (e) => {
            const value = e.target.value.replace(/\s/g, '');
            const formatted = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formatted;
        });
    }

    // Auto-format card expiry
    const cardExpiryInput = document.getElementById('cardExpiry');
    if (cardExpiryInput) {
        cardExpiryInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }

    // Only allow numbers in CVV
    const cardCVVInput = document.getElementById('cardCVV');
    if (cardCVVInput) {
        cardCVVInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }

    // Only allow numbers in phone
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }
}

// ============================================================================
// CART DATA
// ============================================================================

function loadCartData() {
    if (!window.cartWishlistService) {
        console.error('[Checkout] Cart service not loaded');
        return;
    }

    checkoutData.cart = window.cartWishlistService.cart;
    console.log('[Checkout] Cart data loaded:', checkoutData.cart);

    if (!checkoutData.cart.items || checkoutData.cart.items.length === 0) {
        showAlert('Your cart is empty!', 'error');
        setTimeout(() => {
            window.location.href = '/Cart/cart.html';
        }, 2000);
    }
}

function updateOrderSummary() {
    const itemsContainer = document.getElementById('order-items');
    const cart = checkoutData.cart;

    let html = '';
    if (cart.items && cart.items.length > 0) {
        cart.items.forEach(item => {
            html += `
                <div class="product-item-checkout">
                    <img src="${item.image || '../Images/placeholder.jpg'}" alt="${item.titleName}" 
                         onerror="this.src='../Images/placeholder.jpg'">
                    <div class="product-item-checkout-info">
                        <div class="product-item-checkout-name">${item.titleName}</div>
                        <div class="product-item-checkout-meta">
                            ${item.selectedColor ? item.selectedColor : ''}
                            ${item.selectedSize ? ' • ' + item.selectedSize : ''}
                        </div>
                        <div class="product-item-checkout-meta">Qty: ${item.quantity}</div>
                    </div>
                    <div class="product-item-checkout-price">
                        ₹${(item.itemTotal || item.unitPrice * item.quantity).toLocaleString()}
                    </div>
                </div>
            `;
        });
    }

    itemsContainer.innerHTML = html;
    updatePricingBreakdown();
}

function updatePricingBreakdown() {
    const cart = checkoutData.cart;
    const shipping = checkoutData.shipping;
    
    const subtotal = cart.totalAmount || 0;
    const shippingCost = shipping.price || 0;
    const discount = checkoutData.promoDiscount || 0;
    const tax = Math.round((subtotal - discount + shippingCost) * 0.18); // 18% GST
    const total = subtotal - discount + shippingCost + tax;

    document.getElementById('subtotal').textContent = `₹${subtotal.toLocaleString()}`;
    document.getElementById('discount').textContent = `-₹${discount.toLocaleString()}`;
    document.getElementById('shipping').textContent = `₹${shippingCost.toLocaleString()}`;
    document.getElementById('tax').textContent = `₹${tax.toLocaleString()}`;
    document.getElementById('total-amount').textContent = `₹${total.toLocaleString()}`;
}

// ============================================================================
// SHIPPING OPTIONS
// ============================================================================

function renderShippingOptions() {
    const container = document.getElementById('shipping-options');
    let html = '';

    shippingOptions.forEach(option => {
        const isChecked = checkoutData.shipping.id === option.id ? 'checked' : '';
        html += `
            <label class="radio-item" onclick="selectShipping('${option.id}')">
                <input type="radio" name="shipping" value="${option.id}" ${isChecked}>
                <div class="flex-1">
                    <div class="font-medium flex items-center gap-2">
                        <i class="fa-solid ${option.icon}"></i>
                        ${option.name}
                    </div>
                    <div class="text-xs text-gray-500 mt-1">${option.description}</div>
                </div>
                <div class="font-semibold">
                    ${option.price === 0 ? 'FREE' : '₹' + option.price}
                </div>
            </label>
        `;
    });

    container.innerHTML = html;

    // Select first option by default
    if (!checkoutData.shipping.id) {
        selectShipping(shippingOptions[0].id);
    }
}

function selectShipping(shippingId) {
    const option = shippingOptions.find(o => o.id === shippingId);
    if (option) {
        checkoutData.shipping = option;
        document.querySelector(`input[value="${shippingId}"]`).checked = true;
        updatePricingBreakdown();
        console.log('[Checkout] Shipping selected:', option);
    }
}

// ============================================================================
// STEP NAVIGATION
// ============================================================================

function goToStep(step) {
    if (step < 1 || step > totalSteps) return;

    // Hide all steps
    document.querySelectorAll('.checkout-step').forEach(el => {
        el.classList.add('hidden');
    });

    // Show current step
    const stepElement = document.getElementById(`checkout-step-${step}`);
    if (stepElement) {
        stepElement.classList.remove('hidden');
    }

    // Update step indicator
    updateStepIndicator(step);

    // Update buttons
    updateNavigationButtons(step);

    currentStep = step;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateStepIndicator(step) {
    for (let i = 1; i <= totalSteps; i++) {
        const stepEl = document.getElementById(`step-${i}`);
        const lineEl = document.getElementById(`line-${i}`);

        if (stepEl) {
            stepEl.classList.remove('active', 'completed');
            if (i === step) {
                stepEl.classList.add('active');
            } else if (i < step) {
                stepEl.classList.add('completed');
            }
        }

        if (lineEl && i < step) {
            lineEl.classList.add('!bg-green-600');
        } else if (lineEl) {
            lineEl.classList.remove('!bg-green-600');
        }
    }
}

function updateNavigationButtons(step) {
    const btnBack = document.getElementById('btn-back');
    const btnNext = document.getElementById('btn-next');

    if (step === 1) {
        btnBack.classList.add('hidden');
    } else {
        btnBack.classList.remove('hidden');
    }

    if (step === totalSteps) {
        btnNext.innerHTML = '<i class="fa-solid fa-check"></i> Place Order';
        btnNext.classList.add('!bg-green-600');
    } else {
        btnNext.innerHTML = 'Continue <i class="fa-solid fa-chevron-right"></i>';
        btnNext.classList.remove('!bg-green-600');
    }
}

function previousStep() {
    if (currentStep > 1) {
        goToStep(currentStep - 1);
    }
}

function nextStep() {
    if (currentStep === totalSteps) {
        placeOrder();
    } else {
        // Validate current step
        if (validateStep(currentStep)) {
            if (currentStep === 1) {
                saveAddressData();
                populateReviewAddress();
            } else if (currentStep === 2) {
                populateReviewShipping();
            } else if (currentStep === 3) {
                populateReviewPayment();
            }
            goToStep(currentStep + 1);
        }
    }
}

// ============================================================================
// VALIDATION
// ============================================================================

function validateStep(step) {
    clearAllErrors();

    if (step === 1) {
        return validateAddress();
    } else if (step === 2) {
        return validateShipping();
    } else if (step === 3) {
        return validatePayment();
    } else if (step === 4) {
        return validateReview();
    }

    return true;
}

function validateAddress() {
    const fields = ['fullName', 'email', 'phone', 'street', 'city', 'state', 'postalCode', 'country'];
    let isValid = true;

    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            showError(fieldId, 'This field is required');
            isValid = false;
        }
    });

    // Validate email
    const email = document.getElementById('email').value;
    if (email && !isValidEmail(email)) {
        showError('email', 'Please enter a valid email');
        isValid = false;
    }

    // Validate phone
    const phone = document.getElementById('phone').value;
    if (phone && phone.length < 10) {
        showError('phone', 'Phone number must be at least 10 digits');
        isValid = false;
    }

    return isValid;
}

function validateShipping() {
    const selected = document.querySelector('input[name="shipping"]:checked');
    if (!selected) {
        showAlert('Please select a shipping method', 'error');
        return false;
    }
    return true;
}

function validatePayment() {
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    if (paymentMethod === 'card') {
        const cardFields = ['cardNumber', 'cardName', 'cardExpiry', 'cardCVV'];
        let isValid = true;

        cardFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!field.value.trim()) {
                showError(fieldId, 'This field is required');
                isValid = false;
            }
        });

        // Validate card number
        const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
        if (cardNumber && !isValidCardNumber(cardNumber)) {
            showError('cardNumber', 'Please enter a valid card number');
            isValid = false;
        }

        // Validate expiry
        const expiry = document.getElementById('cardExpiry').value;
        if (expiry && !isValidExpiry(expiry)) {
            showError('cardExpiry', 'Invalid expiry date (use MM/YY)');
            isValid = false;
        }

        // Validate CVV
        const cvv = document.getElementById('cardCVV').value;
        if (cvv && (cvv.length < 3 || cvv.length > 4)) {
            showError('cardCVV', 'Invalid CVV');
            isValid = false;
        }

        return isValid;
    }

    return true;
}

function validateReview() {
    const termsCheckbox = document.getElementById('termsAgree');
    if (!termsCheckbox.checked) {
        showError('termsAgree', 'You must agree to the terms and conditions');
        return false;
    }
    return true;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidCardNumber(number) {
    // Luhn algorithm
    let sum = 0;
    let isEven = false;

    for (let i = number.length - 1; i >= 0; i--) {
        let digit = parseInt(number[i], 10);

        if (isEven) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        isEven = !isEven;
    }

    return sum % 10 === 0;
}

function isValidExpiry(expiry) {
    const [month, year] = expiry.split('/');
    if (!month || !year || month > 12 || month < 1) return false;

    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;

    const expiryYear = parseInt(year);
    const expiryMonth = parseInt(month);

    if (expiryYear < currentYear) return false;
    if (expiryYear === currentYear && expiryMonth < currentMonth) return false;

    return true;
}

function showError(fieldId, message) {
    const errorEl = document.getElementById(`error-${fieldId}`);
    if (errorEl) {
        errorEl.textContent = message;
    }
}

function clearAllErrors() {
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
    });
}

// ============================================================================
// DATA MANAGEMENT
// ============================================================================

function saveAddressData() {
    checkoutData.address = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        street: document.getElementById('street').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        postalCode: document.getElementById('postalCode').value,
        country: document.getElementById('country').value,
    };

    console.log('[Checkout] Address saved:', checkoutData.address);
}

function useSavedAddress() {
    // Load from localStorage if available
    const savedAddress = localStorage.getItem('savedAddress');
    if (savedAddress) {
        const address = JSON.parse(savedAddress);
        document.getElementById('fullName').value = address.fullName || '';
        document.getElementById('email').value = address.email || '';
        document.getElementById('phone').value = address.phone || '';
        document.getElementById('street').value = address.street || '';
        document.getElementById('city').value = address.city || '';
        document.getElementById('state').value = address.state || '';
        document.getElementById('postalCode').value = address.postalCode || '';
        document.getElementById('country').value = address.country || '';
        showAlert('Saved address loaded', 'success');
    } else {
        showAlert('No saved address found', 'info');
    }
}

// ============================================================================
// REVIEW POPULATION
// ============================================================================

function populateReviewAddress() {
    const reviewEl = document.getElementById('review-address');
    const addr = checkoutData.address;

    reviewEl.innerHTML = `
        <div>
            <strong>${addr.fullName}</strong><br>
            ${addr.street}<br>
            ${addr.city}, ${addr.state} ${addr.postalCode}<br>
            ${addr.country}<br>
            <br>
            Email: ${addr.email}<br>
            Phone: ${addr.phone}
        </div>
    `;
}

function populateReviewShipping() {
    const reviewEl = document.getElementById('review-shipping');
    const ship = checkoutData.shipping;

    reviewEl.textContent = `${ship.name} - ${ship.description} (${ship.price === 0 ? 'FREE' : '₹' + ship.price})`;
}

function populateReviewPayment() {
    const reviewEl = document.getElementById('review-payment');
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    let paymentText = '';
    switch (paymentMethod) {
        case 'card':
            const lastDigits = document.getElementById('cardNumber').value.slice(-4);
            paymentText = `Credit/Debit Card ending in ${lastDigits}`;
            break;
        case 'upi':
            paymentText = 'UPI';
            break;
        case 'netbanking':
            paymentText = 'Net Banking';
            break;
        case 'wallet':
            paymentText = 'Digital Wallet';
            break;
        case 'cod':
            paymentText = 'Cash on Delivery';
            break;
    }

    reviewEl.textContent = paymentText;
}

// ============================================================================
// PROMO CODE
// ============================================================================

function applyPromo() {
    const promoCode = document.getElementById('promoCode').value.trim().toUpperCase();
    const messageEl = document.getElementById('promo-message');

    if (!promoCode) {
        messageEl.innerHTML = '<div class="alert alert-error mt-2"><i class="fa-solid fa-exclamation-circle"></i>Please enter a promo code</div>';
        return;
    }

    if (promoCodes[promoCode]) {
        const promo = promoCodes[promoCode];
        const cart = checkoutData.cart;

        if (promo.discount) {
            checkoutData.promoDiscount = Math.round(cart.totalAmount * promo.discount);
        } else if (promo.shipping) {
            checkoutData.promoDiscount = promo.shipping;
        }

        messageEl.innerHTML = `
            <div class="alert alert-success mt-2">
                <i class="fa-solid fa-check-circle"></i>
                <span>Promo applied! ${promo.description}</span>
            </div>
        `;

        document.getElementById('promoCode').disabled = true;
        document.querySelector('button[onclick="applyPromo()"]').disabled = true;

        updatePricingBreakdown();
        console.log('[Checkout] Promo applied:', promoCode, promo);
    } else {
        messageEl.innerHTML = '<div class="alert alert-error mt-2"><i class="fa-solid fa-exclamation-circle"></i>Invalid promo code</div>';
    }
}

// ============================================================================
// ORDER PLACEMENT
// ============================================================================

function placeOrder() {
    console.log('[Checkout] Placing order...');

    const btn = document.getElementById('btn-next');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';

    // Simulate order processing
    setTimeout(() => {
        // Save address if checkbox is checked
        if (document.getElementById('saveAddress').checked) {
            localStorage.setItem('savedAddress', JSON.stringify(checkoutData.address));
        }

        // Create order object
        const order = {
            orderId: generateOrderId(),
            timestamp: new Date().toISOString(),
            address: checkoutData.address,
            shipping: checkoutData.shipping,
            payment: {
                method: document.querySelector('input[name="paymentMethod"]:checked').value
            },
            items: checkoutData.cart.items,
            subtotal: checkoutData.cart.totalAmount,
            discount: checkoutData.promoDiscount || 0,
            shippingCost: checkoutData.shipping.price,
            tax: Math.round((checkoutData.cart.totalAmount - (checkoutData.promoDiscount || 0) + checkoutData.shipping.price) * 0.18),
        };

        order.total = order.subtotal - order.discount + order.shippingCost + order.tax;

        // Save order
        localStorage.setItem('lastOrder', JSON.stringify(order));

        // Clear cart
        window.cartWishlistService.clearCart();

        console.log('[Checkout] Order placed successfully:', order);

        // Show success message
        showAlert('Order placed successfully! Redirecting...', 'success');

        // Redirect to success page after 2 seconds
        setTimeout(() => {
            window.location.href = `order-confirmation.html?orderId=${order.orderId}`;
        }, 2000);
    }, 2000);
}

function generateOrderId() {
    return 'ORD-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

// ============================================================================
// UTILITIES
// ============================================================================

function showAlert(message, type = 'info') {
    let container = document.getElementById('checkout-alert-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'checkout-alert-container';
        container.style.cssText = 'position: fixed; top: 100px; right: 20px; z-index: 9999; max-width: 400px;';
        document.body.appendChild(container);
    }

    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
        <i class="fa-solid ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;

    container.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 4000);
}

// ============================================================================
// INITIALIZATION
// ============================================================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCheckout);
} else {
    initCheckout();
}