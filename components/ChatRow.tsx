import { db } from "@/firebase";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

type Props = {
  id: String;
};

function ChatRow({ id }: Props) {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  //I havent used react firebase hooks to get the messages content and then display it as the chat title in the chat row because I havent added messages yet. But this is not enought. Lets rewrtie this page again to make sure we got it XP

  const deleteChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
    router.push("/");
  };

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [pathname]);

  return (
    <div className="text-white">
      <Link
        href={`chat/${id}`}
        className={`flex py-2.5 px-3 items-center gap-3 relative rounded-md cursor-pointer hover:bg-gptbgl/50 ${
          active && "bg-gptbgl hover:bg-gptbgl"
        }`}
      >
        <div className="flex flex-1">
          <ChatBubbleLeftIcon className="w-4 h-4" />
          <p className="px-2">محادثة جديدة</p>
          <div className="absolute inset-y-0 left-0 w-8 z-10 bg-gradient-to-r from-gptbgd group-hover:from-[#2A2B32]"></div>
        </div>

        {active && (
          <TrashIcon
            onClick={deleteChat}
            className="w-4 h-4 z-20 text-white hover:text-white"
          />
        )}
      </Link>
    </div>
  );
}

export default ChatRow;
