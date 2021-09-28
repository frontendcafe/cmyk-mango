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

const mostrarSolo = (mostrar) => {
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
};
