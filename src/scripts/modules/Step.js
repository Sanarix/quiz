export default class Step {
	constructor(player1, player2, Modal, Timer) {
		this.player1 = player1;
		this.player2 = player2 || null;
		this.respondingPlayer = player1;
		this.Modal = Modal
		this.Timer = Timer;
	}

	next(gameAnswerEn, gameAnswerRu, playerAnswer) {
		if(this.checkAnswer(gameAnswerEn, gameAnswerRu, playerAnswer)) {
			this.openStepModal()
			//добавить очки отвечавшему, вывести модалку о переходе хода
			//сменить отвечающего игрока
		}
	}

	openStepModal() {
		const header = 'Конец хода';
		const message = 'Ход передаётся дальше'
		const body = `
			Ответ ${'верный'}.
			${message}
		`;

		this.Modal.renderModal(header, body);
		console.log(this.Timer);
		this.Modal.open(this.Timer);
	}

	changeRespondingPlayer() {
		this.respondingPlayer === this.player1? this.player2 : this.player1;
	}

	checkAnswer(gameAnswerEn, gameAnswerRu, playerAnswer) {
		if(playerAnswer.toLowerCase() === gameAnswerEn.toLowerCase() 
			|| playerAnswer.toLowerCase() === gameAnswerRu.toLowerCase()
			) {
				return true
			} else {
				return false
			}
	}
}