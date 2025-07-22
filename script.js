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
}