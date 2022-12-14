import componentHide from "../functions/componentHide";
export default class Modal {
    constructor(Game) {
        this.wrapper = document.querySelector('.modal-wrapper');
        this.modal = document.querySelector('.modal');
        this.Game = Game;
    }
    renderModal(headerText, bodyText) {
        const modal = this.wrapper.querySelector('.modal-content');
        modal.innerHTML = '';
        const header = document.createElement('h3');
        const body = document.createElement('div');
        header.className = "modal-header";
        body.className = "modal-body";
        header.innerText = headerText;
        body.innerHTML = bodyText;
        modal.append(header);
        modal.append(body);
        //Закрываем модальное окно, передаём Game для включения таймера
        document.querySelector('.close').addEventListener('click', () => { this.close(this.Game); });
        document.querySelector('.modal-wrapper').addEventListener('click', () => {
            this.close(this.Game);
        });
    }
    open(Timer) {
        this.wrapper.classList.remove('hide');
        this.modal.classList.remove('hidden');
        Timer.pauseTimer();
    }
    close(Game) {
        this.modal.classList.add('hidden');
        setTimeout(() => { componentHide(this.wrapper); }, 300);
        Game.Timer.startTimer();
    }
}
