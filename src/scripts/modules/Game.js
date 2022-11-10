var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Request from './Request';
import requestHandler from '../functions/requestHandler';
export default class Game {
    constructor() {
        this.Request = new Request('http://jservice.io/api/random?count=1');
        this.score1 = 0;
        this.score2 = 0;
    }
    start(element, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield this.Request.request().
                then((json) => { return requestHandler(json); }).then((result) => {
                this.renderGameFrame(element, settings, this.score1, this.score2);
                document.querySelector('.question').textContent = result.question;
            });
        });
    }
    stop() { }
    renderGameFrame(element, settings, score1, score2) {
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
		`;
    }
}
