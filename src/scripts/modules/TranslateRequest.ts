import config from '../../../requestConfig.json';

export default class TranslateRequest {

	private options: Object;
	private config: Object;

	constructor () {
		this.options;
		this.config = config;
	}

	async request(question: string, answer: any) {
		this.getOptions(question, answer)
		await fetch('https://translate-plus.p.rapidapi.com/translate', this.options)
		.then(response => response.json())
		//TODO сделать вывод перевода в .question
		//результат в виде ['Сериал Стивена Дж. Каннелла 1970-х ', ' <i>The Rockford Files</i>']
		.then(response => {const res = response.translations.translation.split(':::'); console.log(res)})
		.catch(err => console.error(err));
	}

	getOptions(question: string, answer: any) {
		this.options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'X-RapidAPI-Key': `${config.translateAPI}`,
				'X-RapidAPI-Host': 'translate-plus.p.rapidapi.com'
			},
			body: `{"text":"${question} ::: ${answer}","source":"en","target":"ru"}`
		}
	}
}