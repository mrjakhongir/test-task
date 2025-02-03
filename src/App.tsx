import { Route, Routes } from "react-router";
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Route>
      <Route path='/auth' element={<AuthLayout />}>
        <Route index element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
