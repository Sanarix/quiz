export default class Step {
	constructor(player1, player2, Modal, Timer) {
		this.player1 = player1;
		this.player2 = player2 || null;
		this.respondingPlayer = player1;
		this.Modal = Modal
		this.Timer = Timer;
		this.correctAnswer;
	}

	next(gameAnswerEn, gameAnswerRu, playerAnswer) {
		if(this.checkAnswer(gameAnswerEn, gameAnswerRu, playerAnswer)) {
			this.openStepModal()
			//добавить очки отвечавшему, вывести модалку о переходе хода
			//сменить отвечающего игрока
		} else {
			const message = `
				<p>
					Правильный ответ на английском:
				</p>
				<p>
					${gameAnswerEn}
				</p>
				<p>
					На русском: 
				</p>
				<p>
					${gameAnswerRu}
				</p>
			`
			this.openStepModal(message)
		}
	}

	openStepModal(message) {
		const header = 'Конец хода';
		const body = `
			Ответ ${this.correctAnswer? 'верный' : 'неверный'}.
			${this.correctAnswer? '': message}
		`;

		this.Modal.renderModal(header, body);
		this.Modal.open(this.Timer);
	}

	changeRespondingPlayer() {
		this.respondingPlayer === this.player1? this.player2 : this.player1;
	}

	checkAnswer(gameAnswerEn, gameAnswerRu, playerAnswer) {
		console.log(gameAnswerEn);
		console.log(gameAnswerRu);
		console.log(playerAnswer);
		if(playerAnswer.toLowerCase() === gameAnswerEn.toLowerCase() 
			|| playerAnswer.toLowerCase() === gameAnswerRu.toLowerCase()
			) {
				this.correctAnswer = true;
				return true
			} else {
				this.correctAnswer = false;
				return false
			}
	}
}