/*const foods = [
{ name: "Burger, 10$", img: "assests/burger.jpg", bg: "#f6a623" },
{ name: "Pizza, 5$", img: "assests/pizza.jpg", bg: "#e74c3c" },
{ name: "Fries, 15$", img: "assests/fries.jpg", bg: "#f1c40f" },
{ name: "Donut, 10$", img: "assests/donut.jpg", bg: "#9b59b6" },
{ name: "Taco, 7$", img: "assests/taco.png", bg: "#ff9800" },
{ name: "Ice Cream, 5$", img: "assests/ice-cream.png", bg: "#ffccff" },
{ name: "Sushi, 20$", img: "assests/sushi.jpg", bg: "#66ccff" },
{ name: "Hot Dog, 10$", img: "assests/hot-dog.jpg", bg: "#d35400" },
{ name: "Noodles, 15$", img: "assests/noodles.png", bg: "#ffc107" },
{ name: "Pasta, 25$", img: "assests/pasta.jpg", bg: "#e67e22" },
{ name: "Steak, 30$", img: "assests/steak.jpg", bg: "#8e44ad" },
{ name: "Salad, 10$", img: "assests/salad.jpg", bg: "#2ecc71" },
{ name: "Cake, 5$", img: "assests/cake.jpg", bg: "#ff6699" },
{ name: "Sandwich, 6$", img: "assests/sandwich.jpg", bg: "#f39c12" },
{ name: "Soup, 12$", img: "assests/soup.jpeg", bg: "#b2bec3" },
{ name: "Rice, 15$", img: "assests/rice.png", bg: "#ffffff" },
{ name: "Shawarma, 10$", img: "assests/shawarma.jpg", bg: "#a29bfe" },
{ name: "Chicken Wings, 10$", img: "assests/chicken-wings.jpg", bg: "#f06292" },
{ name: "Kebab, 15$", img: "assests/kebab.jpg", bg: "#c0392b" },
{ name: "Momos, 5$", img: "assests/momos.jpg", bg: "#4db6ac" },
{ name: "Pancakes, 10$", img: "assests/pancakes.jpg", bg: "#ffd54f" }
];

let current = 0;
const foodImg = document.getElementById("foodImg");
const foodName = document.getElementById("foodName");
const body = document.getElementById("body");

function updateView(index) {
const food = foods[index];
foodImg.src = food.img;
foodName.textContent = food.name;
body.style.backgroundColor = food.bg;
foodImg.style.transform = "scale(1.1) rotateY(20deg)";
setTimeout(() => {
foodImg.style.transform = "none";
}, 300);
}

function nextFood() {
current = (current + 1) % foods.length;
updateView(current);
}

function prevFood() {
current = (current - 1 + foods.length) % foods.length;
updateView(current);
}

// Swipe detection
let startX = 0;
document.addEventListener("touchstart", (e) => {
startX = e.touches[0].clientX;
});
document.addEventListener("touchend", (e) => {
const endX = e.changedTouches[0].clientX;
const diff = endX - startX;
if (diff > 50) prevFood();
if (diff < -50) nextFood();
});

// Arrow keys
document.addEventListener("keydown", (e) => {
if (e.key === "ArrowLeft") prevFood();
if (e.key === "ArrowRight") nextFood();
});

updateView(current);
*/
/*const foods = [
    { name: "Burger", price: "10$", img: "assests/burger.jpg", bg: "#f6a623", description: "Juicy beef patty with fresh lettuce", signature: true },
    { name: "Pizza", price: "5$", img: "assests/pizza.jpg", bg: "#e74c3c", description: "Classic margherita with mozzarella", signature: false },
    { name: "Fries", price: "15$", img: "assests/fries.jpg", bg: "#f1c40f", description: "Crispy golden french fries", signature: false },
    { name: "Donut", price: "10$", img: "assests/donut.jpg", bg: "#9b59b6", description: "Sweet glazed donut perfection", signature: true },
    { name: "Taco", price: "7$", img: "assests/taco.png", bg: "#ff9800", description: "Spicy Mexican street tacos", signature: false },
    { name: "Ice Cream", price: "5$", img: "assests/ice-cream.png", bg: "#ffccff", description: "Creamy vanilla ice cream", signature: false },
    { name: "Sushi", price: "20$", img: "assests/sushi.jpg", bg: "#66ccff", description: "Fresh salmon and tuna rolls", signature: true },
    { name: "Hot Dog", price: "10$", img: "assests/hot-dog.png", bg: "#d35400", description: "Classic American hot dog", signature: false },
    { name: "Noodles", price: "15$", img: "assests/noodles.png", bg: "#ffc107", description: "Stir-fried Asian noodles", signature: false },
    { name: "Pasta", price: "25$", img: "assests/pasta.png", bg: "#e67e22", description: "Italian pasta with tomato sauce", signature: true },
    { name: "Steak", price: "30$", img: "assests/steak.jpg", bg: "#8e44ad", description: "Premium grilled beef steak", signature: true },
    { name: "Salad", price: "10$", img: "assests/salad.jpg", bg: "#2ecc71", description: "Fresh mixed garden salad", signature: false },
    { name: "Cake", price: "5$", img: "assests/cake.jpg", bg: "#ff6699", description: "Chocolate layer cake slice", signature: false },
    { name: "Sandwich", price: "6$", img: "assests/sandwich.jpg", bg: "#f39c12", description: "Club sandwich with turkey", signature: false },
    { name: "Soup", price: "12$", img: "assests/soup.jpeg", bg: "#b2bec3", description: "Warm tomato basil soup", signature: false },
    { name: "Rice", price: "15$", img: "assests/rice.png", bg: "#ffffff", description: "Steamed jasmine rice bowl", signature: false },
    { name: "Shawarma", price: "10$", img: "assests/shawarma.jpg", bg: "#a29bfe", description: "Middle Eastern shawarma wrap", signature: true },
    { name: "Chicken Wings", price: "10$", img: "assests/chicken-wings.jpg", bg: "#f06292", description: "Buffalo style chicken wings", signature: false },
    { name: "Kebab", price: "15$", img: "assests/kebab.jpg", bg: "#c0392b", description: "Grilled meat kebab skewers", signature: false },
    { name: "Momos", price: "5$", img: "assests/momos.jpg", bg: "#4db6ac", description: "Steamed Tibetan dumplings", signature: true },
    { name: "Pancakes", price: "10$", img: "assests/pancakes.png", bg: "#ffd54f", description: "Fluffy breakfast pancakes", signature: false }
];

let current = 0;
const foodImg = document.getElementById("foodImg");
const foodName = document.getElementById("foodName");
const body = document.getElementById("body");

// Get additional elements for enhanced features
const foodPrice = document.getElementById("foodPrice") || createPriceElement();
const foodDescription = document.getElementById("foodDescription") || createDescriptionElement();
const signatureBadge = document.getElementById("signatureBadge") || createSignatureBadgeElement();
const foodCard = document.querySelector('.food-card') || document.querySelector('.container') || document.body;

// Create missing elements if they don't exist
function createPriceElement() {
    const priceEl = document.createElement('div');
    priceEl.id = 'foodPrice';
    priceEl.style.fontSize = '24px';
    priceEl.style.fontWeight = 'bold';
    priceEl.style.color = '#27ae60';
    priceEl.style.margin = '10px 0';
    foodName.parentNode.insertBefore(priceEl, foodName.nextSibling);
    return priceEl;
}

function createDescriptionElement() {
    const descEl = document.createElement('div');
    descEl.id = 'foodDescription';
    descEl.style.fontSize = '14px';
    descEl.style.color = '#7f8c8d';
    descEl.style.margin = '10px 0';
    foodName.parentNode.appendChild(descEl);
    return descEl;
}

function createSignatureBadgeElement() {
    const badgeEl = document.createElement('div');
    badgeEl.id = 'signatureBadge';
    badgeEl.style.margin = '10px 0';
    foodName.parentNode.appendChild(badgeEl);
    return badgeEl;
}

// Enhanced update view function with mobile effects
function updateView(index, direction = 'none') {
    const food = foods[index];
    
    // Add loading/transition effect
    foodCard.style.opacity = '0.7';
    foodCard.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        // Update all content
        foodImg.src = food.img;
        foodName.textContent = food.name;
        
        // Update price if element exists
        if (foodPrice) {
            foodPrice.textContent = food.price;
        }
        
        // Update description if element exists
        if (foodDescription) {
            foodDescription.textContent = food.description;
        }
        
        // Add signature badge if applicable
        if (signatureBadge) {
            if (food.signature) {
                signatureBadge.innerHTML = '<span style="background: linear-gradient(45deg, #ff6b6b, #ee5a24); color: white; padding: 5px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase; display: inline-block; animation: pulse 2s infinite;">Signature Product</span>';
            } else {
                signatureBadge.innerHTML = '';
            }
        }
        
        body.style.backgroundColor = food.bg;
        
        // Enhanced image animation with mobile-friendly effects
        foodImg.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        foodImg.style.transform = "scale(1.15) rotateY(15deg) translateZ(20px)";
        
        // Add rolling effect based on swipe direction
        if (direction === 'next') {
            foodImg.style.transform += " rotateZ(5deg)";
        } else if (direction === 'prev') {
            foodImg.style.transform += " rotateZ(-5deg)";
        }
        
        // Reset transforms with bounce effect
        setTimeout(() => {
            foodImg.style.transform = "scale(1) rotateY(0deg) rotateZ(0deg) translateZ(0px)";
        }, 400);
        
        // Restore card appearance with hover-like effect
        foodCard.style.opacity = '1';
        foodCard.style.transform = 'scale(1.02) translateY(-5px)';
        foodCard.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        
        // Return to normal after hover effect
        setTimeout(() => {
            foodCard.style.transform = 'scale(1) translateY(0px)';
            foodCard.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        }, 600);
        
    }, 200);
}

function nextFood() {
    current = (current + 1) % foods.length;
    updateView(current, 'next');
    addSwipeEffect('left');
}

function prevFood() {
    current = (current - 1 + foods.length) % foods.length;
    updateView(current, 'prev');
    addSwipeEffect('right');
}

// Add visual feedback for swipe gestures
function addSwipeEffect(direction) {
    const effect = document.createElement('div');
    effect.style.position = 'fixed';
    effect.style.top = '50%';
    effect.style.left = direction === 'left' ? '20px' : 'auto';
    effect.style.right = direction === 'right' ? '20px' : 'auto';
    effect.style.transform = 'translateY(-50%)';
    effect.style.fontSize = '24px';
    effect.style.opacity = '0';
    effect.style.transition = 'all 0.3s ease';
    effect.style.zIndex = '1000';
    effect.textContent = direction === 'left' ? '◀' : '▶';
    effect.style.color = 'white';
    effect.style.textShadow = '0 2px 10px rgba(0,0,0,0.5)';
    
    document.body.appendChild(effect);
    
    setTimeout(() => {
        effect.style.opacity = '1';
        effect.style.transform = `translateY(-50%) translateX(${direction === 'left' ? '10px' : '-10px'})`;
    }, 50);
    
    setTimeout(() => {
        effect.style.opacity = '0';
        setTimeout(() => {
            if (effect.parentNode) {
                effect.parentNode.removeChild(effect);
            }
        }, 300);
    }, 500);
}

// Enhanced mobile touch effects
let touchStartTime = 0;
let touchTimeout;

// Add touch start effect for immediate visual feedback
document.addEventListener('touchstart', (e) => {
    touchStartTime = Date.now();
    foodCard.style.transition = 'all 0.1s ease';
    foodCard.style.transform = 'scale(0.98)';
    foodCard.style.filter = 'brightness(1.1)';
    
    // Add ripple effect at touch point
    const ripple = document.createElement('div');
    const rect = foodCard.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    
    ripple.style.position = 'absolute';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '0px';
    ripple.style.height = '0px';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.4)';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.transition = 'all 0.6s ease';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '100';
    
    foodCard.style.position = 'relative';
    foodCard.appendChild(ripple);
    
    setTimeout(() => {
        ripple.style.width = '200px';
        ripple.style.height = '200px';
        ripple.style.opacity = '0';
    }, 50);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 600);
});

// Reset touch effects
document.addEventListener('touchend', (e) => {
    const touchDuration = Date.now() - touchStartTime;
    
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(() => {
        foodCard.style.transition = 'all 0.3s ease';
        foodCard.style.transform = 'scale(1)';
        foodCard.style.filter = 'brightness(1)';
    }, Math.max(0, 150 - touchDuration));
});

// Enhanced swipe detection with momentum and threshold
let startX = 0;
let startY = 0;
let currentX = 0;
let currentY = 0;
let isScrolling = false;
let swipeStartTime = 0;

document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    currentX = startX;
    currentY = startY;
    isScrolling = false;
    swipeStartTime = Date.now();
});

document.addEventListener("touchmove", (e) => {
    if (!startX || !startY) return;
    
    currentX = e.touches[0].clientX;
    currentY = e.touches[0].clientY;
    
    const diffX = Math.abs(currentX - startX);
    const diffY = Math.abs(currentY - startY);
    
    // Determine if this is a scroll gesture
    if (diffY > diffX && diffY > 10) {
        isScrolling = true;
    }
    
    // Visual feedback during swipe
    if (!isScrolling && diffX > 20) {
        const progress = Math.min(diffX / 100, 1);
        const direction = currentX > startX ? 1 : -1;
        
        foodCard.style.transform = `translateX(${direction * progress * 10}px) rotate(${direction * progress * 2}deg)`;
        foodCard.style.opacity = 1 - (progress * 0.2);
    }
});

document.addEventListener("touchend", (e) => {
    if (isScrolling) {
        resetSwipeEffects();
        return;
    }
    
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = endX - startX;
    const diffY = Math.abs(endY - startY);
    const swipeDuration = Date.now() - swipeStartTime;
    const velocity = Math.abs(diffX) / swipeDuration;
    
    // Enhanced swipe detection with velocity consideration
    const isValidSwipe = (Math.abs(diffX) > 50 && diffY < 100) || (velocity > 0.3 && Math.abs(diffX) > 30);
    
    if (isValidSwipe) {
        if (diffX > 0) {
            prevFood();
        } else {
            nextFood();
        }
        
        // Add satisfying feedback animation
        foodCard.style.transition = 'all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        foodCard.style.transform = `translateX(${diffX > 0 ? '20px' : '-20px'}) scale(1.05)`;
        
        setTimeout(() => {
            resetSwipeEffects();
        }, 200);
    } else {
        resetSwipeEffects();
    }
    
    // Reset tracking variables
    startX = 0;
    startY = 0;
    currentX = 0;
    currentY = 0;
});

function resetSwipeEffects() {
    foodCard.style.transition = 'all 0.3s ease';
    foodCard.style.transform = 'translateX(0px) rotate(0deg) scale(1)';
    foodCard.style.opacity = '1';
}

// Add CSS animations dynamically if not present
function addCSSAnimations() {
    if (!document.getElementById('mobile-effects-styles')) {
        const style = document.createElement('style');
        style.id = 'mobile-effects-styles';
        style.textContent = `
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
            
            .mobile-hover-effect {
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            }
            
            .mobile-hover-effect:hover,
            .mobile-hover-effect.touch-active {
                transform: translateY(-8px) scale(1.03) !important;
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2) !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize enhanced mobile effects
function initializeMobileEffects() {
    addCSSAnimations();
    
    // Add mobile-friendly classes
    foodCard.classList.add('mobile-hover-effect');
    
    // Add visual indicator for swipe capability
    const swipeIndicator = document.createElement('div');
    swipeIndicator.style.position = 'fixed';
    swipeIndicator.style.bottom = '20px';
    swipeIndicator.style.left = '50%';
    swipeIndicator.style.transform = 'translateX(-50%)';
    swipeIndicator.style.color = 'rgba(255, 255, 255, 0.8)';
    swipeIndicator.style.fontSize = '14px';
    swipeIndicator.style.textShadow = '0 1px 3px rgba(0, 0, 0, 0.5)';
    swipeIndicator.style.animation = 'pulse 2s infinite';
    swipeIndicator.style.zIndex = '1000';
    swipeIndicator.textContent = '← Swipe to browse →';
    document.body.appendChild(swipeIndicator);
    
    // Hide indicator after 5 seconds
    setTimeout(() => {
        swipeIndicator.style.opacity = '0';
        swipeIndicator.style.transition = 'opacity 1s ease';
    }, 5000);
}

// Arrow keys support
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevFood();
    if (e.key === "ArrowRight") nextFood();
});

// Initialize everything
updateView(current);
initializeMobileEffects();

// Add intersection observer for scroll-based animations (bonus feature)
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'translateY(0) scale(1)';
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(foodCard);
}*/

