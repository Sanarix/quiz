import Request from './Request';
export default class Game {
    constructor() {
        this.Request = new Request('http://jservice.io/api/random?count=1');
        this.startButton = document.querySelector('.btn-start');
    }
    start() {
        // this.Request.request().
        // then((json) => {requestHandler(json)}).
        // catch(() => {throw new Error('Failed request')});
    }
    stop() { }
}
