// Additional cart functionality
document.addEventListener("DOMContentLoaded", function () {
  // Initialize cart page if we're on the cart page
  if (window.location.pathname.includes("cart.html")) {
    initializeCartPage();
  }

  // Initialize checkout page if we're on the checkout page
  if (window.location.pathname.includes("checkout.html")) {
    initializeCheckoutPage();
  }
});

function initializeCartPage() {
  // Add smooth animations for cart interactions
  addCartAnimations();
}

// Simple function to handle checkout button click
function goToCheckout() {
  if (typeof cart !== "undefined" && cart.items.length > 0) {
    window.location.href = "./checkout.html";
  } else {
    alert("Your cart is empty. Please add items before checkout.");
  }
}

function initializeCheckoutPage() {
  // Populate order items
  populateOrderItems();

  // Add form submission handler
  const checkoutForm = document.getElementById("checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", handleCheckout);
  }

  // Add smooth animations
  addCartAnimations();
}

function populateOrderItems() {
  if (typeof cart === "undefined" || cart.items.length === 0) {
    window.location.href = "./cart.html";
    return;
  }

  const orderItems = document.getElementById("order-items");
  if (!orderItems) return;

  orderItems.innerHTML = cart.items
    .map(
      (item) => `
    <div class="order-item">
      <div class="item-info">
        <h4>${item.name}</h4>
        ${item.size ? `<p>Size: ${item.size}</p>` : ""}
        ${item.eventTitle ? `<p>Event: ${item.eventTitle}</p>` : ""}
        ${item.eventDate ? `<p>Date: ${item.eventDate}</p>` : ""}
        ${item.eventLocation ? `<p>Location: ${item.eventLocation}</p>` : ""}
        ${item.ticketType ? `<p>Type: ${item.ticketType}</p>` : ""}
      </div>
      <div class="item-quantity">Qty: ${item.quantity}</div>
      <div class="item-price">$${(item.price * item.quantity).toFixed(2)}</div>
    </div>
  `
    )
    .join("");

  // Update totals
  const subtotal = cart.getTotalPrice();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  document.getElementById(
    "checkout-subtotal"
  ).textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("checkout-shipping").textContent =
    shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`;
  document.getElementById("checkout-tax").textContent = `$${tax.toFixed(2)}`;
  document.getElementById("checkout-total").textContent = `$${total.toFixed(
    2
  )}`;
}

async function handleCheckout(event) {
  event.preventDefault();

  if (cart.items.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Get form data
  const formData = new FormData(event.target);
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  // Basic validation
  if (
    !formObject.firstName ||
    !formObject.lastName ||
    !formObject.email ||
    !formObject.address
  ) {
    alert("Please fill in all required fields");
    return;
  }

  // Simulate checkout process
  const placeOrderBtn = document.getElementById("place-order-btn");
  placeOrderBtn.textContent = "Processing...";
  placeOrderBtn.disabled = true;

  setTimeout(async () => {
    alert(
      "Thank you for your purchase! This is a demo store, so no actual payment was processed."
    );
    await cart.clearCart();
    window.location.href = "./tours.html";
  }, 2000);
}

function addCartAnimations() {
  // Add CSS for smooth animations
  const style = document.createElement("style");
  style.textContent = `
    .cart-item {
      transition: all 0.3s ease;
    }
    
    .cart-item.removing {
      opacity: 0;
      transform: translateX(-100%);
    }
    
    .quantity-btn {
      transition: all 0.2s ease;
    }
    
    .quantity-btn:hover {
      background-color: #007bff;
      color: white;
    }
    
    .remove-btn {
      transition: all 0.2s ease;
    }
    
    .remove-btn:hover {
      background-color: #dc3545;
      color: white;
    }
    
    .add-to-cart-btn.added {
      background-color: #28a745 !important;
      color: white !important;
    }
    
    .product-card {
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
  `;
  document.head.appendChild(style);
}

// Enhanced cart functionality
async function removeItemWithAnimation(cartId) {
  const cartItem = document
    .querySelector(`[onclick*="cart.removeItem(${cartId})"]`)
    .closest(".cart-item");
  if (cartItem) {
    cartItem.classList.add("removing");
    setTimeout(async () => {
      // Call the original removeItem method directly
      await cart.removeItem(cartId);
    }, 300);
  }
}

// Add cart persistence and recovery
async function saveCartState() {
  if (typeof cart !== "undefined") {
    await cart.saveCart();
  }
}

// Save cart state before page unload
window.addEventListener("beforeunload", (e) => {
  // Use synchronous-like approach for beforeunload
  if (typeof cart !== "undefined") {
    // Fire and forget - can't await in beforeunload
    cart
      .saveCart()
      .catch((err) => console.error("Error saving cart on unload:", err));
  }
});
