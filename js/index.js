const IDS_SECCIONES = [
  'inicio',
  'formulario-login',
  'formulario-registro',
  'no-meeting',
];

let diccionarioDisplaySecciones = {};

const ocultarTodo = (idsSecciones) => {
  idsSecciones.map((id) => {
    const elemento = document.getElementById(id);
    elemento.style.display = 'none';
  });
};

export const mostrarSolo = (mostrar) => {
  // noMeeting.style.display = "flex";
  // botonesSesion.style.display = "none";
  ocultarTodo(IDS_SECCIONES);
  document.getElementById(mostrar).style.display =
    diccionarioDisplaySecciones[mostrar];
};

window.onload = function () {
  IDS_SECCIONES.map((id) => {
    const elemento = document.getElementById(id);
    const display = getComputedStyle(elemento).display;

    diccionarioDisplaySecciones[id] = display;
  });

  mostrarSolo('inicio');

  const login = document.getElementById('btn-login');
  const registro = document.getElementById('btn-registro');
  const crearCuenta = document.getElementById('crear-cuenta');

  login.addEventListener('click', (e) => {
    mostrarSolo('formulario-login');
  });
  registro.addEventListener('click', (e) => {
    mostrarSolo('formulario-registro');
  });
  crearCuenta.addEventListener('click', (e) => {
    mostrarSolo('formulario-registro');
  });
};
