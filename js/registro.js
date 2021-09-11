const formularioRegistro = document.getElementById("formulario-registro");
formularioRegistro.innerHTML = /* html */ `
  <div class="form-header">
    <h1 class="form-title">Bienvenidx a Mango</h3>
  </div>
  <form class="form">
    <div class="register">
    <label class="register-label">Nombre y apellido:</label>
    <input type="text" class="register-input">
    <label class="register-label">Correo electrónico:</label>
    <input type="text" class="register-input">
    <label class="register-label">Contraseña:</label>
    <input type="password" class="register-input">
    <label class="register-label">Ciudad, País:</label>
    <input type="text" class="register-input">
    </div>
    <button class="form-button">Regístrate</button>
    <p class="form-footer">Ya tenés una cuenta? <a href="#" class="to-login">Login</a>
  </form> 
  
`;
