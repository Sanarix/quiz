export default class Step {
	constructor(player1, player2, Game) {
		this.player1 = player1;
		this.player2 = player2 || null;
		this.respondingPlayer = player1;
		this.Game = Game;
		this.Modal = Game.Modal
		this.Timer = Game.Timer;
		this.correctAnswer;
	}

	next(gameAnswerEn, gameAnswerRu, playerAnswer) {
		if(this.checkAnswer(gameAnswerEn, gameAnswerRu, playerAnswer)) {
				this.openStepModal()
				this.accrualPoints();
				this.Game.stepFlag = true;
				this.changeRespondingPlayer();
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
		this.respondingPlayer === this.player1 ? this.respondingPlayer = this.player2 : this.respondingPlayer = this.player1;
		this.Game.respondingPlayer = this.respondingPlayer;
		this.Game.refreshRespondingPlayer();
	}

	checkAnswer(gameAnswerEn, gameAnswerRu, playerAnswer) {
		if(playerAnswer 
			&& playerAnswer.toLowerCase() === gameAnswerEn.toLowerCase() 
			|| playerAnswer.toLowerCase() === gameAnswerRu.toLowerCase()
			) {
				this.correctAnswer = true;
				return true
			} else {
				this.correctAnswer = false;
				return false
			}
	}

	accrualPoints() {
		if(this.respondingPlayer === this.player1) {
			this.Game.score1 += this.Game.settings.currentCoast;
		}else {
			this.Game.score2 += this.Game.settings.currentCoast;
		}
		this.Game.refreshScore();
	}
}