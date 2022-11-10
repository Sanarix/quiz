export default function responceHandler(data) {
    const object = data[0];
    const result = {
        question: object.question,
        answer: object.answer,
        value: object.value,
    };
    return result;
}
