export default function gameHandler(Game: any, settings: Object) {
	const buttonBlock = document.querySelector('.button-block');
	const langButtons = document.querySelector('.lang');
	const buttonRules = document.querySelector('.btn-rules');
	const buttonHint = document.querySelector('.hint');
	const submitButton = document.querySelector('.submit');
	const answerContainer: HTMLInputElement = document.querySelector('.answer');

	//Вывод вопроса в соответствии с выбранным языком
	if(Game.lang === 'en') {
		document.querySelector('.question').textContent = Game.question;
	} else if (Game.lang === 'ru') {
		document.querySelector('.question').textContent = Game.questionRu;
	}else {
		throw new Error('Произошла ошибка. Неправильно определён язык');
	}

	//Присваиваем стоимость вопроса, и делаем активной кнопку
	buttonBlock.addEventListener('click', (e: any) => {
		const target = e.target;
		if(!Game.stepFlag) {
			return
		}
		if(target.classList.contains('btn-mode')) {
			Game.settings.currentCoast = +target.textContent;
			resetActiveButtons(buttonBlock);
			target.classList.add('active');
		}
	})

	//
	langButtons.addEventListener('click', (e: any) => {
		//Игнорируем нажатие на подсказку
		const target = e.target;
		if(target.textContent ==='?') {
			return
		}

		//При нажатии на кнопку английского выводим запрос на англ., иначе на рус
		if(target.textContent === 'en') {
			document.querySelector('.question').textContent = Game.question;
		}else {
			document.querySelector('.question').textContent = Game.questionRu;
		}
		//При нажатии на выбранную кнопку, игнорируем
		if(target.textContent === Game.lang) {
			return
		}

		if(target.classList.contains('lang-button')) {
			resetActiveButtons(langButtons);
			target.classList.add('active')
			Game.lang = target.textContent;
		}
	})

	function resetActiveButtons(container: Element) {
		for(let button of container.children) {
			if(button.classList.contains('active')) {
				button.classList.remove('active')
			}
		}
	}

	buttonRules.addEventListener('click', Game.renderRules.bind(Game));
	buttonHint.addEventListener('click', Game.renderHint.bind(Game));
	submitButton.addEventListener('click', () => {
		if(answerContainer.value) {
			Game.Step.next(Game.answer, Game.answerRu, answerContainer.value)
		}else {
			console.log('Всплытие оповещения о вводе ответа');
		}
	});
}