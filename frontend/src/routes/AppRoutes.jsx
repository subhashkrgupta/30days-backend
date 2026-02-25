import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Dashboard from "../pages/dashboard/Dashboard";
import ProtectedRoute from "../component/routes/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
