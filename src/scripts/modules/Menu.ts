import menuHandler from '../functions/menuHandler'

interface IMenuSettings {
	gamemode: string;
}

export default class Menu {

	private field: HTMLElement;
	private mode: string;
	private player1: string;
	private player2: string;
	private orderSlides: Array<Function>;
	private currentSlide: number;

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
	}

	init() {
		if(this.orderSlides.length > this.currentSlide) {
			this.field.innerHTML = '';
			this.render(this.orderSlides[this.currentSlide])
			menuHandler(this);
		}else {
			return
		}
	}

	render(slide: Function) {
		this.field.innerHTML = slide();
	}

	slideStart() {
		return `<button class="btn btn-start">Play</button>`
	}

	slideMode() {
		return `
			<div class="row">
				<h2 class="menu-mode_header">Game mode</h2>
			</div>
			<!--row-->
			<div class="row">
				<div class="col col-4">
					<button class="btn btn-menu" data-mode="single">
						Single player
					</button>
				</div>
				<!--col-->
				<div class="col col-4">
					<button class="btn btn-menu" data-mode="dual">
						Dual player
					</button>
				</div>
				<!--col-->
			</div>
			<!--row-->
		`
	}

	slideNickname() {
		return `
		<h2 class="menu-mode_header">Enter nickname</h2>
		<div class="row">
			<div class="col flex-column">
				<label for="text" class="input-label">Player 1</label>
				<input type="text" class="nickname-1" placeholder="Nickname">
			</div>
			<!--col-->
			<div class="col flex-column dual hide">
				<label for="text" class="input-label">Player 2</label>
				<input type="text" class="nickname-2" placeholder="Nickname">
			</div>
			<!--col-->
		</div>
		<!--row-->
		<div class="row mt-4">
			<button class="btn btn-menu">Next</button>
		</div>
		<!--row-->
		`
	}

	slideCoast() {
		return `
		<div class="container d-flex flex-column">
			<h2 class="menu-mode_header">
				Which start coast of question?
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
		`
	}
}