const foods = [
    { name: "Burger", price: "10$", img: "assests/burger.jpg", bg: "#f6a623", description: "Juicy beef patty with fresh lettuce", signature: true },
    { name: "Pizza", price: "5$", img: "assests/pizza.jpg", bg: "#e74c3c", description: "Classic margherita with mozzarella", signature: false },
    { name: "Fries", price: "15$", img: "assests/fries.jpg", bg: "#f1c40f", description: "Crispy golden french fries", signature: false },
    { name: "Donut", price: "10$", img: "assests/donut.jpg", bg: "#9b59b6", description: "Sweet glazed donut perfection", signature: true },
    { name: "Taco", price: "7$", img: "assests/taco.png", bg: "#ff9800", description: "Spicy Mexican street tacos", signature: false },
    { name: "Ice Cream", price: "5$", img: "assests/ice-cream.png", bg: "#ffccff", description: "Creamy vanilla ice cream", signature: false },
    { name: "Sushi", price: "20$", img: "assests/sushi.jpg", bg: "#66ccff", description: "Fresh salmon and tuna rolls", signature: true },
    { name: "Hot Dog", price: "10$", img: "assests/hot-dog.png", bg: "#d35400", description: "Classic American hot dog", signature: false },
    { name: "Noodles", price: "15$", img: "assests/noodles.png", bg: "#ffc107", description: "Stir-fried Asian noodles", signature: false },
    { name: "Pasta", price: "25$", img: "assests/pasta.png", bg: "#e67e22", description: "Italian pasta with tomato sauce", signature: true },
    { name: "Steak", price: "30$", img: "assests/steak.jpg", bg: "#8e44ad", description: "Premium grilled beef steak", signature: true },
    { name: "Salad", price: "10$", img: "assests/salad.jpg", bg: "#2ecc71", description: "Fresh mixed garden salad", signature: false },
    { name: "Cake", price: "5$", img: "assests/cake.jpg", bg: "#ff6699", description: "Chocolate layer cake slice", signature: false },
    { name: "Sandwich", price: "6$", img: "assests/sandwich.jpg", bg: "#f39c12", description: "Club sandwich with turkey", signature: false },
    { name: "Soup", price: "12$", img: "assests/soup.jpeg", bg: "#b2bec3", description: "Warm tomato basil soup", signature: false },
    { name: "Rice", price: "15$", img: "assests/rice.png", bg: "#ffffff", description: "Steamed jasmine rice bowl", signature: false },
    { name: "Shawarma", price: "10$", img: "assests/shawarma.jpg", bg: "#a29bfe", description: "Middle Eastern shawarma wrap", signature: true },
    { name: "Chicken Wings", price: "10$", img: "assests/chicken-wings.jpg", bg: "#f06292", description: "Buffalo style chicken wings", signature: false },
    { name: "Kebab", price: "15$", img: "assests/kebab.jpg", bg: "#c0392b", description: "Grilled meat kebab skewers", signature: false },
    { name: "Momos", price: "5$", img: "assests/momos.jpg", bg: "#4db6ac", description: "Steamed Tibetan dumplings", signature: true },
    { name: "Pancakes", price: "10$", img: "assests/pancakes.png", bg: "#ffd54f", description: "Fluffy breakfast pancakes", signature: false }
];

