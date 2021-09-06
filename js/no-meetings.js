const noMeeting = document.getElementById('no-meeting');

noMeeting.innerHTML = `
    <h4>Aún no tienes reuniones programadas.</h4>
    <div class="create-meeting">
        <h5>Crea tu primera reunión</h5>
    </div>
    <button class="btn-secondary" href="">Nueva Reunión</button>
    `;

const newMeetingButton = noMeeting.getElementsByClassName('btn-secondary')[0];

// function esconderTodos(mostrar) {
//   noMeeting.style.display = "none";
//   listMeetings.style.display = "flex";
// }

newMeetingButton.addEventListener('click', function (e) {
  e.preventDefault();
  mostrarSolo("list-meetings");
});