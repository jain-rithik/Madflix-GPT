import OpenAI from 'openai';
import {OPENAI_KEY} from "./constants/constants";

const openai = new OpenAI({
    apiKey: OPENAI_KEY, // This is the default and can be omitted
    dangerouslyAllowBrowser: true
  });

  export default openai;