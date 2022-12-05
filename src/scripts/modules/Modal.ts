import componentHide from "../functions/componentHide";

export default class Modal {
	private wrapper: HTMLObjectElement;
	private closeButton: HTMLObjectElement;
	private Game: any;

	constructor(Game: any) {
		this.wrapper = document.querySelector('.modal-wrapper');
		this.closeButton = this.wrapper.querySelector('.close');
		this.Game = Game;
	}

	renderModal(headerText: string, bodyText: string) {
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
		this.closeButton.addEventListener('click', () => {this.close(this.Game)});
	}

	open(Game: any) {
		this.wrapper.classList.remove('hide')
		Game.Timer.pauseTimer();
	}

	close(Game: any) {
		componentHide(this.wrapper)
		Game.Timer.startTimer();
	}
}