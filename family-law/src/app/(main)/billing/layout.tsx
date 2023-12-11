import BillingHeader from "./Header";

const BillingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      <div>
        <BillingHeader />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default BillingLayout;
