import query from "@/lib/queryApi";
import { NextApiRequest, NextApiResponse } from "next"
import admin from "firebase-admin";
import { adminDb } from "@/firebaseAdmin";

type Data = {
    answer: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { prompt, chatId, model, session } = req.body;


        //Using the 400 error number to signify the application is missing some data from the user end.

    if (!prompt){ 
    res.status(400).json( {answer: "رجاء إكتب سؤال للذكاء الإصطناعي"});
    return;
    }

    if (!chatId){ 
        res.status(400).json( {answer: "رجاء إبدأ محادثة جديدة للحديث مع الذكاء الإصطناعي!"});
        return;
        }

        //ChaGPT Query

        const response = await query(prompt, chatId, model);
        //for this query function we created a new folder "lib" (like utility/helper files) and created inside it "queryApi" that is where connection to chatgpt happened.

const message : Message = {
    text: response || "الذكاء الإصطناعي لم يتمكن من الإجابة على سؤالك",
    //This is the response from GPT. We create a message type object and inject the response into the text field. Then...


    //Here we need the admins firestore details. To add documents through the backend to into the users messages collection box. We need specail admin acess. If you notice the message type is saying we're missing the servertimestamp which we now need to add into this users messages log.
    createdAt: admin.firestore.Timestamp.now(),
    //createdAT is provided from the server, and afterwords we created a chatgpt user
    user: {
        _id: 'ChatGPT',
        name: 'ChatGPT',
        avatar: 'https://links.papareact.com/89k',
    },
    };

//Now we're injecting the new chatgpt answers into firebase through the admin access 

await adminDb
.collection("users")
.doc(session?.user?.email)
.collection("chats")
.doc(chatId)
.collection("messages")
.add(message);

res.status(200).json({ answer: message.text  })
}

//So by checking the developer tools I found out the browser is facing an error whenever it tries to fetch the askQuestion api and being that this is next 13, the /app layout uses a different routing system than the previous /pages structure. And in this one they changed the api's treatment. My current problem is that I dont know what an API is.. well I know what IT is but I dont know how to use it/create it. I dont differentiate betweeen a GET/POST for example. My only use of an api was previously in my weather app ... the first web app I built with react/next js after I couldnt get this chatgpt clone to work the last time because I didnt know what back ticks did XD .. anyway so i need to adress this knowledge gap and learn what API's are.. how to create them in next 13 at least so i can continoue working on this app. The other thing i realized is why the first version of this chat gpt clone failed was because my free tokens on openai have all expired so i need to sign up with a new account to have some tokens. They said the tokens expire in 3 months but no way I created my account 3 months ago. I think I created it in April .. so how did it expire in one month without me using it!?? Anyway.. FUCK IT we'll come back tomorrow after the google conference and start learning this api shit. I'll have to change the structure of the code probably to get it to work on next 13 .. and you know what? maybe I can publish an article about it and link it to Sonny's youtube video so he can ban me XD because he wont want the github repo leaked since hes selling it for cash.