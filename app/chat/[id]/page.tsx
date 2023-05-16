import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";

type Props = {
  params: {
    id: string;
  };
};

//This file is in a page route (top level) so it gets some props. If you console log(props) in this server component youll see in the "params" the id is in there. So to extract that we're doing the above with typescript

function newPage({ params: { id } }: Props) {
  //Notice how we passed the id from params as a Props to this component/function .. and then we passed the id into its child components
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat chatId={id} />

      <ChatInput chatId={id} />
    </div>
  );
}

export default newPage;
