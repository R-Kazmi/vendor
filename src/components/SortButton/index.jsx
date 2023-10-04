"use client";

import { useEffect, useRef, useState } from "react";
import { BiSort } from "react-icons/bi";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

const SortButton = ({ sortOptions }) => {
  const [filtersDropdown, setFiltersDropdown] = useState(false);

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
    <div ref={divRef} className="relative">
      <button
        onClick={() => {
          setFiltersDropdown(!filtersDropdown);
        }}
        className="w-full  md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        type="button"
      >
        <BiSort />
      </button>
      <div
        htmlFor="filterDropdown"
        className={`${
          filtersDropdown ? "block" : " hidden"
        } z-10 absolute top-10 right-0 w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700`}
      >
        <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
          Choose Sort Option
        </h6>
        <ul className="space-y-2 text-sm" htmlFor="filterDropdownButton">
          {sortOptions.map((item, index) => (
            <li key={index.toString() + 1} className="flex items-center">
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
                {item}
              </label>
            </li>
          ))}

          <li className="flex items-center border-t border-secondary-100">
            <p className=" bg-gray-100 cursor-pointer mt-2 w-full justify-center rounded-lg p-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-100">
              <BsArrowUp /> Oldest to newest
            </p>
          </li>
          <li className="flex  items-center">
            <p className=" bg-gray-100 cursor-pointer rounded-lg p-2 flex items-center justify-center w-full text-sm font-medium text-gray-900 dark:text-gray-100">
              <BsArrowDown /> Newest to Oldest
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortButton;
