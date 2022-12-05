import componentHide from "../functions/componentHide";
export default class Modal {
    constructor(Game) {
        this.wrapper = document.querySelector('.modal-wrapper');
        this.closeButton = this.wrapper.querySelector('.close');
        this.Game = Game;
    }
    renderModal(headerText, bodyText) {
        const modal = this.wrapper.querySelector('.modal-content');
        modal.innerHTML = '';
        const head = document.createElement('h3');
        const body = document.createElement('div');
        head.className = "modal-header";
        body.className = "modal-body";
        head.innerText = headerText;
        body.innerHTML = bodyText;
        modal.append(head);
        modal.append(body);
        this.closeButton.addEventListener('click', () => { this.close(this.Game); });
    }
    open(Game) {
        this.wrapper.classList.remove('hide');
        Game.Timer.pauseTimer();
    }
    close(Game) {
        componentHide(this.wrapper);
        Game.Timer.startTimer();
    }
}
