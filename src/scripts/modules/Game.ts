import QuestionRequest from './QuestionRequest'
import requestHandler from '../functions/requestHandler'
import TranslateRequest from './TranslateRequest'
import gameHandler from '../functions/gameHandler'

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
	private settings: ISettings;

	constructor() {
		this.QuestionRequest = new QuestionRequest();
		this.TranslateRequest = new TranslateRequest();
		this.score1 = 0;
		this.score2 = 0;
		this.question = '';
		this.settings;
	}

	start(element: HTMLElement, settings: ISettings) {
		this.settings = settings;
		this.renderGame(element, settings, this.score1, this.score2);
		this.setActiveButton(this.settings);
		this.nextQuestion(settings);
	}

	async nextQuestion(settings: ISettings) {
		let data = await this.QuestionRequest.request(settings.currentCoast).
		then((json) => {return requestHandler(json, settings.currentCoast)}).then((result: any) => {
			this.question = result.question;
			document.querySelector('.question').textContent = this.question;
		});

		gameHandler(this, this.settings)
		//Временно отключен перевод из за лимита запросов в месяц 7/500
		// this.TranslateRequest.request(this.question);
	}

	setActiveButton(settings: ISettings) {
		const buttonBlock = document.querySelector('.button-block');

		for(let button of buttonBlock.children) {
			if(+button.textContent === settings.currentCoast) {
				button.classList.add('active');
			}
		}
	}

	stop() {}

	renderGame(element: HTMLElement, settings: any, score1: number, score2: number) {
		element.innerHTML = `
		<div class="game">
			<div class="row coast">
				<h2 class="game-menu_header">Choose coast of question</h2>
				<div class="button-block">
					<button class="btn btn-mode">200</button>
					<button class="btn btn-mode">300</button>
					<button class="btn btn-mode">400</button>
					<button class="btn btn-mode">500</button>
					<button class="btn btn-mode">600</button>
				</div>
				<!--buttons-->
			</div>
			<!--row coast-->
			<div class="container game-frame">
				<header class="container game-header">
				<!--TODO переместить-->
				</header>
				<div class="question">
					Waiting...
				</div>
				<!--question-->
				<div class="container answer">
					<input type="text" class="answer" placeholder="Enter your answer">
					<button class="btn btn-answer">Let's go!</button>
				</div>
				<!--container answer-->
				<div class="row players-score">
					<div class="scores">
						<div class="score-1">${settings.player1 + ':'} <span class="pscore-1">${score1}</span></div>
						<div class="score-2">${settings.player2 ?settings.player2  + ':' : ''} <span class="pscore-2">${settings.player2 ? score2 : ''}</span></div>
					</div>
					<!--scores-->
				</div>
				<!--row players-score-->
			</div>
			<!--container game-frame-->
		</div>
		<!--game-->
		`
	}
}