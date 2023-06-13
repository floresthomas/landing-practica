import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-amber-50 sticky top-0">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
        <p className="text-red-500 text-xl font-bold ml-3 flex items-center">
          ExpressVPN
        </p>
        <div className="flex items-center mt-4 sm:mt-0">
          <ul className="flex space-x-3">
            <li>
              <p className="text-green-900 font-bold">English</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
