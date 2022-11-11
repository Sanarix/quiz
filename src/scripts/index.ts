import '../styles/css/index.css';
import '../styles/css/menu.css';
import '../styles/css/game.css'
import Menu from './modules/Menu'

const menu: Menu = new Menu();

const startButton = document.querySelector('.btn-start');

startButton.addEventListener('click', async e => {
	e.preventDefault();
	menu.init();
});