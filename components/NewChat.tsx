import { PlusIcon } from "@heroicons/react/24/solid";

export function NewChat() {
  return (
    <div>
      <div className="flex p-3 items-center gap-3 cursor-pointer text-sm font-semibold rounded-md border border-white/20 hover:bg-gray-500/10 mb-1">
        <PlusIcon className="w-4 h-4" />
        <p className="">محادثة جديدة</p>
      </div>
    </div>
  );
}

export default NewChat;
