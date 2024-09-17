import { getOrder } from "../data/orders.js";
import { getProduct, loadProductsFetch } from "../data/products.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { cart } from "../data/cart.js";

async function loadPage() {
  await loadProductsFetch();

  const url = new URL(window.location.href);
  const orderId = url.searchParams.get("orderId");
  const productId = url.searchParams.get("productId");

  let trackingHTML = "";

  const order = getOrder(orderId);
  const product = getProduct(productId);

  // Get additional details about the product like
  // the estimated delivery time.
  let productDetails;
  order.products.forEach((details) => {
    if (details.productId === product.id) {
      productDetails = details;
    }
  });

  const today = dayjs();
  const orderTime = dayjs(order.orderTime);
  const deliveryTime = dayjs(productDetails.estimatedDeliveryTime);
  const percentProgress =
    ((today - orderTime) / (deliveryTime - orderTime)) * 100;
  // Extra feature: display "delivered" on the tracking page
  // if today's date is past the delivery date.
  const deliveredMessage = today < deliveryTime ? "Arriving on" : "Delivered on";

  console.log("today", today);
  console.log("order Time", orderTime);
  console.log("Delivery Time", deliveryTime);
  console.log("percent progress", percentProgress);

  trackingHTML += `

  <a class="back-to-orders-link link-primary" href="orders.html">
          View all orders
    </a>

  <div class="delivery-date">${deliveredMessage} ${dayjs(
    productDetails.estimatedDeliveryTime
  ).format(" dddd, MMMM D")}</div>

        <div class="product-info">
          ${product.name}
        </div>

        <div class="product-info">Quantity: ${productDetails.quantity}</div>

        <img
          class="product-image"
          src="${product.image}"
        />

        <div class="progress-labels-container">
          <div class="progress-label ${
            percentProgress < 50 ? "current-status" : ""
          }">Preparing</div>
          <div class="progress-label ${
            percentProgress >= 50 && percentProgress < 100
              ? "current-status"
              : ""
          }">Shipped</div>
          <div class="progress-label ${
            percentProgress >= 100 ? "current-status" : ""
          }">Delivered</div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar" style="width: ${percentProgress}%"></div>
        </div>
    `;

  document.querySelector(".order-tracking").innerHTML = trackingHTML;

  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector(".cart-quantity").innerHTML = cartQuantity;
}

loadPage();
