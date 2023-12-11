import MessagingHeader from "./Header";

const MessagingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      <div>
        <MessagingHeader />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default MessagingLayout;
