"use client";

//STOPPED AT 2:16:32

import { db } from "@/firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  //TODO: useSWR to get the model but for now..

  const model = "text-davinci-003";

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Prevents the event from firing upon launch.

    if (!prompt) return;

    const input = prompt.trim();
    //I dont know why he trimmed the user typed prompt. He said empty spaces can mess up the ai reading/comprehenstion so hes cleaning it.. okay.

    setPrompt("");

    const message: Message = {
      //^ specified message as a type "Message" which we then created as a type in "typings.d.ts" file to create custom types for every object. So pretty much typescript difference to javascript is that you have to specifiy the "type" of every object when you created it. Keyword: object!
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );
    //^ This line adds into the databasse. Now its time to add the toaster notification..

    //Create a fetch method to the backend to start communicating with our own API.

    const notification = toast.loading("الذكاء الإصطناعي يفكر...");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      toast.success("الذكاء الإصطناعي رد عليك", {
        id: notification,
      });
    });
  };

  return (
    <div className="bg-gray-700/50 text-white rounded-lg text-sm">
      <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="إكتب سؤالك هنا."
          type="text"
          className="bg-transparent flex-1  focus:outline-none"
          disabled={!session}
        />

        <button
          disabled={!prompt || !session}
          type="submit"
          className=" bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed
          "
        >
          <PaperAirplaneIcon className="w-4 h-4 -rotate-45 text-white" />
        </button>
      </form>

      <div>{/* Model selection */}</div>
    </div>
  );
}

export default ChatInput;

//TODO: Time on the video 02:06:22!

//Okay so this is as far as I have reached on Tuesday, i pretty much understand everything sonny has done so far.  I have a much better understanding of useSession and useState and progressing nicely. Its actually funny when I think of how slow I was going and how much difficulty I was facing while I was doing this tutorial back in Ramadan. But like Arteta said... TRUST. THE. PROCESSS. Anyway I will continoue wth building these two components. Tomorrow or maybe instead do work on the podcast tiktok channel making some videos/clips and uploading them on the Tiktok to boost listening and plays after the massive fall during the ongoing war. Yeah theres a war going on now in Sudan. Unbelieveable. And yeah.. I still think about her. She was one of the reasons I started all of this and believed in myself I could accomplish things. Strange strange this life is I tell you. Alhamdulillah anyway. See you tomorrow bro

//

//

//
