import OpenAI from "openai";
import {OPEN_AI_KEY} from "./constant"
const openai = new OpenAI({
  apiKey: process.env[OPEN_AI_KEY],
  dangerouslyAllowBrowser:true, // This is the default and can be omitted
});
export default openai;

// async function main() {
//   const chatCompletion = await client.chat.completions.create({
//     messages: [{ role: 'user', content: 'Say this is a test' }],
//     model: 'gpt-3.5-turbo',
//   });
// }

// main();