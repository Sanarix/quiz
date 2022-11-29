export default function gameHandler(Game, settings) {
    const buttonBlock = document.querySelector('.button-block');
    const langButtons = document.querySelector('.lang');
    const buttonRules = document.querySelector('.btn-rules');
    const buttonHint = document.querySelector('.hint');
    buttonBlock.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('btn-mode')) {
            Game.settings.currentCoast = +target.textContent;
            resetActiveButtons(buttonBlock);
            target.classList.add('active');
        }
    });
    langButtons.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('lang-button')) {
            resetActiveButtons(langButtons);
            target.classList.add('active');
        }
    });
    function resetActiveButtons(container) {
        for (let button of container.children) {
            if (button.classList.contains('active')) {
                button.classList.remove('active');
            }
        }
    }
    buttonRules.addEventListener('click', Game.renderRules.bind(Game));
    buttonHint.addEventListener('click', Game.renderHint.bind(Game));
}
