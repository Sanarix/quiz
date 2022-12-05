var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class QuestionRequest {
    request(coast) {
        return __awaiter(this, void 0, void 0, function* () {
            //Запрашиваем вопрос и ответ с заданной стоимостью
            const data = yield fetch(this.getUrl(coast)).then((responce) => { return responce; });
            return yield data.json();
        });
    }
    getUrl(coast) {
        return `http://jservice.io/api/random?count=${coast}`;
    }
}
