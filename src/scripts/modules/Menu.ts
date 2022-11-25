import menuHandler from '../functions/menuHandler'
import Game from '../modules/Game'

interface ISettings {
	mode: string;
	player1: string;
	player2: string;
	currentCoast: number;
}

export default class Menu {

	private field: HTMLElement;
	private mode: string;
	private player1: string;
	private player2: string;
	private orderSlides: Array<Function>;
	private currentSlide: number;
	private coast: number;
	private game: Game;

	constructor() {
		this.field = document.querySelector('.game-field');
		this.mode;
		this.player1 = null;
		this.player2 = null;
		this.orderSlides = [
												this.slideStart,
												this.slideMode, 
												this.slideNickname, 
												this.slideCoast
											];
		this.currentSlide = 1;
		this.coast = null;
		this.game = new Game();
	}

	init(){
			if(this.orderSlides.length > this.currentSlide) {
				this.render(this.orderSlides[this.currentSlide])
				menuHandler(this);
			}else {
				let settings: ISettings = {
					mode: this.mode,
					player1: this.player1,
					player2: this.player2,
					currentCoast: +this.coast,
				}
				this.game.start(this.field, settings)
		}
	}

	render(slide: Function) {
		this.field.innerHTML = slide();
	}

	slideStart() {
		return `<button class="btn btn-start">Играть</button>`
	}

	slideMode() {
		return `
		<div class="menu">
			<div class="row">
				<h2 class="menu-mode_header">Режим игры</h2>
			</div>
			<!--row-->
			<div class="row buttons-mode d-flex">
				<div class="col col-4">
					<button class="btn btn-menu" data-mode="single">
						Одиночный
					</button>
				</div>
				<!--col-->
				<div class="col col-4">
					<button class="btn btn-menu" data-mode="dual">
						Два игрока
					</button>
				</div>
				<!--col-->
			</div>
			<!--row-->
		</div>
		<!--game-->
		`
	}

	slideNickname() {
		return `
		<div class="menu">
			<h2 class="menu-mode_header">Введите имя</h2>
			<div class="row">
				<div class="col flex-column">
					<label for="text" class="input-label">Игрок 1</label>
					<div class="nickname-wrapper">
						<input type="text" class="nickname-1" placeholder="Ваше имя">
					</div>
				</div>
				<!--col-->
				<div class="col flex-column dual hide">
					<label for="text" class="input-label">Игрок 2</label>
					<div class="nickname-wrapper">
						<input type="text" class="nickname-2" placeholder="Ваше имя">
					</div>
				</div>
				<!--col-->
			</div>
			<!--row-->
			<div class="row mt-4">
				<button class="btn btn-menu btn-nick">Дальше</button>
			</div>
			<!--row-->
		</div>
		<!--game-->
		`
	}

	slideCoast() {
		return `
		<div class="menu">
			<div class="container d-flex flex-column">
				<h2 class="menu-mode_header">
					Выберите начальную стоимость вопроса
				</h2>	
				<div class="container">
					<div class="buttons">
						<button class="btn btn-menu" data-coast=200>200</button>
						<button class="btn btn-menu" data-coast=300>300</button>
						<button class="btn btn-menu" data-coast=400>400</button>
						<button class="btn btn-menu" data-coast=500>500</button>
						<button class="btn btn-menu" data-coast=600>600</button>
					</div>
					<!--buttons-->
				</div>
				<!--container-->
			</div>
			<!--container-->
		</div>
		<!--game-->
		`
	}
}