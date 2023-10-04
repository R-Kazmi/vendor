"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Actions = () => {
  const [filtersDropdown, setFiltersDropdown] = useState(false);

  const router = useRouter();

  const divRef = useRef(null);

  // Function to close the div when clicking outside
  const closeDivOnClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setFiltersDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDivOnClickOutside);

    return () => {
      document.removeEventListener("click", closeDivOnClickOutside);
    };
  }, []);

  return (
    <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
      <div className="flex items-center space-x-3 w-full md:w-auto">
        <button
          id="actionsDropdownButton"
          data-dropdown-toggle="actionsDropdown"
          className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          type="button"
        >
          <svg
            className="-ml-1 mr-1.5 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            />
          </svg>
          Actions
        </button>
        <div
          id="actionsDropdown"
          className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="actionsDropdownButton"
          >
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Mass Edit
              </a>
            </li>
          </ul>
          <div className="py-1">
            <a
              href="#"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Delete all
            </a>
          </div>
        </div>
        <div ref={divRef} className="relative">
          <button
            onClick={() => {
              setFiltersDropdown(!filtersDropdown);
            }}
            className="w-full  md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-4 w-4 mr-2 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                clipRule="evenodd"
              />
            </svg>
            Filter
            <svg
              className="-mr-1 ml-1.5 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              />
            </svg>
          </button>
          <div
            htmlFor="filterDropdown"
            className={`${
              filtersDropdown ? "block" : " hidden"
            } z-10 absolute top-10 right-0 w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700`}
          >
            <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Choose brand
            </h6>
            <ul className="space-y-2 text-sm" htmlFor="filterDropdownButton">
              <li className="flex items-center">
                <input
                  id="apple"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="apple"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Apple (56)
                </label>
              </li>
              <li className="flex items-center">
                <input
                  id="fitbit"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="fitbit"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Microsoft (16)
                </label>
              </li>
              <li className="flex items-center">
                <input
                  id="razor"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="razor"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Razor (49)
                </label>
              </li>
              <li className="flex items-center">
                <input
                  id="nikon"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="nikon"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Nikon (12)
                </label>
              </li>
              <li className="flex items-center">
                <input
                  id="benq"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="benq"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  BenQ (74)
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actions;
