import React from "react";

const DashGames = () => {
  return (
    <div className="p-5">
      <h1>PLAY AND LEARN</h1>
      <div className="h-[500px] m-5 dark:text-white">
        <iframe
          src="https://it.tamu.edu/security/cybersecurity-games/index.php"
          className="w-[100%] h-[100%] wobject-contain"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
        ></iframe>
      </div>
    </div>
  );
};

export default DashGames;
