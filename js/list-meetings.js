const listMeeting = document.getElementById('list-meetings');

listMeeting.innerHTML = /*html*/`<h4>Mis reuniones.</h4>
    <select name="select">
        <option value="value1">Value 1</option>
        <option value="value2" selected>Value 2</option>
        <option value="value3">Value 3</option>
    </select>
    <div class="list-meetings-items" id="list-meetings-items">
        <div class="meeting-item" id="meeting-item">
        <p class="meeting-item-date">17 - septiembre, 2021</p>
        <div class="meeting-item-container">
            <div class="meeting-item-info">
            <div class="meeting-item-desc">
                <h5 class="meeting-item-title">Jam</h5>
                <p>Lluvia de ideas para Luxi</p>
                <p>Duración: 1.5 hrs aprox.</p>
            </div>
            <div class="meeting-item-obs">
                <p>Observaciones: Por zoom</p>
            </div>
            </div>
            <div class="meeting-item-actions">
            <a id="vote" href=""><img src="../assets/img/bell.svg" alt=""></a>
            <a id="more" href=""><img src="../assets/img/menu.svg" alt=""></a>
            </div>
        </div>
        </div>
    </div>`;