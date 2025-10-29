// Arctic Monkeys Cart Management
class ShoppingCart {
  constructor() {
    this.items = this.loadCart();
    this.updateCartDisplay();
  }

  loadCart() {
    try {
      const savedCart = localStorage.getItem("arcticMonkeysCart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem("arcticMonkeysCart", JSON.stringify(this.items));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }

  addItem(product, quantity = 1, size = null) {
    const existingItem = this.items.find(
      (item) => item.id === product.id && item.size === size
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        ...product,
        quantity,
        size,
        cartId: Date.now() + Math.random(),
      });
    }

    this.saveCart();
    this.updateCartDisplay();
  }

  removeItem(cartId) {
    this.items = this.items.filter((item) => item.cartId !== cartId);
    this.saveCart();
    this.updateCartDisplay();
  }

  updateQuantity(cartId, quantity) {
    const item = this.items.find((item) => item.cartId === cartId);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(cartId);
      } else {
        item.quantity = quantity;
        this.saveCart();
        this.updateCartDisplay();
      }
    }
  }

  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  clearCart() {
    this.items = [];
    this.saveCart();
    this.updateCartDisplay();
  }

  updateCartDisplay() {
    // Update cart count in header
    const cartCounts = document.querySelectorAll(".cart-count");
    cartCounts.forEach((count) => {
      count.textContent = this.getTotalItems();
    });

    // Update cart total in header
    const cartTotals = document.querySelectorAll(".cart-total");
    cartTotals.forEach((total) => {
      total.textContent = `$${this.getTotalPrice().toFixed(2)}`;
    });

    // Update cart page if we're on it
    if (window.location.pathname.includes("cart.html")) {
      this.renderCartPage();
    }
  }

  renderCartPage() {
    const cartItems = document.getElementById("cart-items");
    const emptyCart = document.getElementById("empty-cart");
    const cartSummary = document.getElementById("cart-summary");

    if (!cartItems || !emptyCart || !cartSummary) return;

    if (this.items.length === 0) {
      cartItems.style.display = "none";
      emptyCart.style.display = "block";
      cartSummary.style.display = "none";
      return;
    }

    cartItems.style.display = "block";
    emptyCart.style.display = "none";
    cartSummary.style.display = "block";

    cartItems.innerHTML = this.items
      .map(
        (item) => `
      <div class="cart-item">
        <div class="item-image">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="item-details">
          <h4>${item.eventTitle} - ${
          item.ticketType.charAt(0).toUpperCase() + item.ticketType.slice(1)
        } Ticket</h4>
          ${
            item.ticketType
              ? `<p class="item-ticket-type">Type: ${
                  item.ticketType.charAt(0).toUpperCase() +
                  item.ticketType.slice(1)
                }</p>`
              : ""
          }
          ${
            item.eventDate
              ? `<p class="item-event-date">Date: ${item.eventDate}</p>`
              : ""
          }
          ${
            item.eventLocation
              ? `<p class="item-event-location">Location: ${item.eventLocation}</p>`
              : ""
          }
          <p class="item-price">$${item.price.toFixed(2)}</p>
        </div>
        <div class="item-quantity">
          <button class="quantity-btn" onclick="cart.updateQuantity(${
            item.cartId
          }, ${item.quantity - 1})">-</button>
          <span class="quantity">${item.quantity}</span>
          <button class="quantity-btn" onclick="cart.updateQuantity(${
            item.cartId
          }, ${item.quantity + 1})">+</button>
        </div>
        <div class="item-total">
          <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
        <div class="item-actions">
          <button class="remove-btn" onclick="cart.removeItem(${item.cartId})">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    `
      )
      .join("");

    // Update summary
    const subtotal = this.getTotalPrice();
    const shipping = subtotal > 50 ? 0 : 5.99;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;

    const subtotalEl = document.getElementById("subtotal");
    const shippingEl = document.getElementById("shipping");
    const taxEl = document.getElementById("tax");
    const totalEl = document.getElementById("total");

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingEl)
      shippingEl.textContent =
        shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;

    // Enable/disable checkout button
    const checkoutBtn = document.getElementById("checkout-btn");
    if (checkoutBtn) {
      checkoutBtn.disabled = this.items.length === 0;
    }
  }
}

// Initialize cart
const cart = new ShoppingCart();