// Performance optimizations
let current = 0;
let isTransitioning = false;
let rafId = null;
const prefetchedImages = new Map();

// Cache DOM elements for better performance
const elements = {
    foodImg: document.getElementById("foodImg"),
    foodName: document.getElementById("foodName"),
    body: document.getElementById("body"),
    foodPrice: null,
    foodDescription: null,
    signatureBadge: null,
    foodCard: null
};

// Initialize elements with performance optimizations
function initializeElements() {
    elements.foodPrice = document.getElementById("foodPrice") || createOptimizedElement('foodPrice', {
        fontSize: '28px',
        fontWeight: '800',
        background: 'linear-gradient(135deg, #27ae60, #2ecc71)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        margin: '15px 0',
        textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        letterSpacing: '1px'
    });

    elements.foodDescription = document.getElementById("foodDescription") || createOptimizedElement('foodDescription', {
        fontSize: '16px',
        color: '#34495e',
        margin: '12px 0',
        lineHeight: '1.6',
        fontWeight: '500',
        textShadow: '0 1px 2px rgba(255,255,255,0.8)'
    });

    elements.signatureBadge = document.getElementById("signatureBadge") || createOptimizedElement('signatureBadge', {
        margin: '15px 0'
    });

    elements.foodCard = document.querySelector('.food-card') || document.querySelector('.container') || document.body;
}

