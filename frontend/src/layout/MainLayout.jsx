import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../component/NavBar";
import ChatBot from "../component/ChatBot";
import FooterPage from "../component/FooterPage";


const MainLayout = () => {
  const location = useLocation();

  // Check karein ki current path '/login' ya '/register' hai ya nahi
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="">
      {/* Agar AuthPage nahi hai, tabhi NavBar dikhao */}
      {!isAuthPage && <NavBar />}

    
      <main className="grow  flex flex-col min-h-screen">
        <Outlet />
      </main>

      {/* Agar AuthPage nahi hai, tabhi Footer dikhao */}
      {!isAuthPage && <FooterPage />}
    

      {/* Floating AI Chatbot Widget */}
      {!isAuthPage && <ChatBot />}
    </div>
  );
};

export default MainLayout;