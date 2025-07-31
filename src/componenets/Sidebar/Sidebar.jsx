import React, { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const sidebarMenu = [
    {
      name: "Dashboard",
      to: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="6" rx="1" />
          <rect x="3" y="12" width="8" height="9" rx="1" />
          <rect x="14" y="12" width="7" height="9" rx="1" />
        </svg>
      )
    },
    {
      name: "Me",
      to: "/me",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="2"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
        </svg>
      )
    },
    {
      name: "Teachers",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="2"
        >
          <circle cx="12" cy="7" r="3" />
          <path d="M8 21v-2a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v2" />
          <circle cx="5" cy="10" r="2" />
          <path d="M3 21v-2a3 3 0 0 1 3-3" />
          <circle cx="19" cy="10" r="2" />
          <path d="M21 21v-2a3 3 0 0 0-3-3" />
        </svg>
      )
    },
    {
      name: "Students",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="2"
        >
          <circle cx="8" cy="10" r="3" />
          <line x1="8" y1="6" x2="8" y2="7" />
          <circle cx="16" cy="10" r="3" />
          <line x1="16" y1="6" x2="16" y2="7" />
          <path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="M10 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        </svg>
      )
    },
    {
      name: "Academic",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6l-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h4l2-2m0 0l2 2h4a2 2 0 002-2V6a2 2 0 00-2-2h-4l-2 2z"
          />
        </svg>
      ),
      children: [
        {
          name: "Classes",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="18" height="12" rx="2" />
              <line
                x1="6"
                y1="8"
                x2="12"
                y2="8"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="3"
                y1="17"
                x2="9"
                y2="21"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="21"
                y1="17"
                x2="15"
                y2="21"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          )
        },
        {
          name: "Section",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <line x1="12" y1="4" x2="12" y2="20" />
              <line x1="3" y1="12" x2="21" y2="12" />
            </svg>
          )
        },
        {
          name: "Subjects",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2 4a1 1 0 0 1 1-1h7a3 3 0 0 1 3 3v14a3 3 0 0 0-3-3H3a1 1 0 0 1-1-1V4zm21-1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-7a3 3 0 0 0-3 3V6a3 3 0 0 1 3-3h7z" />
            </svg>
          )
        }
      ]
    }
  ];

  const [academicDropdown, setAcademicDropddown] = useState(false);
  return (
    <ul className="menu w-full h-full flex flex-col gap-1 bg-[#142239]">
      {sidebarMenu.map((item, index) => (
        <li key={index} className="text-white">
          <Link
            to={item.to}
            className="flex items-center justify-between !p-2 rounded-none cursor-pointer"
            onClick={() =>
              item.children && setAcademicDropddown((prev) => !prev)
            }
          >
            <div className="flex items-center gap-2">
              {item.icon}
              <span className="capitalize tracking-wider">{item.name}</span>
            </div>
            {item.children && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transform ${
                  academicDropdown === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </Link>

          {item.children && academicDropdown && (
            <ul className="bg-[#1d3150] flex flex-col gap-1">
              {item.children.map((child, i) => (
                <li key={i} className="flex gap-2 pl-2 text-sm tracking-wide">
                  <Link className="flex !p-1 !pl-5 rounded-none tracking-wider">
                    {child.icon}
                    {child.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
export default Sidebar;