// Optimized element creation
function createOptimizedElement(id, styles) {
    const element = document.createElement('div');
    element.id = id;
    Object.assign(element.style, styles);
    elements.foodName.parentNode.insertBefore(element, elements.foodName.nextSibling);
    return element;
}

// Advanced image preloading for smooth transitions
function preloadImages() {
    const imagePromises = foods.map((food, index) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                prefetchedImages.set(index, img);
                resolve();
            };
            img.onerror = () => resolve(); // Continue even if image fails
            img.src = food.img;
        });
    });
    
    Promise.all(imagePromises).then(() => {
        console.log('All images preloaded for smooth experience');
    });
}

// Ultra-smooth update with RAF optimization
function updateView(index, direction = 'none') {
    if (isTransitioning) return;
    isTransitioning = true;
    
    const food = foods[index];
    
    // Cancel any pending animations
    if (rafId) cancelAnimationFrame(rafId);
    
    rafId = requestAnimationFrame(() => {
        // Batch DOM updates for better performance
        elements.foodCard.style.cssText += `
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            opacity: 0.8;
            transform: scale(0.96) translateY(5px);
        `;
        
        requestAnimationFrame(() => {
            // Update content
            if (prefetchedImages.has(index)) {
                elements.foodImg.src = prefetchedImages.get(index).src;
            } else {
                elements.foodImg.src = food.img;
            }
            
            elements.foodName.textContent = food.name;
            elements.foodPrice.textContent = food.price;
            elements.foodDescription.textContent = food.description;
            
            // Enhanced signature badge with glassmorphism
            if (food.signature) {
                elements.signatureBadge.innerHTML = `
                    <div class="signature-badge">
                        ✨ SIGNATURE DISH ✨
                    </div>
                `;
            } else {
                elements.signatureBadge.innerHTML = '';
            }
            
            // Smooth background transition
            elements.body.style.transition = 'background-color 0.6s ease';
            elements.body.style.backgroundColor = food.bg;
            
            // Advanced image animations based on direction
            applyDirectionalAnimation(direction);
            
            // Restore with enhanced effects
            setTimeout(() => {
                elements.foodCard.style.cssText += `
                    opacity: 1;
                    transform: scale(1.02) translateY(-8px);
                    box-shadow: 0 25px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.1);
                `;
                
                setTimeout(() => {
                    elements.foodCard.style.transform = 'scale(1) translateY(0px)';
                    elements.foodCard.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                    isTransitioning = false;
                }, 300);
            }, 100);
        });
    });
}

