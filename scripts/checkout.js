import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import {loadProducts} from '../data/products.js'
// import '../data/cart-class.js'
// import '../data/car.js';
// import '../data/backend-practice.js'


// we need to send a request, and then use a callback to wait for a response, and then run the rest of our code: Thats how we use a backend in our project
loadProducts(() =>{
renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary();
})


