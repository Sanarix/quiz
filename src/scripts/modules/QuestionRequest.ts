export default class QuestionRequest {

	async request(coast: number) {
		//Запрашиваем вопрос и ответ с заданной стоимостью
		const data = await fetch(this.getUrl(coast)).then((responce) =>{return responce});
		return await data.json();
	}

	getUrl(coast: number) {
		return `http://jservice.io/api/random?count=${coast}`
	}
}
