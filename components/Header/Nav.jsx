/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import React, { useState } from "react";
import AppContext, { useAppContext } from "../../context/appContext";

export default function Nav() {
  const { context } = useAppContext(AppContext);
  const [offcanvas, setOffcanvas] = useState(false);
  const [search, setSearch] = useState();
  const [blogDropdown, setBlogDropdown] = useState(false);

  const blogDropdownList = [
    { title: "Blog", link: "/blog" },
    { title: "Blog Limit", link: "/blog-limit" },
  ];
  return (
    <nav
      className={`py-2 px-10 ${
        context.switchTheme === "dark" ? "bg-gray-900/80" : "bg-blue-500"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="w-3/12 lg:hidden">
            <button type="button" onClick={() => setOffcanvas(!offcanvas)}>
              <svg
                width="24"
                s
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M3 12H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 6H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 18H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div className="lg:w-2/12 w-6/12 flex justify-center lg:justify-start items-center">
            <div className="w-10 h-10 bg-gray-500/40 rounded flex items-center text-white font-bold justify-center mr-4 shadow-2xl">
              N
            </div>
            <span className=" font-medium text-white">NEEEXT</span>
          </div>
          <div className="w-3/12 lg:hidden text-right">
            <button type="button" onClick={() => setSearch(!search)}>
              <svg
                className="inline-block "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div
            className={`lg:w-8/12 w-full bg-gradient-to-b from-blue-500 to-blue-700 lg:bg-none fixed lg:static lg:h-auto lg:p-0 top-0 z-50 h-full p-10 transition-all ${
              offcanvas ? "left-0" : "-left-full"
            }`}
          >
            <button
              type="button"
              onClick={() => setOffcanvas(!offcanvas)}
              className="absolute top-10 right-10 lg:hidden text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <ul className="lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
              <li className="text-white font-bold hover:text-blue-400">
                <Link href="/">Home</Link>
              </li>
              <li className="text-white font-bold hover:text-blue-400">
                <Link href="/about">About</Link>
              </li>
              <li className="text-white font-bold hover:text-blue-400">
                <Link href="/profile/detail">Profile</Link>s
              </li>
              <li className="relative text-white font-bold ">
                <a
                  className="cursor-pointer hover:text-blue-400"
                  onClick={() => setBlogDropdown(!blogDropdown)}
                >
                  Blog
                </a>
                {blogDropdown && (
                  <ul className="absolute w-[200px] bg-blue-800 rounded shadow-2xl mt-5 z-50">
                    {blogDropdownList.map((item) => (
                      <li
                        key={item.title}
                        className="border-b border-white/5 last:border-0"
                      >
                        <Link href={item.link}>
                          <a className="flex py-3 px-6 hover:bg-blue-700/60">
                            {item.title}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="text-white font-bold hover:text-blue-400">
                <Link href="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
          <div
            className={`lg:w-2/12 absolute lg:static w-full left-0 py-5 lg:py-0 bg-blue-700 lg:bg-transparent transition-all ${
              search ? "top-0" : "-top-40"
            }`}
          >
            <div className="flex justify-center">
              <span className="mr-4 text-lg text-white">
                Hi, {context.user ? context.user.username : "Null"}
              </span>
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 rounded-full"
              >
                <Link href="/login">Login</Link>
              </button>
              <button
                type="button"
                onClick={() => setSearch(!search)}
                className="absolute top-6 right-10 lg:hidden text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
