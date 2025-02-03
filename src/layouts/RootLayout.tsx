import DashboardHeader from "../pages/dashboard/DashboardHeader";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className='min-h-screen'>
      <DashboardHeader />
      <Outlet />
    </div>
  );
};

export default RootLayout;
