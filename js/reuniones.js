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

// Show initial view
let viewMeetings = /*html*/`<h1>Mis reuniones</h1>
<div class="line"></div>
<select name="selectedMonth" id="selectedMonth">
    <option value="" selected disabled>Selecciona un mes...</option>
    <option class="selectedMonth-item" value="Agosto">Enero</option>
    <option class="selectedMonth-item" value="Agosto">Febrero</option>
    <option class="selectedMonth-item" value="Agosto">Marzo</option>
    <option class="selectedMonth-item" value="Agosto">Abril</option>
    <option class="selectedMonth-item" value="Agosto">Mayo</option>
    <option class="selectedMonth-item" value="Agosto">Junio</option>
    <option class="selectedMonth-item" value="Agosto">Julio</option>
    <option class="selectedMonth-item" value="Agosto">Agosto</option>
    <option class="selectedMonth-item" value="Septiembre">Septiembre</option>
    <option class="selectedMonth-item" value="Octubre">Octubre</option>
    <option class="selectedMonth-item" value="Agosto">Noviembre</option>
    <option class="selectedMonth-item" value="Agosto">Diciembre</option>
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

    const selectedValue = event.target.value;
    let selectedMonthNumber = '00';

    switch (selectedValue) {
        case 'Enero':
            selectedMonthNumber = '01';
            break;
        case 'Febrero':
            selectedMonthNumber = '02';
            break;
        case 'Marzo':
            selectedMonthNumber = '03';
            break;
        case 'Abril':
            selectedMonthNumber = '04';
            break;
        case 'Mayo':
            selectedMonthNumber = '05';
            break;
        case 'Junio':
            selectedMonthNumber = '06';
            break;
        case 'Julio':
            selectedMonthNumber = '07';
            break;
        case 'Agosto':
            selectedMonthNumber = '08';
            break;
        case 'Septiembre':
            selectedMonthNumber = '09';
            break;
        case 'Octubre':
            selectedMonthNumber = '10';
            break;
        case 'Noviembre':
            selectedMonthNumber = '11';
            break;
        case 'Diciembre':
            selectedMonthNumber = '12';
            break;
        default:
            selectedMonthNumber = null;
            break;
    }

    let concatenatedMeetings = '';

    const listOfMeetings = await getMeetings({ month: `2021-${selectedMonthNumber}` });

    if (listOfMeetings.meetings.length > 0) {

        listOfMeetings.meetings.forEach((element)=>{
            concatenatedMeetings = concatenatedMeetings + /*html*/`<div class="meeting-item" id="meeting-item">
                <p class="meeting-item-date">${element.datetime !== null && element.datetime !== undefined ? element.datetime.length > 0 ? element.datetime[[element.datetime.length - 1]].toDate().toDateString() : '' : '' }</p>
                <div class="meeting-item-container">
                    <div class="meeting-item-info">
                    <div class="meeting-item-description">
                        <h5 class="meeting-item-title">${element.title}</h5>
                        <p>${element.description}</p>
                        <p>Duración: ${element.duration}</p>
                    </div>
                    <div class="line-vertical"></div>
                    <div class="meeting-item-observation">
                        <p>Observaciones: ${element.observations}</p>
                    </div>
                    </div>
                    <div class="meeting-item-actions">
                    ${element.participants !== null && element.participants !== undefined ? element.participants.length > 0 ? `<p class="votes">${element.participants.length} <br>votos</p>` : `<a id="vote" href=""><img src="../assets/img/check.svg" alt=""></a>` : `<a id="vote" href=""><img src="../assets/img/check.svg" alt=""></a>`}
                    <a id="more" href=""><img src="../assets/img/arrow.svg" alt=""></a>
                    </div>
                </div>
            </div>`;
        });
    
        const listMeetingItemsHTML = document.getElementById('reuniones-items');
        listMeetingItemsHTML.innerHTML = concatenatedMeetings;

    } else {

        mostrarSolo('no-meeting');
           
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