// Advanced directional animations
function applyDirectionalAnimation(direction) {
    const img = elements.foodImg;
    img.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    
    switch(direction) {
        case 'next':
            img.style.transform = "scale(1.2) rotateY(20deg) rotateZ(8deg) translateX(15px)";
            break;
        case 'prev':
            img.style.transform = "scale(1.2) rotateY(-20deg) rotateZ(-8deg) translateX(-15px)";
            break;
        default:
            img.style.transform = "scale(1.15) rotateY(10deg) translateZ(30px)";
    }
    
    setTimeout(() => {
        img.style.transform = "scale(1) rotateY(0deg) rotateZ(0deg) translateX(0px) translateZ(0px)";
    }, 300);
}

// Optimized navigation functions
function nextFood() {
    if (isTransitioning) return;
    current = (current + 1) % foods.length;
    updateView(current, 'next');
    createSwipeParticles('left');
}

function prevFood() {
    if (isTransitioning) return;
    current = (current - 1 + foods.length) % foods.length;
    updateView(current, 'prev');
    createSwipeParticles('right');
}

// Stunning particle effects for swipes
function createSwipeParticles(direction) {
    const particleCount = 8;
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            top: ${50 + (Math.random() - 0.5) * 200}%;
            ${direction === 'left' ? 'left: 15px' : 'right: 15px'};
            opacity: 0;
            transform: scale(0);
        `;
        
        document.body.appendChild(particle);
        
        requestAnimationFrame(() => {
            particle.style.transition = `all ${0.8 + Math.random() * 0.4}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
            particle.style.opacity = '1';
            particle.style.transform = `scale(1.5) translate(${(Math.random() - 0.5) * 100}px, ${-50 - Math.random() * 100}px)`;
            
            setTimeout(() => {
                particle.style.opacity = '0';
                particle.style.transform += ' scale(0)';
                setTimeout(() => particle.remove(), 300);
            }, 400 + Math.random() * 200);
        });
    }
}

