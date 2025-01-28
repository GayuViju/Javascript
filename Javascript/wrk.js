const cartCount = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

let cart = 0; // Variable to keep track of the cart items

// Function to update the cart count on the screen
function updateCartCount() {
  cartCount.textContent = cart;
}

// Add event listeners to all "Add to Cart" buttons
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cart++;
    updateCartCount();

    // Get product details
    const product = button.parentElement;
    const productName = product.dataset.name;
    const productPrice = product.dataset.price;

    alert(`Added "${productName}" ($${productPrice}) to the cart!`);
  });
});

// Function to clear the cart
function clearCart() {
  cart = 0;
  updateCartCount();
}

// Example usage: Attach clearCart to a "Clear Cart" button
const clearCartButton = document.getElementById("clear-cart");
if (clearCartButton) {
  clearCartButton.addEventListener("click", clearCart);
}
