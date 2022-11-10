export default function menuHandler(context) {
    let buttons = document.querySelectorAll('.btn-menu');
    let buttonNext = document.querySelector('.btn-next');
    let flag = true;
    for (let button of buttons) {
        button.addEventListener('click', (e) => {
            context.currentSlide++;
            if (e.currentTarget.dataset.mode) {
                context.mode = e.currentTarget.dataset.mode;
                if (context.mode === 'dual') {
                    document.querySelector('.dual').classList.remove('hide');
                }
            }
            if (e.currentTarget.classList.contains('btn-nick')) {
                const nickname1 = document.querySelector('.nickname-1');
                const nickname2 = document.querySelector('.nickname-2');
                context.player1 = nickname1.value;
                context.player2 = nickname2.value;
            }
            if (e.currentTarget.dataset.coast) {
                context.coast = e.currentTarget.dataset.coast;
                flag = false;
            }
            context.init();
        });
    }
}
