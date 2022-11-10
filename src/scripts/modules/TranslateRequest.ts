import config from '../../../requestConfig.json';

export default class TranslateRequest {

	private options: Object;
	private config: Object;

	constructor () {
		this.options;
		this.config = config;
	}

	async request(text: string) {
		this.getOptions(text)
		await fetch('https://translate-plus.p.rapidapi.com/translate', this.options)
		.then(response => response.json())
		//TODO сделать вывод перевода в .question
		.then(response => console.log(response.translations.translation))
		.catch(err => console.error(err));
	}

	getOptions(text: string) {
		this.options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'X-RapidAPI-Key': `${config.translateAPI}`,
				'X-RapidAPI-Host': 'translate-plus.p.rapidapi.com'
			},
			body: `{"text":"${text}","source":"en","target":"ru"}`
		}
	}
}