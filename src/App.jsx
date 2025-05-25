import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Login from "./pages/Auth/Login";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

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
    if (!token) {
      navigate("/login");
    } else if (location.pathname === "/login") {
      navigate("/");
    }
  }, [navigate, location]);
  return (
    <Routes>
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/notification" element={<Quiz />} />
        <Route path="/achievements" element={<Quiz />} />
        <Route path="/quiz-history" element={<Quiz />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
