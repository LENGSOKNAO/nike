import React from "react";

const Card = ({ data }) => {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <ul className="flex space-x-12">
            {data.map((item) => (
              <li key={item.id} className="relative group">
                <a className="text-gray-700 hover:text-indigo-600 font-medium text-lg transition-colors duration-200 px-3 py-2 rounded-md">
                  {item.title}
                  {item.subMenu && (
                    <svg
                      className="inline-block w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </a>

                {/* Dropdown Submenu */}
                {item.subMenu && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-3 overflow-hidden">
                      {item.subMenu.map((subItem, index) => (
                        <a
                          key={index}
                          className="block px-6 py-3 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-150 font-medium"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Card;
