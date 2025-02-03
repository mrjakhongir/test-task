import { Navigate, Outlet } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

const ProtectedRoute = () => {
  const { isLoggedIn } = useLocalStorage();
  return isLoggedIn ? <Outlet /> : <Navigate to='/auth' replace />;
};

export default ProtectedRoute;
