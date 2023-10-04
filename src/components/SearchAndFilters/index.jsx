"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import SortButton from "../SortButton";
import Search from "./Search";

const sortOptions = [
  "Order Number",
  "Date",
  "Items",
  "Customer Name",
  "Payment Status",
  "Fulfillment Status",
  "Total",
  "Channel",
];

const SearchAndFilters = ({ filters, searchText, selectedFilter }) => {
  const [searchSection, setSearchSection] = useState(false);
  const [selected, setSelected] = useState(filters[0]);
  return (
    <div
      className={`flex py-2 px-2 w-full flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4`}
    >
      {searchSection ? (
        <div className="w-full  flex gap-6 items-center">
          <Search
            searchText={(data) => {
              searchText(data);
            }}
          />
          <button
            onClick={() => {
              setSearchSection(!searchSection);
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="w-full flex gap-2 items-center md:w-1/2">
          {filters.map((item, index) => (
            <p
              onClick={() => {
                setSelected(item);
                selectedFilter(item);
              }}
              key={index.toString()}
              className={` cursor-pointer px-2 py-1 text-sm ${
                selected === item && "bg-gray-100 rounded-lg"
              } hover:bg-gray-100 hover:rounded-lg`}
            >
              {item}
            </p>
          ))}
        </div>
      )}

      <div className="flex gap-4 items-center justify-end ">
        {!searchSection && (
          <button
            onClick={() => {
              setSearchSection(!searchSection);
            }}
            type="button"
            className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <AiOutlineSearch />
            <BsFilter />
          </button>
        )}
        {/* <SortButton sortOptions={sortOptions} /> */}
      </div>
    </div>
  );
};

export default SearchAndFilters;
