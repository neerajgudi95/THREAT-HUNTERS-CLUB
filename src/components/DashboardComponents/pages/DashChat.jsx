import React from "react";
import { useUserContext } from "../../../GlobalContexts/UserContextProvider";
import { FaDiscord } from "react-icons/fa";

const DashChat = () => {
  const { state } = useUserContext();
  return (
    <div className="flex items-center justify-center flex-col h-1/2">
      <div className="w-1/2 text-center">
        <h1 className="mb-10">
          Dear{" "}
          <span className="mx-2 font-extrabold">{state?.user?.info?.firstName}</span>
        </h1>
        <p>
          We'll be coming up with our own discussion forum in sometime.
          Meanwhile, kindly check our discord channel where you can ask you
          doubts or share your thoughts
        </p>
        <div className="text-center">
          <a
            href="https://discord.gg/uGFuRyz9kJ"
            target="_blank"
            aria-label="instagram"
          >
            <FaDiscord color="#5865F2" size="2.5rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashChat;
