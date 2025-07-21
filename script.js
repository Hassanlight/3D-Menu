const foods = [
{ name: "Burger", img: "assests/burger.jpg", bg: "#f6a623" },
{ name: "Pizza", img: "assests/pizza.jpg", bg: "#e74c3c" },
{ name: "Fries", img: "assests/fries.jpg", bg: "#f1c40f" },
{ name: "Donut", img: "assests/donut.jpg", bg: "#9b59b6" },
{ name: "Taco", img: "assests/taco.jpg", bg: "#ff9800" },
{ name: "Ice Cream", img: "assests/ice-cream.jpg", bg: "#ffccff" },
{ name: "Sushi", img: "assests/sushi.jpg", bg: "#66ccff" },
{ name: "Hot Dog", img: "assests/hot-dog.jpg", bg: "#d35400" },
{ name: "Noodles", img: "assests/noodles.jpg", bg: "#ffc107" },
{ name: "Pasta", img: "assests/pasta.jpg", bg: "#e67e22" },
{ name: "Steak", img: "assests/steak.jpg", bg: "#8e44ad" },
{ name: "Salad", img: "assests/salad.jpg", bg: "#2ecc71" },
{ name: "Cake", img: "assests/cake.jpg", bg: "#ff6699" },
{ name: "Sandwich", img: "assests/sandwich.jpg", bg: "#f39c12" },
{ name: "Soup", img: "assests/soup.jpg", bg: "#b2bec3" },
{ name: "Rice", img: "assests/rice.jpg", bg: "#ffffff" },
{ name: "Shawarma", img: "assests/shawarma.jpg", bg: "#a29bfe" },
{ name: "Chicken Wings", img: "assests/chicken-wings.jpg", bg: "#f06292" },
{ name: "Kebab", img: "assests/kebab.jpg", bg: "#c0392b" },
{ name: "Momos", img: "assests/momos.jpg", bg: "#4db6ac" },
{ name: "Pancakes", img: "assests/pancakes.jpg", bg: "#ffd54f" }
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
