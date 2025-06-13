import React from "react";
import { Search } from "lucide-react";

const Navbar = () => {
  const links = [
    "HOME",
    "COMMITTEES",
    "PROGRAM",
    "AUTHORS",
    "REGISTRATION",
    "PREVIOUS EDITIONS",
    "CONTACT US",
  ];

  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold tracking-wide">SITE2025</div>
      <ul className="flex space-x-6 text-sm font-medium text-gray-800">
        {links.map((link) => (
          <li key={link} className={`hover:text-red-500 ${link === "HOME" ? "text-red-600" : ""}`}>
            <a href="#">{link}</a>
          </li>
        ))}
        <li>
          <Search className="w-4 h-4 cursor-pointer hover:text-gray-600" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