// Advanced touch handling with momentum
let touchState = {
    startX: 0, startY: 0, currentX: 0, currentY: 0,
    startTime: 0, isScrolling: false, momentum: 0
};

const touchHandlers = {
    start: (e) => {
        if (isTransitioning) return;
        
        const touch = e.touches[0];
        touchState = {
            startX: touch.clientX,
            startY: touch.clientY,
            currentX: touch.clientX,
            currentY: touch.clientY,
            startTime: Date.now(),
            isScrolling: false,
            momentum: 0
        };
        
        // Immediate visual feedback
        elements.foodCard.style.transition = 'transform 0.1s ease-out';
        elements.foodCard.style.transform = 'scale(0.98)';
        
        createTouchRipple(touch.clientX, touch.clientY);
    },
    
    move: (e) => {
        if (isTransitioning || !touchState.startX) return;
        
        const touch = e.touches[0];
        touchState.currentX = touch.clientX;
        touchState.currentY = touch.clientY;
        
        const diffX = touchState.currentX - touchState.startX;
        const diffY = Math.abs(touchState.currentY - touchState.startY);
        
        if (diffY > Math.abs(diffX) && diffY > 15) {
            touchState.isScrolling = true;
            return;
        }
        
        if (!touchState.isScrolling && Math.abs(diffX) > 10) {
            e.preventDefault();
            const progress = Math.min(Math.abs(diffX) / 120, 1);
            const direction = diffX > 0 ? 1 : -1;
            
            elements.foodCard.style.transition = 'none';
            elements.foodCard.style.transform = `
                translateX(${diffX * 0.3}px) 
                rotate(${direction * progress * 4}deg) 
                scale(${0.98 + progress * 0.02})
            `;
            elements.foodCard.style.opacity = 1 - (progress * 0.15);
        }
    },
    
    end: (e) => {
        if (touchState.isScrolling || !touchState.startX) {
            resetTouchEffects();
            return;
        }
        
        const touch = e.changedTouches[0];
        const diffX = touch.clientX - touchState.startX;
        const diffY = Math.abs(touch.clientY - touchState.startY);
        const duration = Date.now() - touchState.startTime;
        const velocity = Math.abs(diffX) / duration;
        
        const shouldSwipe = (Math.abs(diffX) > 60 && diffY < 120) || (velocity > 0.4 && Math.abs(diffX) > 30);
        
        if (shouldSwipe) {
            if (diffX > 0) {
                prevFood();
            } else {
                nextFood();
            }
            
            // Satisfying exit animation
            elements.foodCard.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            elements.foodCard.style.transform = `translateX(${diffX > 0 ? '30px' : '-30px'}) scale(1.05)`;
        }
        
        setTimeout(resetTouchEffects, shouldSwipe ? 200 : 0);
        touchState = { startX: 0, startY: 0, currentX: 0, currentY: 0, startTime: 0, isScrolling: false, momentum: 0 };
    }
};

