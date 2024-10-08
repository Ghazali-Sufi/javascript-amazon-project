import { validDeliveryOption } from "./deliveryOptions.js";

function Cart(localStorageKey) {
    const cart = {
      cartItems: undefined,

      loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
        if (!this.cartItems) {
          this.cartItems = [
            {
              productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
              quantity: 2,
              deliveryOptionId: "2",
            },
            {
              productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
              quantity: 1,
              deliveryOptionId: "3",
            },
          ];
        }
      },

      saveToStorage() {
        // it will convert the cart into a string and save it into localstorage
        localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
      },

      addToCart(productId) {
        const selectorQuantity = document.querySelector(
          `.cart-quantity-selector-${productId}`
        );

        let quantity;
        if (selectorQuantity === null) {
          quantity = 1;
        } else {
          quantity = Number(selectorQuantity.value);
        }

        let matchingItem;
        this.cartItems.forEach((cartItem) => {
          if (productId === cartItem.productId) {
            matchingItem = cartItem;
          }
        });

        if (matchingItem) {
          matchingItem.quantity += quantity;
        } else {
          this.cartItems.push({
            productId: productId,
            quantity: quantity,
            deliveryOptionId: "1",
          });
        }
        this.saveToStorage();
      },

      removeFromCart(productId) {
        const newCart = [];
        this.cartItems.forEach((cartItem) => {
          if (cartItem.productId !== productId) {
            newCart.push(cartItem);
          }
        });

        this.cartItems = newCart;
        this.saveToStorage();
      },

      calculateCartQuantity() {
        let cartQuantity = 0;
        this.cartItems.forEach((cartItem) => {
          cartQuantity += cartItem.quantity;
        });

        return cartQuantity;
      },

      updateQuantity(productId, newQuantity) {
        let matchingItem;
        this.cartItems.forEach((cartItem) => {
          if (productId === cartItem.productId) {
            matchingItem = cartItem;
          }
        });
        matchingItem.quantity = newQuantity;
        this.saveToStorage();
      },

      updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;
        this.cartItems.forEach((cartItem) => {
          if (productId === cartItem.productId) {
            matchingItem = cartItem;
          }
        });

        if (!matchingItem) {
          return;
        }

        if (!validDeliveryOption(deliveryOptionId)) {
          return;
        }

        matchingItem.deliveryOptionId = deliveryOptionId;

        this.saveToStorage();
      },
    };

    return cart;
}


const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');
// we need to run this function at least once
cart.loadFromStorage();



// we need to run this function at least once
businessCart.loadFromStorage();


console.log('cart', cart);
console.log('business cart', businessCart);



