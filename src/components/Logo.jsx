import svgCyber from "@assets/svgs/Cyber.svg";

function Logo() {
  return (
    <a href="/">
      <div className="flex gap-2 items-center h-fit cursor-pointer">
        <div className="bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center">
          <img src={svgCyber} className="w-8 h-8 text-white" alt="cyber-logo" />
        </div>
        <h2 className="font-bold text-blue-700 text-2xl tracking-wide	">
          Cyberverdict
        </h2>
      </div>
    </a>
  );
}

export default Logo;
