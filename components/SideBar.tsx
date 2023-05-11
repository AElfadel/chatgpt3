"use client";

import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";

function SideBar() {
  const { data: session } = useSession();

  return (
    <div className=" flex flex-col text-white min-w-[260px] text-center p-2 min-h-screen bg-gptbgd ">
      <div className=" flex-1">
        <NewChat />
      </div>
      {session && (
        <div className="border-t-[1px] border-darkwhite">
          <button className="flex w-full items-center gap-2.5 rounded-md px-3 text-sm transition-colors duration-200 hover:bg-gray-800 cursor-pointer p-2  ">
            <img
              onClick={() => signOut()}
              src={session.user?.image!}
              alt="user image"
              className="w-6 h-6 rounded"
            />
            <p className=" grow overflow-hidden text-sm font-sans text-right">
              {session.user?.name!}
            </p>

            <Cog8ToothIcon className="flex-1 w-4 h-4 text-darkwhite" />
          </button>
        </div>
      )}
    </div>
  );
}

export default SideBar;

//flex outline outline-[#8e8ea0] rounded m-4
