"use client";

import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";
import {
  ArrowLeftOnRectangleIcon,
  Cog8ToothIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

function SideBar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="flex flex-col text-white min-w-[260px] text-center p-2 min-h-screen bg-gptbgd">
      <div className="flex-1">
        <NewChat />
      </div>
      {session && (
        <div>
          {isOpen && (
            <div className="bg-gptblack bottom-full left-0 z-20 mb-2 w-full overflow-hidden rounded-md py-1.5 outline-none opacity-100 translate-y-0">
              <button className="min-w-[260px] flex w-full items-center gap-2.5 hover:bg-gray-700 px-2 py-1">
                <TrashIcon className="w-5 h-5" />
                <p className="grow overflow-hidden text-sm font-sans text-right m-2">
                  محو كل المحادثات
                </p>
              </button>

              <button
                onClick={() => signOut()}
                className="min-w-[260px] flex w-full items-center gap-2.5 hover:bg-gray-700 px-2 py-2"
              >
                <ArrowLeftOnRectangleIcon className="w-5 h-5" />

                <p className="grow overflow-hidden text-sm font-sans text-right px-2 py-2">
                  تسجيل الخروج
                </p>
              </button>
            </div>
          )}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="border-t-[1px] border-darkwhite"
          >
            <div className="min-w-[260px] flex w-full items-center gap-2.5 rounded-md px-1.5 text-sm hover:bg-gray-800 py-2">
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

//TODO: Summary // I need to initialize firebase.. connect the database to the sidebar so that the conversations I had get displayed in descending order.. so the newest at the top and oldest at the bottom. This will requiring mapping the data base.. but thats not the first step..

//TODO: 1 - Design Database structure on firebase..

//TODO: 2 - Create first document in Database

//TODO: 3 - Display documents created in the sidebar chronlogically

//TODO: 4 - ChatGPT 3 progress completed *thumbs up* I can then go back to complete the tutorial on chatgpt 2 to revise all the chatgpt stuff and connecting into their API.

//TODO: 5 - Complete sudaniGPT1, then complete SudaniGPT2 then return to complete sudaniGPT3.

//TODO: 6 - Start a different project. Build a blog so we can then show off this ChatGPT build in it with the beautiful Excalidraw diagrams and maaaayyybbeee a youtube video just to flex.

//I will push these to github as well so they can work as learning map for next week inshallah. We are making excellent progress man. Keeo going and keep strong. Slowly but surley and we will arrive inshallah.
