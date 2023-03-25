/* global Product, Cart */

'use strict';

state.cart = new Cart([]);
// Set up an empty cart for use on this page.
// state.cart = localStorage.cart ? new Cart(JSON.parse(localStorage.cart)) : new Cart([]);

// On screen load, we call this method to put all of the product options
// (the things in the state.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in state.allProducts) {
    let product = state.allProducts[i];

    let optionElement = document.createElement('option');
    optionElement.value = product.name;
    optionElement.textContent = product.name;
   
    selectElement.appendChild(optionElement);
    console.log(state.allProducts[i].name);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();


  // Do all the things ...
  addSelectedItemToCart();
  state.cart.saveToLocalStorage();
  state.cart.updateCounter();
  updateCartPreview();

  document.getElementById('items').value = '';
  document.getElementById('quantity').value = '';

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  let product = document.getElementById('items').value;
  // TODO: get the quantity
  let quantity = document.getElementById('quantity').value;
  // TODO: using those, add one item to the Cart
  state.cart.addItem(product, quantity);
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {

let itemsCart = document.getElementById('items').value;
let quantityCart = document.getElementById('quantity').value;

let divEl = document.getElementById('cartContents');
let pEl = document.createElement('p');

divEl.appendChild(pEl);

pEl.textContent = `You have ${quantityCart} of ${itemsCart} in your cart!`;






  // for (let i = 0; i < state.cart.items.length; i++){
  //   const item = state.cart.items[i];
  //   const itemElement = document.createElement('div');
  //   itemElement.innerHTML = `${item.product} x ${item.quantity} <br>`;
  //   previewElement.appendChild(itemElement);
  //   console.log(item);
  // }

}



  
  // let prodName = document.getElementById('items').value.name;
  // let quant = document.getElementById('quantity').value;

  // let p = document.createElement('p');
  // p.innerHTML = `${prodName} x ${quant} <br>`;
  // previewElement.appendChild(p);
  
  // let ul = document.createElement('ul');
  
  // previewElement.appendChild('ul');
  // state.cart.items.forEach(item =>{
  //   ul.innerHTML = `<li> ${prodName} - ${quant} </li>`
  // });



  
 
 
  // if (state.cart.items.length === 0) {
  //   previewElement.innerHTML = 'Your cart is empty'
  // } else {
  //   for (let i = 0; i < state.cart.items.length; i++){
  //     const item = state.cart.items[i];
  //     const itemElement = document.createElement('div');
  //     itemElement.innerHTML = `${item.product} x ${item.quantity} <br>`;
  //     previewElement.appendChild(itemElement);
  //   }

  // }

 
  

// TODO: Get the item and quantity from the form

  // TODO: Add a new element to the cartContents div with that information


// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
