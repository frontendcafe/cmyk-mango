const menu = document.querySelector('#menu');
const nav = document.querySelector('.nav');
//const list = document.querySelectorAll('.menu li');

menu.addEventListener('click', function(e) {
    console.log('menu')
    e.preventDefault();
    nav.classList.toggle('visible');
  });
