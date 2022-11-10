import '../styles/css/index.css';
import '../styles/css/menu.css';
import Menu from './modules/Menu'

const menu: Menu = new Menu(); 

const startButton = document.querySelector('.btn-start');

startButton.addEventListener('click', e => {
	e.preventDefault();
	menu.init();
})