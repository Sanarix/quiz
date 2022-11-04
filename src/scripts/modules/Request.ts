export default class Request {
	private url: string;

	constructor(url: string) {
		this.url = url;
	}

	async request() {
		const promise = await fetch(this.url);

		if(promise.ok) {
			let responce = await promise.json();
			console.log(responce);
			
		}else {
			console.log('Sorry but responce is down');	
		}
	}
}