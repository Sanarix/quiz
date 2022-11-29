import QuestionRequest from './QuestionRequest'
import requestHandler from '../functions/requestHandler'
import TranslateRequest from './TranslateRequest'
import gameHandler from '../functions/gameHandler'
import Timer from '../modules/Timer'
import Modal from '../modules/Modal'

interface ISettings {
	mode: string;
	player1: string;
	player2: string;
	currentCoast: number;
}

export default class Game {

	private QuestionRequest: QuestionRequest;
	private TranslateRequest: TranslateRequest;
	private score1: number;
	private score2: number;
	private question: string;
	private answer: string;
	private settings: ISettings;
	private Timer: Timer;
	private Modal: Modal;

	constructor() {
		this.QuestionRequest = new QuestionRequest();
		this.TranslateRequest = new TranslateRequest();
		this.Timer = new Timer();
		this.score1 = 0;
		this.score2 = 0;
		this.question = '';
		this.answer = '';
		this.settings;
		this.Modal = new Modal();
	}

	start(element: HTMLElement, settings: ISettings) {
		this.settings = settings;
		this.renderGame(element, settings, this.score1, this.score2);
		this.setActiveCoastButton(this.settings);
		this.nextQuestion(settings);
	}

	async nextQuestion(settings: ISettings) {
		let data = await this.QuestionRequest.request(settings.currentCoast).
		then((json) => {return requestHandler(json, settings.currentCoast)}).then((result: any) => {
			this.question = result.question;
			this.answer = result.answer;
			document.querySelector('.question').textContent = this.question;
		});
		this.startTimer();
		gameHandler(this, this.settings)
		//Временно отключен перевод из за лимита запросов в месяц 11/500
		// this.TranslateRequest.request(this.question, this.answer);
	}

	setActiveCoastButton(settings: ISettings) {
		const buttonBlock = document.querySelector('.button-block');

		for(let button of buttonBlock.children) {
			if(+button.textContent === settings.currentCoast) {
				button.classList.add('active');
			}
		}
	}

	startTimer() {
		this.Timer.startTimer();
	}

	renderRules() {
		const header = 'Правила игры';
		const body = `
		Описание правил со скриншотами важных мест
		`;
		this.Modal.renderModal(header, body);
		this.Modal.open();
	}

	renderGame(element: HTMLElement, settings: any, score1: number, score2: number) {
		element.innerHTML = `
		<div class="game"> 
			<div class="game-body">
				<div class="control">
				<h2 class="control-header">Выберите стоимость вопроса</h2>
				<div class="button-block">
					<div class="btn-mode">200</div>
					<div class="btn-mode">300</div>
					<div class="btn-mode">400</div>
					<div class="btn-mode">500</div>
					<div class="btn-mode">600</div>
				</div>
				<!--buttons-->
				<div class="rules">
					<button class="btn-rules">Правила игры</button>
				</div>
				<!---->
				</div>
				<!--control-->
				<div class="interface">
					<header class="container interface-header">
					<div class="current-player">Отвечает: ${'currentPlayer'}</div>
					<div class="timer">30</div>
					</header>
					<div class="question-container">
						<div class="question">
							Загружаем...
						</div>
						<!--question-->
						<div class="lang">
							<button class="lang-button active">en</button>
							<button class="lang-button">ru</button>
							<div class="hint">?</div>
						</div>
						<!--language-->
					</div>
					<!--question-container-->
					<div class="container answer-container">
						<input type="text" class="answer" placeholder="Введите ответ">
						<div class="buttons-container">
							<button class="btn-interface submit">Ответить!</button>
							<button class="btn-interface giveup">Передать ход</button>
						</div>
						<!--btn-container-->
					</div>
					<!--container answer-container-->
					<div class="row players-score">
						<div class="scores">
							<div class="score-1">${settings.player1 + ':'} <span class="pscore-1">${score1}</span></div>
							<div class="score-2">${settings.player2 ?settings.player2  + ':' : ''} <span class="pscore-2">${settings.player2 ? score2 : ''}</span></div>
						</div>
						<!--scores-->
					</div>
					<!--row players-score-->
				</div>
				<!--interface-->
			</div>
			<!--game-body-->
		</div>
		<!--game-->
		`
	}
}