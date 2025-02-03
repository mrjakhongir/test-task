import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className='bg-[rgba(0,0,0,0.6)] bg-[url("/auth-bg.jpg")] bg-no-repeat bg-bottom bg-cover bg-blend-multiply'>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
