import MainSidebar from "./Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen max-h-screen overflow-hidden flex">
      <div className="w-fit h-screen max-h-screen overflow-auto border-r border-r-slate-300 bg-slate-300">
        <MainSidebar />
      </div>
      <div className="flex-1 h-screen max-h-screen overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
