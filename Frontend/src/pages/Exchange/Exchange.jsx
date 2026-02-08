import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import ExchangeTabs from "../../components/exchange/ExchangeTabs";
import ExchangeList from "../../components/exchange/ExchangeList";

const Exchange = () => {
  const [activeTab, setActiveTab] = useState("Incoming");

  return (
    <DashboardLayout>
      <div className="h-full flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b-2 border-black">
          <h1 className="text-2xl font-bold">Exchange Page</h1>
          <p className="text-sm text-black/60">
            Manage your book swaps
          </p>
        </div>

        {/* Tabs */}
        <ExchangeTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Exchange List */}
        <div className="flex-1 overflow-y-auto">
          <ExchangeList activeTab={activeTab} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Exchange;
