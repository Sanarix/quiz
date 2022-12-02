export default function gameHandler(Game, settings) {
    const buttonBlock = document.querySelector('.button-block');
    const langButtons = document.querySelector('.lang');
    const buttonRules = document.querySelector('.btn-rules');
    const buttonHint = document.querySelector('.hint');
    if (Game.lang === 'en') {
        document.querySelector('.question').textContent = Game.question;
    }
    else if (Game.lang === 'ru') {
        document.querySelector('.question').textContent = Game.questionRu;
    }
    else {
        throw new Error('Произошла ошибка. Неправильно определён язык');
    }
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
        if (target.textContent === 'en') {
            document.querySelector('.question').textContent = Game.question;
        }
        else {
            document.querySelector('.question').textContent = Game.questionRu;
        }
        if (target.textContent === Game.lang) {
            return;
        }
        if (target.classList.contains('lang-button')) {
            resetActiveButtons(langButtons);
            target.classList.add('active');
            Game.lang = target.textContent;
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