function resetTouchEffects() {
    elements.foodCard.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    elements.foodCard.style.transform = 'translateX(0px) rotate(0deg) scale(1)';
    elements.foodCard.style.opacity = '1';
}

// Magical touch ripple effect
function createTouchRipple(x, y) {
    const rect = elements.foodCard.getBoundingClientRect();
    const ripple = document.createElement('div');
    
    ripple.style.cssText = `
        position: absolute;
        left: ${x - rect.left}px;
        top: ${y - rect.top}px;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 70%, transparent 100%);
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 100;
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    `;
    
    elements.foodCard.style.position = 'relative';
    elements.foodCard.appendChild(ripple);
    
    requestAnimationFrame(() => {
        ripple.style.width = '250px';
        ripple.style.height = '250px';
        ripple.style.opacity = '0';
    });
    
    setTimeout(() => ripple.remove(), 800);
}

// Enhanced CSS with cutting-edge effects
function injectAdvancedStyles() {
    if (document.getElementById('advanced-food-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'advanced-food-styles';
    style.textContent = `
        .signature-badge {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 8px 16px;
            border-radius: 25px;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: inline-block;
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
            border: 2px solid rgba(255,255,255,0.2);
            backdrop-filter: blur(10px);
            animation: signature-glow 3s ease-in-out infinite;
            transform: translateZ(0);
        }
        
        @keyframes signature-glow {
            0%, 100% { box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3), 0 0 0 0 rgba(102, 126, 234, 0.4); }
            50% { box-shadow: 0 8px 35px rgba(102, 126, 234, 0.5), 0 0 0 8px rgba(102, 126, 234, 0.1); }
        }
        
        .food-hover-zone {
            position: relative;
            overflow: hidden;
            border-radius: 20px;
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
        }
        
        .food-hover-zone::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
            transform: rotate(45deg);
            transition: transform 0.6s ease;
            opacity: 0;
        }
        
        .food-hover-zone:hover::before {
            transform: rotate(45deg) translateX(100%);
            opacity: 1;
        }
        
        @media (max-width: 768px) {
            #foodImg {
                max-width: 85vw !important;
                height: auto !important;
                object-fit: contain !important;
                border-radius: 15px !important;
            }
            
            #foodName {
                font-size: 2.2rem !important;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.3) !important;
                font-weight: 800 !important;
                letter-spacing: 1px !important;
            }
            
            #foodPrice {
                font-size: 1.8rem !important;
            }
            
            #foodDescription {
                font-size: 1.1rem !important;
                text-shadow: 1px 1px 2px rgba(0,0,0,0.2) !important;
            }
        }
        
        .swipe-indicator {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0,0,0,0.7);
            color: white;
            padding: 12px 24px;
            border-radius: 30px;
            font-size: 14px;
            font-weight: 600;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.1);
            animation: float 3s ease-in-out infinite;
            z-index: 1000;
            text-shadow: none;
        }
        
        @keyframes float {
            0%, 100% { transform: translateX(-50%) translateY(0px); }
            50% { transform: translateX(-50%) translateY(-10px); }
        }
    `;
    
    document.head.appendChild(style);
}

// Optimized keyboard navigation
const keyboardHandler = (e) => {
    if (isTransitioning) return;
    
    switch(e.key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
            e.preventDefault();
            prevFood();
            break;
        case 'ArrowRight':
        case 'd':
        case 'D':
            e.preventDefault();
            nextFood();
            break;
        case ' ':
            e.preventDefault();
            nextFood();
            break;
    }
};

// Enhanced initialization with performance monitoring
function initializeApp() {
    const startTime = performance.now();
    
    initializeElements();
    injectAdvancedStyles();
    
    // Add enhanced visual classes
    elements.foodCard.classList.add('food-hover-zone');
    
    // Create modern swipe indicator
    const indicator = document.createElement('div');
    indicator.className = 'swipe-indicator';
    indicator.innerHTML = '← Swipe or use arrow keys →';
    document.body.appendChild(indicator);
    
    // Auto-hide indicator
    setTimeout(() => {
        indicator.style.opacity = '0';
        indicator.style.transform = 'translateX(-50%) translateY(20px)';
        setTimeout(() => indicator.remove(), 1000);
    }, 4000);
    
    // Event listeners with passive option for better performance
    document.addEventListener('touchstart', touchHandlers.start, { passive: false });
    document.addEventListener('touchmove', touchHandlers.move, { passive: false });
    document.addEventListener('touchend', touchHandlers.end, { passive: true });
    document.addEventListener('keydown', keyboardHandler);
    
    // Start preloading images
    preloadImages();
    
    // Initial view
    updateView(current);
    
    const loadTime = performance.now() - startTime;
    console.log(`Enhanced Food Carousel initialized in ${loadTime.toFixed(2)}ms`);
}

// Auto-play functionality (optional)
function enableAutoPlay(interval = 5000) {
    let autoPlayTimer = setInterval(() => {
        if (!isTransitioning && !document.hidden) {
            nextFood();
        }
    }, interval);
    
    // Pause on user interaction
    ['touchstart', 'keydown', 'mousedown'].forEach(event => {
        document.addEventListener(event, () => {
            clearInterval(autoPlayTimer);
            setTimeout(() => {
                autoPlayTimer = setInterval(() => {
                    if (!isTransitioning && !document.hidden) {
                        nextFood();
                    }
                }, interval);
            }, 10000);
        }, { once: true });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
