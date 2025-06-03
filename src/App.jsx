import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import Home from "@pages/Home";
import Quiz from "@pages/Quiz";
import Login from "@pages/Auth/Login";
import { useEffect } from "react";
import Sidebar from "@components/Sidebar";
import Header from "@components/Header";
import ComingSoon from "@components/ComingSoon";

function ProtectedLayout() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col w-[calc(100vw-288px)]">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 bg-transparent">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();

   useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token && location.pathname !== "/login") {
      navigate("/login", { replace: true });
    } else if (token && location.pathname === "/login") {
      navigate("/", { replace: true });
    }
  }, [navigate, location.pathname]);

  return (
    <Routes>
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:quizId/:level_difficult/:quizCategory" element={<Quiz />} />
        <Route path="/notification" element={<ComingSoon />} />
        <Route path="/achievements" element={<ComingSoon />} />
        <Route path="/quiz-history" element={<ComingSoon />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
