

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
}

const price = product.querySelector('.price span').innerHTML;
const quantity = product.querySelector('.quantity input').value;

const subtotal = price * quantity;




  let  priceHtml = Number.parseInt(document.getElementsByClassName('.price').innerHTML);
  let  quantityHtml = Number.parseInt(document.getElementsByClassName('.quantity').innerHTML);



  let calc = (price * quantity);
  console.log(calc);


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  let allProducts = document.querySelectorAll('.product');
  allProducts.forEach((singleProduct) => {
    updateSubtotal(singleProduct)
  })



  // ITERATION 3
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
}
