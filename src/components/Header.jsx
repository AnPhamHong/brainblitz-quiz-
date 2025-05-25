import { Search } from "lucide-react";
import Avatar from "./Avatar";

function Header() {
  return (
    <div className="flex w-full gap-4 py-4 px-8 justify-between">
      <form className="max-w-xl w-full">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search
              size={16}
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
            />
          </div>
          <input
            type="search"
            id="default-search"
            className="h-6 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Quiz"
            required
          />
        </div>
      </form>
      <div className="flex items-center gap-4 justify-end">
        <button
          type="button"
          className="w-fit h-[38px] flex items-center justify-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:cursor-not-allowed"
        >
          Start Quiz
        </button>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
