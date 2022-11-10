export default class TranslateRequest {
	//Запрос осуществляется на rapidapi
	//https://rapidapi.com/hub

	private options: Object;

	constructor () {
		this.options;
	}

	async request(text: string) {
		this.getOptions(text)
		await fetch('https://translate-plus.p.rapidapi.com/translate', this.options)
		.then(response => response.json())
		.then(response => console.log(response.translations.translation))
		.catch(err => console.error(err));
	}

	getOptions(text: string) {
		this.options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'X-RapidAPI-Key': '6d48b0ffe8mshab7aac7de5cd59ep1a966fjsn2133041bc06a',
				'X-RapidAPI-Host': 'translate-plus.p.rapidapi.com'
			},
			body: `{"text":"${text}","source":"en","target":"ru"}`
		}
	}
}