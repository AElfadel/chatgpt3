import openai from "./chatgpt";


//This is where we pass what the user typed in to chatgpt. This is called a completion. We're passing on the information. 


const query = async (prompt: string, chatId: string, model:string) => {
//For future..We could make a call here to get all the previous messages from my chat and build my prompt upon this.."contextual responses"

    const res = await openai
    .createCompletion({
        model,
        prompt,
        temperature:0.9,
        max_tokens: 1000,
        top_p:1,
        frequency_penalty:0,
        presence_penalty:0,
    })
    .then((res) => res.data.choices[0].text)
    .catch((err) => {
        `الذكاء الإصطناعي لم يستطع الإجابة على سؤالك! (Error: ${err.message})`}
        );

    
    return res;

};

export default query;