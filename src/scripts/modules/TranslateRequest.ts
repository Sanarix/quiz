import config from '../../../requestConfig.json';

export default class TranslateRequest {

	private options: Object;
	private config: Object;

	constructor () {
		this.options;
		this.config = config;
	}

	async request(question: string, answer: any, Game: any) {
		this.getOptions(question, answer)
		await fetch('https://translate-plus.p.rapidapi.com/translate', this.options)
		.then(response => response.json())
		//результат в виде ['Сериал Стивена Дж. Каннелла 1970-х ', ' The Rockford Files']
		.then(response => {const res = response.translations.translation.split(':::');
		Game.questionRu = res[0];
		Game.answerRu = res[1];
		})
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