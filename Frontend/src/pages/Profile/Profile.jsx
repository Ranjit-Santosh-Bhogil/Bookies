import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileTabs from "../../components/profile/ProfileTabs";
import ProfileContent from "../../components/profile/ProfileContent";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Posts");

  return (
    <DashboardLayout>
      <div className="h-full flex flex-col">
        <ProfileHeader />

        <ProfileTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="flex-1 overflow-y-auto">
          <ProfileContent activeTab={activeTab} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
