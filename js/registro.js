const formularioRegistro = document.getElementById('formulario-registro');
formularioRegistro.innerHTML = /* html */ `
  <div class="form-header">
    <h1 class="form-title">Bienvenidx a Mango</h3>
  </div>
  <form class="form">
    <div class="register">
    <label class="register-label">Nombre y apellido</label>
    <input type="text" class="register-input">
    <label class="register-label">Correo electrónico</label>
    <input type="text" class="register-input">
    <label class="register-label">Contraseña</label>
    <span class="password-reveal">
    <i class="far fa-eye"></i>
    <i class="far fa-eye-slash hide"></i>
    </span>
    <input type="password" class="register-input" id="password-input">
    <label class="register-label">Ciudad, País</label>
    <input type="text" class="register-input">
    </div>
    <button class="form-button">Regístrate</button>
    <p class="form-footer">Ya tenés una cuenta? <a href="#" class="to-login">Login</a>
  </form> 

`;

const passwordReveal = document.querySelector('.password-reveal');
passwordReveal.addEventListener('click', () => {
  const passwordInput = document.querySelector('#password-input');
  const showPassword = document.querySelector('.fa-eye');
  const hidePassword = document.querySelector('.fa-eye-slash');
  if (passwordInput.type === 'password') {
    showPassword.classList.add('hide');
    hidePassword.classList.remove('hide');
    passwordInput.type = 'text';
  } else {
    showPassword.classList.remove('hide');
    hidePassword.classList.add('hide');
    passwordInput.type = 'password';
  }
});
