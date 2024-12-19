"use client";

import React, { useState } from "react";
import smallIcon from "../../../public/assets/images/smallIcon.png";
import largeIcon from "../../../public/assets/images/largeIcon.png";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-white  relative">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end">
        <button
          className="text-customBlue focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Logo Section */}
      <div className="container mx-auto flex justify-center md:justify-between items-center p-4">
        <div className="flex items-center">
          <div className="hidden md:block">
            {/* Large Icon for Medium and Larger Screens */}
            <Image src={largeIcon} alt="Large Icon" className="h-10 w-auto" />
          </div>
        </div>
        <div className="md:hidden flex justify-center">
          {/* Small Icon for Smaller Screens */}
          <Image src={smallIcon} alt="Small Icon" className="h-12 w-auto" />
        </div>

        {/* Desktop Menu (Hidden on small screens) */}
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-6 font-bold">
            <li>
              <a href="#" className="text-customBlue">App</a>
            </li>
            <li>
              <a href="#" className="text-customBlue">Security</a>
            </li>
            <li>
              <a href="#" className="text-customBlue">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-customBlue focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="space-y-4 p-4 font-bold text-center">
          <li>
            <a href="#" className="text-customBlue block">App</a>
          </li>
          <li>
            <a href="#" className="text-customBlue block">Security</a>
          </li>
          <li>
            <a href="#" className="text-customBlue block">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
