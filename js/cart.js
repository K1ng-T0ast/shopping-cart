/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

let cart;

function loadCart() {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)

function clearCart() {
  let clearCartElement = document.getElementById('cart');
  clearCartElement.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  let cartBody = document.getElementById('cart');
  // TODO: Find the table body  

  for (let i = 0; i < state.cart.items.length; i++) {
    // TODO: Iterate over the items in the cart

  let trElement = document.createElement('tr');
  // TODO: Create a TR

  let tdDeleteElement = document.createElement('td');
  let link = document.createElement('a');
  link.setAttribute('delete', item.product);
  link.textContent = 'X';
  link.addEventListener('click', removeItemFromCart);
  tdDeleteElement.appendChild(link);
  

  let tdQuantityElement = document.createElement('td');
  tdQuantityElement.textContent = item.quantity;

  let tdItemElement = document.createElement('td');
  tdItemElement.textContent = item.product;
  
  // TODO: Create a TD for the delete link, quantity,  and the item
  cartBody.appendChild(trElement);
  trElement.appendChild(tdDeleteElement);
  trElement.appendChild(tdQuantityElement);
  trElement.appendChild(tdItemElement);

  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  }
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart

function removeItemFromCart(event) {

  let deleteLinks = event.target.getAttribute('delete');
  let index = Array.prototype.indexOf.call(deleteLinks, event.target);
    state.cart.removeItem(index);
    state.cart.saveToLocalStorage();
    renderCart();
}
    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

    // TODO: Re-draw the cart table
  renderCart();

  // TODO: Save the cart back to local storage



// This will initialize the page and draw the cart on screen
