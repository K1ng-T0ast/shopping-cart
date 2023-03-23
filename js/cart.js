/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

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
  // let tableBodyElement = getElementsByTagName('tbody')[0];
  // tableBodyElement.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let tableBodyElement = getElementsByTagName('tbody');
  // TODO: Find the table body  

  for (let i = 0; i < state.cart.items.length; i++) {
    // TODO: Iterate over the items in the cart

  let trElement = document.createElement('tr');
  // TODO: Create a TR

  let tdDeleteElement = document.createElement('td');
  let tdQuantityElement = document.createElement('td');
  let tdItemElement = document.createElement('td');
  
  tdDeleteElement.innerHTML = '<a href="#" class="delete">X</a>';
  tdQuantityElement.innerHTML = cart.items[i].quantity;
  tdItemElement.innerHTML = cart.items[i].product;
  // TODO: Create a TD for the delete link, quantity,  and the item

  trElement.appendChild(tdDeleteElement);
  trElement.appendChild(tdQuantityElement);
  trElement.appendChild(tdItemElement);
  tableBodyElement[0].appendChild(trElement);
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  }
}

function clearCart() {
  // let tableBodyElement = getElementsByTagName('tbody')[0];
  // tableBodyElement.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let tableBodyElement = getElementById('cart');
  // TODO: Find the table body  

  for (let i = 0; i < state.cart.items.length; i++) {
    // TODO: Iterate over the items in the cart

  let trElement = document.createElement('tr');
  // TODO: Create a TR

  let tdDeleteElement = document.createElement('td');
  let tdQuantityElement = document.createElement('td');
  let tdItemElement = document.createElement('td');
  
  tdDeleteElement.innerHTML = '<a href="#" class="delete">X</a>';
  tdQuantityElement.innerHTML = cart.items[i].quantity;
  tdItemElement.innerHTML = cart.items[i].product;
  // TODO: Create a TD for the delete link, quantity,  and the item

  trElement.appendChild(tdDeleteElement);
  trElement.appendChild(tdQuantityElement);
  trElement.appendChild(tdItemElement);
  tableBodyElement[0].appendChild(trElement);
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  }
}

function removeItemFromCart(event) {

  // let deleteLink = document.getElementsByClassName('delete')
  for (let i = 0; i < deleteLink.length; i++) {
    deleteLink[i].addEventListener('click', removeItemFromCart);
  } if (event.target.id === 'delete' + i){
    cart.removeItem(i);
    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    renderCart();
    // TODO: Re-draw the cart table
  }

  // TODO: Save the cart back to local storage

}

// This will initialize the page and draw the cart on screen
renderCart();
