import {getMeetings} from './api/meetings.js';

// IDs HTML elements to change css display value
const IDS_SECCIONES = ["reuniones", "no-meeting"];

// to save the initial state of the css display in window.onload
let diccionarioDisplaySecciones = {};

// hides the HTML ids it receives
const ocultarTodo = (idsSecciones) => {
    idsSecciones.map((id) => {
        const elemento = document.getElementById(id);
        elemento.style.display = "none";
    });
}

// Hides all the IDS_SECTIONS except the one it receives as a parameter
const mostrarSolo = (mostrar) => {
    ocultarTodo(IDS_SECCIONES);
    document.getElementById(mostrar).style.display = diccionarioDisplaySecciones[mostrar];
};

const months = dayjs.months();
const monthOptions = months.map((month, index) => {
  const monthNumber = index + 1;
  //const monthName = _.capitalize(month);
  const monthName = month.charAt(0).toUpperCase() + month.slice(1);
  return `<option class="selectedMonth-item" value="${monthNumber}">${monthName}</option>`;
});

// Show initial view
let viewMeetings = /*html*/`<h1>Mis reuniones</h1>
<div class="line"></div>
<select name="selectedMonth" id="selectedMonth">
    <option value="" selected disabled>Selecciona un mes...</option>
    ${monthOptions}
</select>
<div class="reuniones-items" id="reuniones-items"></div>
<div class="btn-container">
    <button class="btn-secondary">Nueva Reunión</button>
    <button class="btn-empty">Mi Perfil</button>
</div>`;

const listMeetingHTML = document.getElementById('reuniones');
listMeetingHTML.innerHTML = viewMeetings;

// Add functionality to the select element to search for meetings based on the selected month
const selectElement = document.getElementById('selectedMonth');

selectElement.addEventListener('change', async (event) => {

    try{

        const selectedMonth = event.target.value;
        const year = dayjs().year();

        let concatenatedMeetings = '';

        const listOfMeetings = await getMeetings({ month: `${year}-${selectedMonth}` });

        console.log(listOfMeetings);

        if (listOfMeetings.meetings.length > 0) {
            listOfMeetings.meetings.forEach((meeting)=>{
                concatenatedMeetings = concatenatedMeetings + /*html*/`<div class="meeting-item" id="meeting-item">
                    <p class="meeting-item-date">${meeting.datetime !== null && meeting.datetime !== undefined ? meeting.datetime.length > 0 ? meeting.datetime[[meeting.datetime.length - 1]].toDate().toDateString() : '' : '' }</p>
                    <div class="meeting-item-container">
                        <div class="meeting-item-info">
                        <div class="meeting-item-description">
                            <h5 class="meeting-item-title">${meeting.title}</h5>
                            <p>${meeting.description}</p>
                            <p>Duración: ${meeting.duration}</p>
                        </div>
                        <div class="line-vertical"></div>
                        <div class="meeting-item-observation">
                            <p>Observaciones: ${meeting.observations}</p>
                        </div>
                        </div>
                        <div class="meeting-item-actions">
                            ${meeting.participants !== null && meeting.participants !== undefined ? meeting.participants.length > 0 ? `<p class="votes">${meeting.participants.length} <br>votos</p>` : `<a id="vote" href=""><img src="../assets/img/check.svg" alt=""></a>` : `<a id="vote" href=""><img src="../assets/img/check.svg" alt=""></a>`}
                            <a id="more" href="./reunion.html?id=${meeting.id}"><img src="../assets/img/arrow.svg" alt=""></a>
                        </div>
                    </div>
                </div>`;
            });
        
            const listMeetingItemsHTML = document.getElementById('reuniones-items');
            listMeetingItemsHTML.innerHTML = concatenatedMeetings;

        } else {

            mostrarSolo('no-meeting');
            
        }

    } catch (error) {
       console.error(error);
   }

});

window.onload = function () {

    // save the initial state of the css display value
    IDS_SECCIONES.map((id) => {
        const elemento = document.getElementById(id);
        const display = getComputedStyle(elemento).display;

        diccionarioDisplaySecciones[id] = display;
    });

    mostrarSolo('reuniones');
}
