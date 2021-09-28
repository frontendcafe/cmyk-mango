import { login } from './api/auth.js';

const formularioLogin = document.getElementById('formulario-login');
formularioLogin.innerHTML = /* html */ `
  <div class="form-header">
    <h1 class="form__title">¡Bienvenidx!</h1>
    <p class="form__description">Ingresa a tu cuenta</p>
  </div>

  <form class="form" id="login-form">
    <div class="form-group">
    <p id='formError'></p>
      <label class="form-group__label">Correo electrónico</label>
      <input type="text" class="form-group__input" id="login-email">
      <label class="form-group__label">Contraseña</label>
      <input type="password" class="form-group__input" id="login-password">
    </div>
    <a href="#" class="link link--margin">Olvidaste tu contraseña?</a>
    <button type="submit" class="form__button">Log in</button>
  </form>

  <div class="form-footer">
    <p class="form-footer__p">¿No tenés cuenta?</p><p id="crear-cuenta" class="link">Crear cuenta</p>
  </div>
`;
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('#login-email').value;
  const password = document.querySelector('#login-password').value;

  login(email, password)
    .then((response) => {
      location.href = 'reuniones.html';
    })
    .catch((err) => {
      const errorMessage = err.message;
      const p = document.getElementById('formError');
      p.innerHTML = errorMessage;
    });
});
