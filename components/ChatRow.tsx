import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

type Props = {
  id: String;
};

function ChatRow({ id }: Props) {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [active, setActive] = useState(false);

  const [messages] = useCollection(
    collection(db, "users", session?.user?.email!, "chats", id, "messages")
  );

  useEffect(() => {
    if (!pathname) return;
    //^ if theres no path name then return from this function. This is definesive programming

    setActive(pathname.includes(id));
  }, [pathname]);
  //If pathname contains our id then highlight the convo with the id in the chat row

  const removeChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
    router.replace("/");
  };

  return (
    <div>
      <p className="text-darkwhite text-sm font-black text-right pr-4 pt-3">
        {messages?.docs[messages.docs.length - 1]?.data().text} || "New
        Conversation"
      </p>
      <div>
        <div className="flex text-small py-2 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer pr-4 ">
          <ChatBubbleLeftIcon className="w-4 h-4" />
          <p className="text-white">بعض الكتابة ها هنا</p>
          <TrashIcon
            onClick={removeChat}
            className="w-4 h-4 text-darkwhite hover:text-white"
          />
        </div>
      </div>
    </div>
  );
}

export default ChatRow;
