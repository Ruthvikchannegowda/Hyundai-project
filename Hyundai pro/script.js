// let preveiwContainer = document.querySelector('.products-preview');
// let previewBox = preveiwContainer.querySelectorAll('.preview');

// document.querySelectorAll('.products-container .product').forEach(product =>{
//   product.onclick = () =>{
//     preveiwContainer.style.display = 'flex';
//     let name = product.getAttribute('data-name');
//     previewBox.forEach(preview =>{
//       let target = preview.getAttribute('data-target');
//       if(name == target){
//         preview.classList.add('active');
//       }
//     });
//   };
// });


// previewBox.forEach(close =>{
//   close.querySelector('.fa-times').onclick = () =>{
//     close.classList.remove('active');
//     preveiwContainer.style.display = 'none';
//   };
// });







document.getElementById("pro1").addEventListener("click", () => {
  document.querySelector("#pro2").style.display = "none";
  document.querySelector('#pro3').style.display="none"
  document.querySelector('#pro4').style.display="none"
  document.querySelector('#pro5').style.display="none"
  document.querySelector('#pro6').style.display="none"
  document.querySelector('form').style.display="block"
});


// product2
document.getElementById("pro2").addEventListener("click", () => {
  document.querySelector("#pro1").style.display = "none";
  document.querySelector('#pro3').style.display="none"
  document.querySelector('#pro4').style.display="none"
  document.querySelector('#pro5').style.display="none"
  document.querySelector('#pro6').style.display="none"
  document.querySelector('form').style.display="block"
});


// product3
document.getElementById("pro3").addEventListener("click", () => {
  document.querySelector("#pro2").style.display = "none";
  document.querySelector('#pro1').style.display="none"
  document.querySelector('#pro4').style.display="none"
  document.querySelector('#pro5').style.display="none"
  document.querySelector('#pro6').style.display="none"
  document.querySelector('form').style.display="block"
});

// product4
document.getElementById("pro4").addEventListener("click", () => {
  document.querySelector("#pro2").style.display = "none";
  document.querySelector('#pro3').style.display="none"
  document.querySelector('#pro1').style.display="none"
  document.querySelector('#pro5').style.display="none"
  document.querySelector('#pro6').style.display="none"
  document.querySelector('form').style.display="block"
});

// product5
document.getElementById("pro5").addEventListener("click", () => {
  document.querySelector("#pro2").style.display = "none";
  document.querySelector('#pro3').style.display="none"
  document.querySelector('#pro4').style.display="none"
  document.querySelector('#pro1').style.display="none"
  document.querySelector('#pro6').style.display="none"
  document.querySelector('form').style.display="block"
});


// product6
document.getElementById("pro6").addEventListener("click", () => {
  document.querySelector("#pro2").style.display = "none";
  document.querySelector('#pro3').style.display="none"
  document.querySelector('#pro4').style.display="none"
  document.querySelector('#pro5').style.display="none"
  document.querySelector('#pro1').style.display="none"
  document.querySelector('form').style.display="block"
});