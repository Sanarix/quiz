var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import config from '../../../requestConfig.json';
export default class TranslateRequest {
    constructor() {
        this.options;
        this.config = config;
    }
    request(question, answer) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getOptions(question, answer);
            yield fetch('https://translate-plus.p.rapidapi.com/translate', this.options)
                .then(response => response.json())
                //TODO сделать вывод перевода в .question
                //результат в виде ['Сериал Стивена Дж. Каннелла 1970-х ', ' <i>The Rockford Files</i>']
                .then(response => { const res = response.translations.translation.split(':::'); console.log(res); })
                .catch(err => console.error(err));
        });
    }
    getOptions(question, answer) {
        this.options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': `${config.translateAPI}`,
                'X-RapidAPI-Host': 'translate-plus.p.rapidapi.com'
            },
            body: `{"text":"${question} ::: ${answer}","source":"en","target":"ru"}`
        };
    }
}
