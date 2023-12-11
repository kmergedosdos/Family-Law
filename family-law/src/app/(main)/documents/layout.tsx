import DocumentsHeader from "./Header";

const DocumentsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      <div>
        <DocumentsHeader />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DocumentsLayout;
