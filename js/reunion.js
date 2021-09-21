import { getMeeting } from './api/meetings.js';

var url = new URL(window.location);
//console.log(url);

const searchParams1 = new URLSearchParams(url.search);

const param = searchParams1.get('meetingId');

//console.log(searchParams1);
//console.log(param);

const meetInfo = async () => {
  const countryOption = document.querySelector('#country-option');
  const reunionTitle = document.querySelector('#reunion-title');
  const timeOptions = document.querySelector('#time-options');
  const meet = await getMeeting(param);

  console.log(meet.meeting);
  const horas = meet.meeting.datetime;
  console.log(horas);
  const countries = meet.meeting.locations;
  const title = meet.meeting.title;
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
};
meetInfo();
