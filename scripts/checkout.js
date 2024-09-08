import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js'
// import '../data/car.js';
// import '../data/backend-practice.js'

Promise.all([
    
 loadProductsFetch(),

  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});

/*
Promise.all([
  new Promise((resolve) => {
    // we need to send a request, and then use a callback to wait for a response, and then run the rest of our code: Thats how we use a backend in our project
    loadProducts(() => {
      // we call resolve to go to the next step
      resolve();
    });
  }),

  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),

]).then(() => {
      renderCheckoutHeader();
      renderOrderSummary();
      renderPaymentSummary();
});
*/


/*
new Promise((resolve) => {
  // we need to send a request, and then use a callback to wait for a response, and then run the rest of our code: Thats how we use a backend in our project
  loadProducts(() => {
    // we call resolve to go to the next step
    resolve();
  });
})
  .then(() => {
    return new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
  })
  .then(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });
*/
/*
loadProducts(() => {
  loadCart(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/
