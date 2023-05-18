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

        const response = await query(prompt,chatId,model);
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