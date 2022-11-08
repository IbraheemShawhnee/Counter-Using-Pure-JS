const result = document.querySelector('#result');
const increase_Btn = document.querySelector('.increasebtn');
const decrease_Btn = document.querySelector('.decressbtn');
const rest_Btn = document.querySelector('.restbtn');
let count = 0;
increase_Btn.addEventListener("click", function (){

   result.innerHTML = ++count;
})
rest_Btn.addEventListener("click", function (){
  result.innerHTML= 0;
  count=0;
})
decrease_Btn.addEventListener("click", function (){
  result.innerHTML = --count;

})