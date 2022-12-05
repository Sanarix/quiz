export default class Step {
	constructor(player1, player2) {
		this.player1 = player1;
		this.player2 = player2 || null;
		this.respondingPlayer = player1;
	}

	next(gameAnswerEn, gameAnswerRu, playerAnswer) {
		console.log('обработка ответа');
		if(this.checkAnswer(gameAnswerEn, gameAnswerRu, playerAnswer)) {
			//добавить очки отвечавшему, вывести модалку о переходе хода
			//сменить отвечающего игрока
		}
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