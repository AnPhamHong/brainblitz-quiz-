import bannerSupport from "../assets/svgs/banner-start-quiz.svg";
import {
  Bell,
  History,
  LayoutDashboard,
  LogOut,
  Trophy,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Logo from "./Logo";

function Sidebar() {
  const navLst = [
    {
      id: "dashboard",
      href: "/",
      icon: <LayoutDashboard size={20} />,
      name: "Dashboard",
    },
    {
      id: "notification",
      href: "/notification",
      icon: <Bell size={20} />,
      name: "Notification",
    },
    {
      id: "achievements",
      href: "/achievements",
      icon: <Trophy size={20} />,
      name: "Achievements",
    },
    {
      id: "quiz-history",
      href: "/quiz-history",
      icon: <History size={20} />,
      name: "Quiz History",
    },
  ];

  const linkClass =
    "flex items-center gap-3 p-3 rounded-lg text-sm font-medium transition";
  const activeClass = "bg-blue-700 text-white font-semibold";
  const normalClass = "text-gray-700 hover:bg-blue-100";

  return (
    <aside className="w-64 bg-white border-r h-full flex flex-col gap-8 p-4">
      <Logo />
      <div className="flex flex-col justify-between gap-4 h-screen">
        <nav className="space-y-2">
          {navLst.map((nav) => {
            return (
              <NavLink
                key={nav.id}
                to={nav.href}
                className={({ isActive }) =>
                  clsx(linkClass, isActive ? activeClass : normalClass)
                }
              >
                {nav.icon}
                {nav.name}
              </NavLink>
            );
          })}
        </nav>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img
            src={bannerSupport}
            className="w-full h-fit min-h-28 text-white"
            alt="cyber-logo"
          />
          <button className="text-sm flex gap-2 items-center w-fit hover:scale-95 transition-transform duration-300">
            <LogOut size={20} />
            Log Out
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
