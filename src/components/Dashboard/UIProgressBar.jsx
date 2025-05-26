
function UIProgressBar() {
  return (
    <div className="w-2/3">
      <div className="flex justify-end mb-1 w-full">
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          75%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "75%" }}
        ></div>
      </div>
    </div>
  );
}

export default UIProgressBar;
