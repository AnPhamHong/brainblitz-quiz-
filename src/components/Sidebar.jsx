import { useState } from "react";
import bannerSupport from "../assets/svgs/banner-start-quiz.svg";
import {
  Bell,
  History,
  LayoutDashboard,
  LogOut,
  Trophy,
  Menu,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Logo from "./Logo";
import { doSignOut } from "../api/auth";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      {/* Hamburger button - mobile only */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={20} color="#155e75" />
      </button>

      {/* Overlay & Sidebar for mobile */}
      <div
        className={clsx(
          "fixed top-0 left-0 h-full w-64 bg-white z-50 p-4 transform transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:hidden"
        )}
      >
        <div className="flex justify-end">
          <button
            className="my-2 bg-cyan-200 p-2"
            onClick={() => setIsOpen(false)}
          >
            <X size={20} color="#155e75" />
          </button>
        </div>

        <Logo />
        <nav className="mt-8 space-y-2">
          {navLst.map((nav) => (
            <NavLink
              key={nav.id}
              to={nav.href}
              onClick={() => setIsOpen(false)} // auto close after click
              className={({ isActive }) =>
                clsx(linkClass, isActive ? activeClass : normalClass)
              }
            >
              {nav.icon}
              {nav.name}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto pt-8 flex flex-col gap-2 items-center">
          <img
            src={bannerSupport}
            className="w-full h-fit min-h-28"
            alt="support-banner"
          />
          <button
            onClick={doSignOut}
            className="text-sm flex gap-2 items-center w-fit hover:scale-95 transition-transform"
          >
            <LogOut size={20} />
            Log Out
          </button>
        </div>
      </div>

      {/* Sidebar desktop version */}
      <aside className="hidden lg:flex w-64 bg-white border-r h-full flex-col gap-8 p-4">
        <Logo />
        <div className="flex flex-col justify-between gap-4 h-screen">
          <nav className="space-y-2">
            {navLst.map((nav) => (
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
            ))}
          </nav>
          <div className="flex flex-col gap-2 items-center">
            <img
              src={bannerSupport}
              className="w-full h-fit min-h-28"
              alt="support-banner"
            />
            <button
              onClick={doSignOut}
              className="text-sm flex gap-2 items-center w-fit hover:scale-95 transition-transform"
            >
              <LogOut size={20} />
              Log Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
