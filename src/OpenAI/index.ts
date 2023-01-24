import { Request, Response } from "express";

import { Configuration, OpenAIApi } from "openai";
import config from "./config";

const configuration = new Configuration(config);

const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();


export const callAPI = async(req:Request,res:Response) =>{
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${req.body.message}`,
      max_tokens:2048
    });
    console.log(response.data.choices[0].text)
    // return response.data.choices[0].text;
    res.status(200).json(response.data)
    
  } catch (error) {
    console.log(error)
  }
}