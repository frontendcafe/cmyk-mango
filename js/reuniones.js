const listMeeting = document.getElementById('reuniones');

listMeeting.innerHTML = /*html*/`<h1>Mis reuniones</h1>
    <div class="line"></div>
    <select name="select">
        <option class="select-item" value="Agosto">Agosto</option>
        <option class="select-item" value="Septiembre" selected>Septiembre</option>
        <option class="select-item" value="Octubre">Octubre</option>
    </select>
    <div class="reuniones-items" id="reuniones-items">
        <div class="meeting-item" id="meeting-item">
            <p class="meeting-item-date">17 - septiembre, 2021</p>
            <div class="meeting-item-container">
                <div class="meeting-item-info">
                <div class="meeting-item-description">
                    <h5 class="meeting-item-title">Jam</h5>
                    <p>Lluvia de ideas para Luxi</p>
                    <p>Duración: 1.5 hrs aprox.</p>
                </div>
                <div class="line-vertical"></div>
                <div class="meeting-item-observation">
                    <p>Observaciones: Por zoom</p>
                </div>
                </div>
                <div class="meeting-item-actions">
                <a id="vote" href=""><img src="../assets/img/check.svg" alt=""></a>
                <a id="more" href=""><img src="../assets/img/arrow.svg" alt=""></a>
                </div>
            </div>
        </div>
        <div class="meeting-item" id="meeting-item">
            <p class="meeting-item-date">17 - septiembre, 2021</p>
            <div class="meeting-item-container">
                <div class="meeting-item-info">
                <div class="meeting-item-description">
                    <h5 class="meeting-item-title">Jam</h5>
                    <p>Lluvia de ideas para Luxi</p>
                    <p>Duración: 1.5 hrs aprox.</p>
                </div>
                <div class="line-vertical"></div>
                <div class="meeting-item-observation">
                    <p>Observaciones: Por zoom</p>
                </div>
                </div>
                <div class="meeting-item-actions">
                    <p class="votes">4 <br>votos</p>
                    <a id="more" href=""><img src="../assets/img/arrow.svg" alt=""></a>
                </div>
            </div>
        </div>
    </div>
    <div class="btn-container">
        <button class="btn-secondary">Nueva Reunión</button>
        <button class="btn-empty">Mi Perfil</button>
    </div>`;