let inc = document.getElementById('increment');
let number = document.getElementById('current');
let sub = document.getElementById('decrement');

let counter = 0;

inc.onclick = function(){
  counter++;
  number.textContent = counter;
};
sub.onclick = function(){
  counter--;
  number.textContent = counter;
};
