export default function gameHandler(context: any, settings: Object) {
	const buttonBlock = document.querySelector('.button-block');
	const buttonRules = document.querySelector('.btn-rules');

	buttonBlock.addEventListener('click', (e: any) => {
		const target = e.target;
		if(target.classList.contains('btn-mode')) {
			context.settings.currentCoast = +target.textContent;
			for(let button of buttonBlock.children) {
				if(button.classList.contains('active')) {
					button.classList.remove('active');
				}
			}
			target.classList.add('active');
		}
	})

	buttonRules.addEventListener('click', context.renderRules.bind(context));
}