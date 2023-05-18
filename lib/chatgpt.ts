import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

//passing our apikey into the application

export default openai;
//when can now use this config object which has a connection to openai and then make our chatgpt calls

//Listen man .. I tried by best but AGAIN I cant seem to connect to the OPENAI api... this is the same problem I had in my second attempt of the tutorial. I place the key and follow all of sonnys steps but on the openai website it shows that my API key was never used. I have not made a connection with the api... I dont know whats the reason for this tbh, i ran into trouble in the past with using enviromental variables in next but i dont suspect this is the case this time. A reason could be the library's proxy wall stopping my server from connection with open ai... that is a potential reason but i doubt it since all my npm installs have worked seamlessly today for example, with no proxy issues.


//I dont know what the fuck is going on tbh but im glad that this was actually the reason why i couldnt complete the tutorial in my second attempt. I will try again to connect with the api from home and whats the result of that, if it will work or not. Another thing i can try is going back to the first version i made through the tutorial "sudanigpt" since it actually did connect to the api and spammed it a few times... and this goes against the theory of the libraries proxy being the issue. Lets see. Maybe i need to watch a few tutorials and videos on api creation and usage to understand more on how these interact and how i can see their exchange through the chrome/brave developer tools.

//Anyway see you soon...