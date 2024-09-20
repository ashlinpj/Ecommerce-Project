export const cart = [{
  productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity:2,
},{
  productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:1,
}];
export function addTocart(button){
    const productId = button.dataset.productId;
      let matchingItem;
  
      cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = item;
        }
      });
  
      if (matchingItem) {
        matchingItem.quantity++;
      } else {
        cart.push({
          productId: productId,
          quantity: 1,
        });
      }
  }
  
  export function updateCartQuantity(){
    let cartQuantity = 0;
      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });
      document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
  }
  