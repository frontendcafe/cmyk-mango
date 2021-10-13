const navigation = /*html*/ `
  <!-- Header -->
  <header class="container header">
    <h2 class="logo">Mango</h2>
    <div class="icons-nav">
      <a id="bell" href=""
        ><img src="../assets/img/bell.svg" alt="Notificaciones"
      /></a>
      <a id="menu" href=""><img src="../assets/img/menu.svg" alt="Menu" /></a>
    </div>
  </header>
  <!-- Nav -->
  <nav class="nav">
    <h2>MANGO</h2>
    <ul class="menu">
      <li><a href="">Acerca del proyecto</a></li>
      <li><a href="">Nueva Reunión</a></li>
      <li><a href="">Mi perfil</a></li>
      <li><a href="">Mis reuniones</a></li>
      <li><button>Log Out</button></li>
    </ul>
  </nav>
`;

const navigationElement = document.getElementById('navigation');
navigationElement.innerHTML = navigation;

const menu = document.querySelector('#menu');
const nav = document.querySelector('.nav');
//const list = document.querySelectorAll('.menu li');

menu.addEventListener('click', function (e) {
  console.log('menu');
  e.preventDefault();
  nav.classList.toggle('visible');
});
