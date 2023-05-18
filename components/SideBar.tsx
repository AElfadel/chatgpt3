"use client";

import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";
import {
  ArrowLeftOnRectangleIcon,
  Cog8ToothIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import ChatRow from "./ChatRow";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/firebase";

function SideBar() {
  const { data: session } = useSession();

  const [isOpen, setIsOpen] = useState(false);

  //Here weve added a state to make the user settings popup dissapear after clicking
  useEffect(() => {
    function handleClickOutside() {
      setIsOpen(false);
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  //Next we're going to use react firebase hooks to update the sidebar whenever a new chat is created by quering firebase

  const [chats] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "desc")
      )
  );

  return (
    <div className="flex flex-col text-white max-w-[260px] text-center p-2 min-h-screen bg-gptbgd ">
      <div className="flex-1">
        <NewChat />
        <p className="text-darkwhite text-sm font-black text-right pr-4 py-3">
          محادثاتك السابقة{" "}
        </p>
        {chats?.docs.map((chat) => (
          <ChatRow key={chat.id} id={chat.id} />
        ))}
      </div>
      {session && (
        <div>
          {isOpen && (
            <div className="bg-gptblack bottom-full left-0 z-20 mb-2 w-full overflow-hidden rounded-md py-1.5 outline-none opacity-100 translate-y-0">
              <button className="max-w-[260px] flex w-full items-center gap-2.5 transition-colors duration-200 hover:bg-gray-700 px-2 py-2">
                <TrashIcon className="w-5 h-5" />
                <p className="grow overflow-hidden text-sm font-sans text-right m-2">
                  محو كل المحادثات
                </p>
              </button>

              <button
                onClick={() => signOut()}
                className="max-w-[260px] flex w-full items-center gap-2.5 transition-colors duration-200 hover:bg-gray-700 px-2 py-2"
              >
                <ArrowLeftOnRectangleIcon className="w-5 h-5" />

                <p className=" overflow-hidden text-sm font-sans text-right px-2 py-1 ">
                  تسجيل الخروج
                </p>
              </button>
            </div>
          )}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="border-t-[1px] border-darkwhite"
          >
            <div className="flex min-w-[240px] items-center gap-2.5 rounded-md px-1.5 text-sm transition-colors duration-200 hover:bg-gray-800 py-2">
              <img
                src={session.user?.image!}
                alt="user image"
                className="w-6 h-6 rounded"
              />

              <p className="grow overflow-hidden text-sm font-sans text-right">
                {session.user?.name!}
              </p>

              <Cog8ToothIcon className="flex-1 w-4 h-4 pr-8 text-darkwhite" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

export default SideBar;

//TODO: 1 - Design Database structure on firebase..

//Done

//TODO: 2 - Create first document in Database

//Done

//TODO: 3 - Display documents created in the sidebar chronlogically

//TODO: 4 - ChatGPT 3 progress completed *thumbs up* I can then go back to complete the tutorial on chatgpt 2 to revise all the chatgpt stuff and connecting into their API.

//TODO: 5 - Complete sudaniGPT1, then complete SudaniGPT2 then return to complete sudaniGPT3.

//TODO: 6 - Start a different project. Build a blog so we can then show off this ChatGPT build in it with the beautiful Excalidraw diagrams and maaaayyybbeee a youtube video just to flex.

//I will push these to github as well so they can work as learning map for next week inshallah. We are making excellent progress man. Keeo going and keep strong. Slowly but surley and we will arrive inshallah.
