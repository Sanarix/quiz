interface IResponceJSON {
	airdate: string,
	answer: string,
	category: Object,
	category_id: number,
	created_at: string,
	game_id: number,
	id: number,
	invalid_count: null,
	question: string,
	updated_at: string,
	value: number
}

export default function responceHandler(
																				data: Array<Object>,
																				currentCoast: number
																				){
	const dataArray = data;

	let result: any = dataArray.find((obj:any) => {if(obj.value === currentCoast) {return obj}});

	if(result) {
		return {
			question: result.question,
			answer: result.answer,
		}	
	}else {
		throw new Error('Coast of question is not defined');
	}
}