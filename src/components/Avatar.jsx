import { useEffect, useRef, useState } from "react";
import { doSignOut } from "../api/auth";

function Avatar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const userEmail = localStorage.getItem("email") ?? "-";

  const lstMenu = ["Dashboard", "Settings", "Earnings"];

  return (
    <div className="relative">
      <img
        id="avatarButton"
        type="button"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        className="w-[38px] h-[38px] object-cover rounded-full cursor-pointer"
        src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="User dropdown"
        onClick={handleToggle}
      />

      {isOpen && (
        <div
          id="userDropdown"
          className="absolute top-11 right-0 z-10 bg-white divide-y divide-gray-100 rounded-xl shadow-md w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Admin</div>
            <div className="font-medium truncate">{userEmail}</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="avatarButton"
          >
            {lstMenu.map((item) => {
              return (
                <li key={item}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              onClick={doSignOut}
            >
              Log out
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Avatar;
