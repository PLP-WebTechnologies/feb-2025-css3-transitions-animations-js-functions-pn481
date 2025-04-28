
// Load cart from localStorage on page load
document.addEventListener('DOMContentLoaded', loadCart);

// Select all "Add to Cart" buttons
const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const product = this.parentElement.getAttribute('data-name');
    addToCart(product);
    animateButton(this);
  });
});

// Add product to cart and save to localStorage
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

// Animate the button
function animateButton(button) {
  button.classList.add('pop');
  button.addEventListener('animationend', () => {
    button.classList.remove('pop');
  }, { once: true });
}

// Display cart items
function displayCart() {
  const cartList = document.getElementById('cart');
  cartList.innerHTML = ''; // Clear old items
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    cartList.appendChild(li);
  });
}

// Load cart when page refreshes
function loadCart() {
  displayCart();
}
