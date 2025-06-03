import { Fan } from "lucide-react";
import Avatar from "./Avatar";

function Header() {
  return (
    <div className="flex w-full gap-4 py-4 px-8 justify-between items-center  bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-center shadow-md">
      <div className="flex gap-1 items-center">
        <p className="ml-10 lg:ml-0 text-sm  font-semibold text-gray-800 italic relative">
          <span className="before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:text-sm before:text-purple-400">
            “
          </span>
          The beautiful thing about learning is that nobody can take it away
          from you.
          <span className="after:absolute after:-right-3 after:top-1/2 after:-translate-y-1/2 after:text-sm after:text-purple-400">
            ”
          </span>
        </p>
        <p className="text-sm text-gray-500 font-medium flex items-center gap-1 justify-end ml-2">
          <Fan size={12} />
          B.B.King <Fan size={12} />
        </p>
      </div>
      <div className="flex items-center gap-4 justify-end">
        <button
          type="button"
          className="hidden lg:flex w-fit h-[38px] items-center justify-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:cursor-not-allowed"
        >
          Start Quiz
        </button>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
