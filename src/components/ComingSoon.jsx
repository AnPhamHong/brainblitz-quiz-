import svgComingSoon from "../assets/svgs/undraw_skateboard_w3bz.svg";

export default function ComingSoon() {
  return (
    <div className="p-6 w-full">
      <div className="mx-auto  relative max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <img
          src={svgComingSoon}
          alt="coming-soon"
          className="absolute bottom-0 left-0 w-16"
        />
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          🚧 Coming Soon 🚧
        </h1>
        <p className="text-gray-700 mb-6">
          This feature is under development and will be available soon.
        </p>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          onClick={() => alert("Stay tuned!")}
        >
          Notify Me
        </button>
      </div>
    </div>
  );
}
