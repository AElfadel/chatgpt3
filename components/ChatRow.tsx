import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

type Props = {
  id: String;
};

function ChatRow() {
  return (
    <div>
      <p className="text-darkwhite text-sm font-black text-right pr-4 pt-3">
        محادثة جديدة
      </p>
      <div>
        <div className="flex text-small py-2 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer pr-4 ">
          <ChatBubbleLeftIcon className="w-4 h-4" />
          <p className="text-white">بعض الكتابة ها هنا</p>
          <TrashIcon className="w-4 h-4 text-darkwhite hover:text-white" />
        </div>
      </div>
    </div>
  );
}

export default ChatRow;
