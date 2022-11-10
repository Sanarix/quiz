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

export default function responceHandler(data: IResponceJSON): Object {
	const object = data[0];

	const result = {
		question: object.question,
		answer: object.answer,
		value: object.value
	}

	return result
}