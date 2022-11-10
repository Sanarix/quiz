export default function menuHandler(context: any) {
	let buttons: HTMLCollectionBase = document.querySelectorAll('.btn-menu');
	let buttonNext: HTMLButtonElement = document.querySelector('.btn-next');

	for(let button of buttons) {
		button.addEventListener('click', (e: any) => {
			context.currentSlide++;
			context.init();
			if(e.currentTarget.dataset.mode) {
				context.mode = e.currentTarget.dataset.mode
			}
			if(e.currentTarget.dataset.coast) {
				console.log(e.currentTarget.dataset.coast);
				
			}
		})
	}

	if(context.mode === 'dual') {
		document.querySelector('.dual').classList.remove('hide');
	}
}