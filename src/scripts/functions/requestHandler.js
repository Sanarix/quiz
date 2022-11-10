export default function responceHandler(data, currentCoast) {
    const dataArray = data;
    let result = dataArray.find((obj) => { if (obj.value === currentCoast) {
        return obj;
    } });
    if (result) {
        return {
            question: result.question,
            answer: result.answer,
        };
    }
    else {
        throw new Error('Coast of question is not defined');
    }
}
