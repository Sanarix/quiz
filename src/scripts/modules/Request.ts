export default class Request {
	private url: string;

	constructor(url: string) {
		this.url = url;
	}

	async request() {
		const data = await fetch(this.url);
		return await data.json();
	}
}