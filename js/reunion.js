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
  const opcionesHoras = info.meeting.options;
  const countries = info.meeting.locations;
  const participants = info.meeting.participants;
  const title = info.meeting.title;

  reunionTitle.innerHTML = title;
  countries.map((country) => {
    countryOption.innerHTML += `<div class="country">
        <img src="assets/img/clock.svg" alt="icono reloj" />
        <p>${country}</p>
      </div>`;
  });

  opcionesHoras.map((option, index) => {
    timeOptions.innerHTML += `<label class="label-option" for="opcion${
      index + 1
    }">Opción ${index + 1}<div class="time-option"><div class="flecha">${
      option.votes
    }/${participants.length}</div>`;
    let timeOption = document.querySelector('.time-option');
    option.hours.map((elemento) => {
      console.log(elemento);
      timeOption.innerHTML += `
          <div class="time">
            <div class="line"></div>
            <div class="hour">${elemento}</div>
          </div>
          `;
    });
    timeOptions.innerHTML += `
    </div>`;
  });
}
