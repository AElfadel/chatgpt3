"use client";

import { db } from "@/firebase";
import { PlusIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function NewChat() {
  const { data: session } = useSession();
  //First imported useSession to get user data for the database to know which user to add into

  const router = useRouter();
  //Using router to push our user into the new convos window after its creation

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
      //^There we created a new collection called chats in the users documents! which will afterwords include messages.
    );
    router.push(`/chat/${doc.id}`);
  };

  return (
    <div>
      <div
        onClick={createNewChat}
        className="flex p-3 items-center gap-3 cursor-pointer text-sm font-semibold rounded-md border border-white/20 hover:bg-gray-500/10 mb-1"
      >
        <PlusIcon className="w-4 h-4" />
        <p className="">محادثة جديدة</p>
      </div>
    </div>
  );
}

export default NewChat;
