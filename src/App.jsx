import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import { Result } from "postcss";
import Login from "./pages/Auth/Login";
import { useEffect } from "react";

function RequireAuth() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [navigate]);
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
