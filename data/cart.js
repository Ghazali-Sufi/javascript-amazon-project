export const cart = []

export function addToCart(productId) {
  const selectorQuantity = document.querySelector(
    `.cart-quantity-selector-${productId}`
  );
  const quantity = Number(selectorQuantity.value);

  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId: productId,
      quantity: quantity,
    });
  }
}