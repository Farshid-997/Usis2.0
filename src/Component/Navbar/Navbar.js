import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-blue-600 p-3 text-white">
      <div className="flex">
        {/* menu button for small device */}
        <div
          onClick={() => setOpen(!open)}
          className="w-8 my-auto mr-3 cursor-pointer h-8 lg:hidden"
        >
          {open ? <XIcon> </XIcon> : <MenuIcon></MenuIcon>}
        </div>
        {/* bracu Logo */}
        <div className="flex-none my-auto">
          <img
            className="rounded-full p-1 ml-3 flex-none w-14  bg-white"
            src="bracu-logo.png"
            alt="BracU Logo"
          />
        </div>
        {/* Navbar anchors */}
        <div
          className={`lg:grow lg:my-auto lg:mx-10 lg:static absolute duration-500 ease-in ${
            open
              ? "top-20 w-3/4 p-5 mx-auto rounded-2xl bg-blue-600 text-white"
              : "top-[-200px]"
          } `}
        >
          <ul className="lg:flex lg:justify-around">
            <li className="hover:bg-green-500 lg:hover:text-orange-400 lg:hover:scale-110 lg:transition ease-out delay-100 lg:h-0 h-10">
              <a className="" href="/">
                Home
              </a>
            </li>
            <li className="hover:bg-green-500 lg:hover:text-orange-400 lg:hover:scale-110 lg:transition ease-out delay-100 lg:h-0 h-10">
              <a className=" text-center" href="/add-course">
                Add Course
              </a>
            </li>
            <li className="hover:bg-green-500 lg:hover:text-orange-400 lg:hover:scale-110 lg:transition ease-out delay-100 lg:h-0 h-10">
              <a href="/course-settings">
                Set Equivalent / Prerequisite Courses
              </a>
            </li>
            <li className="hover:bg-green-500 lg:hover:text-orange-400 lg:hover:scale-110 lg:transition ease-out delay-100 lg:h-0 h-10">
              <a href="/set-curriculumn"> Set Curriculum</a>
            </li>
          </ul>
        </div>
        {/* User Account Info */}
        <div className="flex-none my-auto ml-auto">
          <div className="flex my-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <a className=" my-auto mx-5" href="">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
