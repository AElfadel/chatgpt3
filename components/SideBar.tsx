"use client";

import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";
import {
  ArrowLeftOnRectangleIcon,
  Cog8ToothIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

function SideBar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" flex flex-col text-white min-w-[260px] text-center p-2 min-h-screen bg-gptbgd ">
      <div className=" flex-1">
        <NewChat />
      </div>
      {session && (
        <div>
          {isOpen && (
            <div className="bg-gptblack  bottom-full left-0 z-20 mb-2 w-full overflow-hidden rounded-md  py-1.5 outline-none opacity-100 translate-y-0">
              <button className="min-w-[260px] flex w-full items-center gap-2.5  hover:bg-gray-700 px-2 py-1">
                <TrashIcon className="w-5 h-5" />
                <p className=" grow overflow-hidden text-sm font-sans text-right m-2">
                  محو كل المحادثات
                </p>
              </button>

              <button
                onClick={() => signOut()}
                className="min-w-[260px] flex w-full items-center gap-2.5  hover:bg-gray-700 px-2 py-2"
              >
                <ArrowLeftOnRectangleIcon className="w-5 h-5" />

                <p className=" grow overflow-hidden text-sm font-sans text-right px-2 py-2">
                  تسجيل الخروج
                </p>
              </button>
            </div>
          )}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="border-t-[1px] border-darkwhite"
          >
            <div className="  min-w-[260px] flex w-full items-center gap-2.5 rounded-md px-1.5 text-sm  hover:bg-gray-800 py-2 ">
              <img
                src={session.user?.image!}
                alt="user image"
                className="w-6 h-6 rounded"
              />
              <p className=" grow overflow-hidden text-sm font-sans text-right ">
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

//flex outline outline-[#8e8ea0] rounded m-4
