const noMeeting = document.getElementById('no-meeting');

noMeeting.innerHTML = /*html*/ `
    <h4>Aún no tienes reuniones programadas.</h4>
    <div class="create-meeting">
        <h5>Crea tu primera reunión</h5>
    </div>
    <a class="btn-secondary" href="../reuniones.html">Nueva Reunión</a>
    `;

// const newMeetingButton = noMeeting.getElementsByClassName('btn-secondary')[0];

// newMeetingButton.addEventListener('click', function (e) {
//   e.preventDefault();

// });