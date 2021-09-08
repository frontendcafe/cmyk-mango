const formularioLogin = document.getElementById("formulario-login");
formularioLogin.innerHTML = /* html */ `
  <div class="form-header">
    <h3 class="form__title">¡Bievenidx!</h3>
    <p class="form__description">Ingresa a tu cuenta</p>
  </div>
  <form action="#" class="form">


    <div class="form-group">
      <label class="form-group__label">Correo electrónico</label>
      <input type="text" class="form-group__input">
      <label class="form-group__label">Contraseña</label>
      <input type="password" class="form-group__input">
    </div>

    <a href="#" class="link link--margin">Olvidaste tu contraseña?</a>
    <button class="form__button">Log in</button>
  </form>
  <div class="form-footer">
    <p class="form-footer__p">¿No tenés cuenta?</p><a href="#" class="link">Crear cuenta</a>
  </div>
`;