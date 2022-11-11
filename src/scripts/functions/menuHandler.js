export default function menuHandler(context) {
    let buttons = document.querySelectorAll('.btn-menu');
    if (context.mode === 'dual') {
        if (document.querySelector('.dual')) {
            document.querySelector('.dual').classList.remove('hide');
        }
    }
    for (let button of buttons) {
        button.addEventListener('click', (e) => {
            if (e.currentTarget.dataset.mode) {
                context.mode = e.currentTarget.dataset.mode;
            }
            if (e.currentTarget.classList.contains('btn-nick')) {
                const nickname1 = document.querySelector('.nickname-1');
                const nickname2 = document.querySelector('.nickname-2');
                if (!nickname1.value) {
                    nickname1.parentElement.classList.add('highlight');
                    setTimeout(() => {
                        nickname1.parentElement.classList.remove('highlight');
                    }, 1600);
                    return;
                }
                else if (context.mode === 'dual' && !nickname2.value) {
                    nickname2.parentElement.classList.add('highlight');
                    setTimeout(() => {
                        nickname2.parentElement.classList.remove('highlight');
                    }, 1600);
                    return;
                }
                else {
                    context.player1 = nickname1.value;
                    context.player2 = nickname2.value;
                }
            }
            if (e.currentTarget.dataset.coast) {
                context.coast = e.currentTarget.dataset.coast;
            }
            context.currentSlide++;
            context.init();
        });
    }
}
