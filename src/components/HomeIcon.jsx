import React from "react";
import { Link } from "react-router-dom";

const HomeIcon = () => {
  return (
    <Link to="/">
      <button
        className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
                      border-blue-600
                      border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                      active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </button>
    </Link>
  );
};

export default HomeIcon;
