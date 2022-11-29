export default function gameHandler(Game, settings) {
    const buttonBlock = document.querySelector('.button-block');
    const buttonRules = document.querySelector('.btn-rules');
    buttonBlock.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('btn-mode')) {
            Game.settings.currentCoast = +target.textContent;
            for (let button of buttonBlock.children) {
                if (button.classList.contains('active')) {
                    button.classList.remove('active');
                }
            }
            target.classList.add('active');
        }
    });
    buttonRules.addEventListener('click', Game.renderRules.bind(Game));
}
