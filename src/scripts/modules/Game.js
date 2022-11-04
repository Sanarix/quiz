import Request from './Request';
export default class Game {
    constructor() {
        this.request = new Request('http://jservice.io/api/random?count=1');
        this.startButton = document.querySelector('.btn-start');
    }
    start() {
        this.startButton.addEventListener('click', e => {
            this.request.request();
        });
    }
    stop() { }
}
