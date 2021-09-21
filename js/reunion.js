import { getMeeting } from './api/meetings.js';

var url = new URL(window.location);

const searchParams1 = new URLSearchParams(url.search);
const param = searchParams1.get('meetingId');

const meetInfo = async () => {
  const meet = await getMeeting(param);
  buildInfo(meet);
};

const countryOption = document.querySelector('#country-option');
const reunionTitle = document.querySelector('#reunion-title');
const timeOptions = document.querySelector('#time-options');

meetInfo();
function buildInfo(info) {
  const horas = info.meeting.datetime;
  const countries = info.meeting.locations;
  const title = info.meeting.title;

  reunionTitle.innerHTML = title;
  countries.map((country) => {
    console.log(country);
    countryOption.innerHTML += `<div class="country">
        <img src="assets/img/clock.svg" alt="icono reloj" />
        <p>${country}</p>
      </div>`;
  });

  horas.map((hora) => {
    timeOptions.innerHTML += `<label for="opcion1"
      >Opción 1
      <div class="time-option">
      <div class="time">
        <div class="line"></div>
        <div class="hour">${hora.seconds}</div>
      </div>
      <div class="time">
        <div class="line"></div>
        <div class="hour">${hora.seconds}</div>
      </div>
       
        <div class="flecha">2/5</div>
      </div>`;
  });
}
