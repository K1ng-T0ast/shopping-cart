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

  let cartElement = document.getElementById('cart');
  // TODO: Find the table body  

  for (let i = 0; i < state.cart.items.length; i++) {
    // TODO: Iterate over the items in the cart

  let trElement = document.createElement('tr');
  // TODO: Create a TR

  let tdDeleteElement = document.createElement('td');
  let link = document.createElement('a');
  link.textContent = 'X';
  link.setAttribute('href', '#');
  link.addEventListener('click', removeItemFromCart);
  link.setAttribute('class', 'delete');
  tdDeleteElement.appendChild(link);

  let tdQuantityElement = document.createElement('td');
  tdQuantityElement.textContent = state.cart.items[i].quantity;

  let tdItemElement = document.createElement('td');
  tdItemElement.textContent = state.cart.items[i].product;
  
  // TODO: Create a TD for the delete link, quantity,  and the item
  cartElement.appendChild(trElement);

  trElement.appendChild(tdDeleteElement);
  trElement.appendChild(tdQuantityElement);
  trElement.appendChild(tdItemElement);
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  }
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart

function removeItemFromCart(event) {

  let deleteLinks = document.getElementsByClassName('delete')
  let index = Array.prototype.indexOf.call(deleteLinks, event.target);
    state.cart.removeItem(index);
    state.cart.saveToLocalStorage();
    renderCart();
}
    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

    // TODO: Re-draw the cart table
  

  // TODO: Save the cart back to local storage



// This will initialize the page and draw the cart on screen
