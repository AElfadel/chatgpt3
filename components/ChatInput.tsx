"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { useState } from "react";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form className="p-5 space-x-5 flex" type="text">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="إكتب سؤالك هنا"
          type="text"
          className="bg-transparent flex-1  focus:outline-none disabled:cursor-not-allowed disabled:text-gray-300 "
          disabled={!session}
        />
        <button
          disabled={!prompt || !session}
          type="submit"
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="w-4 h-4 -rotate-45 text-white" />
        </button>
      </form>

      <div>{/* Model selection */}</div>
    </div>
  );
}

export default ChatInput;

//Okay so this is as far as I have reached on Tuesday, i pretty much understand everything sonny has done so far.  I have a much better understanding of useSession and useState and progressing nicely. Its actually funny when I think of how slow I was going and how much difficulty I was facing while I was doing this tutorial back in Ramadan. But like Arteta said... TRUST. THE. PROCESSS. Anyway I will continoue wth building these two components. Tomorrow or maybe instead do work on the podcast tiktok channel making some videos/clips and uploading them on the Tiktok to boost listening and plays after the massive fall during the ongoing war. Yeah theres a war going on now in Sudan. Unbelieveable. And yeah.. I still think about her. She was one of the reasons I started all of this and believed in myself I could accomplish things. Strange strange this life is I tell you. Alhamdulillah anyway. See you tomorrow bro.
