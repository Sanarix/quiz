export default function menuHandler(context) {
    let buttons = document.querySelectorAll('.btn-menu');
    let buttonNext = document.querySelector('.btn-next');
    for (let button of buttons) {
        button.addEventListener('click', (e) => {
            context.currentSlide++;
            context.init();
            if (e.currentTarget.dataset.mode) {
                context.mode = e.currentTarget.dataset.mode;
            }
            if (e.currentTarget.dataset.coast) {
                console.log(e.currentTarget.dataset.coast);
            }
        });
    }
    if (context.mode === 'dual') {
        document.querySelector('.dual').classList.remove('hide');
    }
}
