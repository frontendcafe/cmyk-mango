import {getMeetings} from './api/meetings.js';

// Show initial view
let viewMeetings = /*html*/`<h1>Mis reuniones</h1>
<div class="line"></div>
<select name="selectedMonth" id="selectedMonth">
    <option value="" selected disabled>Selecciona un mes...</option>
    <option class="selectedMonth-item" value="Agosto">Agosto</option>
    <option class="selectedMonth-item" value="Septiembre">Septiembre</option>
    <option class="selectedMonth-item" value="Octubre">Octubre</option>
</select>
<div class="reuniones-items" id="reuniones-items"></div>
<div class="btn-container">
    <button class="btn-secondary">Nueva Reunión</button>
    <button class="btn-empty">Mi Perfil</button>
</div>`;

const listMeetingHTML = document.getElementById('reuniones');
listMeetingHTML.innerHTML = viewMeetings;

// Add functionality to the select element so that it searches for meetings depending on the selected month

const selectElement = document.getElementById('selectedMonth');

selectElement.addEventListener('change', async (event) => {

    const selectedValue = event.target.value;
    let selectedMonthNumber = '00';

    switch (selectedValue) {
        case 'Agosto':
            selectedMonthNumber = '08';
            break;
        case 'Septiembre':
            selectedMonthNumber = '09';
            break;
        case 'Octubre':
            selectedMonthNumber = '10';
            break;
        default:
            selectedMonthNumber = null;
            break;
    }

    let concatenatedMeetings = '';

    const listOfMeetings = await getMeetings({ month: `2021-${selectedMonthNumber}` });
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

    const listMeetingHTML = document.getElementById('reuniones-items');
    listMeetingHTML.innerHTML = concatenatedMeetings;
});