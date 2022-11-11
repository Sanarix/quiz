export default function gameHandler(context, settings) {
    const buttonBlock = document.querySelector('.button-block');
    buttonBlock.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('btn-mode')) {
            context.settings.currentCoast = +target.textContent;
            for (let button of buttonBlock.children) {
                if (button.classList.contains('active')) {
                    button.classList.remove('active');
                }
            }
            target.classList.add('active');
        }
    });
}
