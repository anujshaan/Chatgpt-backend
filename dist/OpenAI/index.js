"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callAPI = void 0;
const openai_1 = require("openai");
const config_1 = __importDefault(require("./config"));
const configuration = new openai_1.Configuration(config_1.default);
const openai = new openai_1.OpenAIApi(configuration);
// const response = await openai.listEngines();
const callAPI = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${req.body.message}`,
            max_tokens: 2000
        });
        console.log(response.data.choices[0].text);
        // return response.data.choices[0].text;
        res.status(200).json(response.data);
    }
    catch (error) {
        console.log(error);
    }
});
exports.callAPI = callAPI;
