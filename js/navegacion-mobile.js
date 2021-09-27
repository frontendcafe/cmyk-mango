// Show initial view
let mobileFooter = /*html*/ `<div class="icons-footer">
        <div>
            <a id="new-meeting" href="">
                <img src="../assets/img/new-meeting.svg" alt="Nueva reunión"/>
            </a>
            <p>Nueva reunión</p>
        </div>
        <div>
            <a id="perfil" href="">
                <img src="../assets/img/perfil.svg" alt="Perfil"/>
            </a>
            <p>Perfil</p>
        </div>
        <div>
            <a id="my-meetings" href="">
                <img src="../assets/img/my-meetings.svg" alt="Mis reuniones"/>
            </a>
            <p>Mis reuniones</p>
        </div>
    </div>`;

const listMeetingHTML = document.getElementById('mobile-navigation');
listMeetingHTML.innerHTML = mobileFooter;