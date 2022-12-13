'use strict'

export default class Timer {
	constructor() {
		this.seconds = 30;
		this.milliseconds = 99;
		this.intervalId;
	}

	startTimer() {
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this._timer.bind(this), 10);
	}

	_timer() {
		
		this.milliseconds--
	
		if(this.milliseconds < 1) {
			this.milliseconds = 99;
			this.seconds--;
			this.renderTime(this.seconds);
		}
	
		if(this.seconds < 1) {
			this.stopTimer();
			clearInterval(this.intervalId);
			//TODO Всплытие окна об окончании хода,
			//в место времени кнопка следующий ход
		}
	}

	renderTime(time) {
		const timerContainer = document.querySelector('.timer');
		//Подсветка при окончании таймера
		if(time <= 5) {
			timerContainer.style.color = "red";
		}
		timerContainer.textContent = time;
	}

	pauseTimer() {
		clearInterval(this.intervalId)
	}

	stopTimer() {
		console.log('время таймера кончилось');
	}
}