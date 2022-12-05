export default function menuHandler(Menu: any) {
	let buttons: HTMLCollectionBase = document.querySelectorAll('.btn-menu');
	
	if(!Menu.singleMode) {
		if(document.querySelector('.dual')) {
			document.querySelector('.dual').classList.remove('hide');
		}
	}

	for(let button of buttons) {
		button.addEventListener('click', (e: any) => {
			//Меняем режим игры при нажатии кнопки "Два игрока"
			if(e.currentTarget.dataset.mode === 'dual') {
				Menu.singleMode = false;
			}
			//При переходе к вводу ников определяем их инпуты
			if(e.currentTarget.classList.contains('btn-nick')) {
				const nickname1: HTMLInputElement = document.querySelector('.nickname-1');
				const nickname2: HTMLInputElement = document.querySelector('.nickname-2');
				//Подсветка ников если не введён хотябы один символ
				if(!nickname1.value) {
					nickname1.parentElement.classList.add('highlight');
					setTimeout(() => {
						nickname1.parentElement.classList.remove('highlight');
					}, 1600);
					return
					//При наличии второй строки для имени проверяем её на заполненость
				}else if(!Menu.singleMode && !nickname2.value) {
					nickname2.parentElement.classList.add('highlight');
					setTimeout(() => {
						nickname2.parentElement.classList.remove('highlight');
					}, 1600);
					return
				}else {
					Menu.player1 = nickname1.value;
					Menu.player2 = nickname2.value;
				}
				
			}
			//Назначаем стартовую цену вопроса
			if(e.currentTarget.dataset.coast) {
				Menu.coast = e.currentTarget.dataset.coast;
			}
				Menu.currentSlide++;
				Menu.init();
		})
	}
}