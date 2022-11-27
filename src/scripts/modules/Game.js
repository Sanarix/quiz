var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import QuestionRequest from './QuestionRequest';
import requestHandler from '../functions/requestHandler';
import TranslateRequest from './TranslateRequest';
import gameHandler from '../functions/gameHandler';
export default class Game {
    constructor() {
        this.QuestionRequest = new QuestionRequest();
        this.TranslateRequest = new TranslateRequest();
        this.score1 = 0;
        this.score2 = 0;
        this.question = '';
        this.answer = '';
        this.settings;
    }
    start(element, settings) {
        this.settings = settings;
        this.renderGame(element, settings, this.score1, this.score2);
        this.setActiveCoastButton(this.settings);
        this.nextQuestion(settings);
    }
    nextQuestion(settings) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield this.QuestionRequest.request(settings.currentCoast).
                then((json) => { return requestHandler(json, settings.currentCoast); }).then((result) => {
                this.question = result.question;
                this.answer = result.answer;
                document.querySelector('.question').textContent = this.question;
            });
            gameHandler(this, this.settings);
            //Временно отключен перевод из за лимита запросов в месяц 11/500
            // this.TranslateRequest.request(this.question, this.answer);
        });
    }
    setActiveCoastButton(settings) {
        const buttonBlock = document.querySelector('.button-block');
        for (let button of buttonBlock.children) {
            if (+button.textContent === settings.currentCoast) {
                button.classList.add('active');
            }
        }
    }
    stop() { }
    renderGame(element, settings, score1, score2) {
        element.innerHTML = `
		<div class="game"> 
			<div class="game-body">
				<div class="control">
				<h2 class="game-menu_header">Выберите стоимость вопроса</h2>
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
					<div class="timer">${'23'}</div>
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
					<div class="container answer">
						<input type="text" class="answer" placeholder="Введите ответ">
						<div class="btn-container">
							<button class="btn-interface submit">Ответить!</button>
							<button class="btn-interface giveup">Передать ход</button>
						</div>
						<!--btn-container-->
					</div>
					<!--container answer-->
					<div class="row players-score">
						<div class="scores">
							<div class="score-1">${settings.player1 + ':'} <span class="pscore-1">${score1}</span></div>
							<div class="score-2">${settings.player2 ? settings.player2 + ':' : ''} <span class="pscore-2">${settings.player2 ? score2 : ''}</span></div>
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
		`;
    }
}
