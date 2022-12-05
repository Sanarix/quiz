/*
Получаем массив с объектами содержащими вопрос, ответ и т.д.
Кол-во объектов около 100 штук
*/
export default function responceHandler(data, currentCoast) {
    const responsesArray = data;
    /*
    Если среди объектов есть подходящий по выбраной стоимости
    Из его вопроса и ответа создаём новый объект и возвращаем его
    */
    let suitableObj = responsesArray.find((responseObj) => { if (responseObj.value === currentCoast) {
        return responseObj;
    } });
    if (suitableObj) {
        return {
            question: suitableObj.question,
            answer: suitableObj.answer,
        };
    }
    else {
        throw new Error('Coast of question is not defined');
    }
}
