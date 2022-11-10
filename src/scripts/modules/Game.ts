import Request from './Request'
import requestHandler from '../functions/requestHandler'

export default class Game {

	private Request: Request;
	private Score: number;
	private player1: string;
	private player2: string;
	private score1: number;
	private score2: number;
	private currentCoast: number;

	constructor() {
		this.Request = new Request('http://jservice.io/api/random?count=1');
		this.score1 = 0;
		this.score2 = 0;
	}

	async start(element: HTMLElement, settings: Object) {
		let data = await this.Request.request().
			then((json) => {return requestHandler(json)}).then((result: any) => {
				this.renderGameFrame(element, settings, this.score1, this.score2);
				document.querySelector('.question').textContent = result.question;
			});

	}

	stop() {}

	renderGameFrame(element: HTMLElement, settings: Object, score1: number, score2: number) {
		element.innerHTML = '';
		element.innerHTML = `
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
		<!--row-->
		<div class="container game-frame">
			<header class="container game-header">
				<div class="row players-score">
					<div class="scores">
						<div class="score-1">${settings["player1"] + ':'} <span class="pscore-1">${score1}</span></div>
						<div class="score-2">${settings["player2"] + ':' || ''} <span class="pscore-2">${score2}</span></div>
					</div>
					<!--players-score-->
				</div>
				<!--row players-score-->
			</header>
		<div class="question">
			Oops! Something went wrong
		</div>
		<!--question-->
		<div class="container answer">
			<input type="text" class="answer" placeholder="Enter your answer">
			<button class="btn btn-answer">Let's go!</button>
		</div>
		<!--container answer-->
	</div>
	<!--row coast-->
		`
	}
}