import React from "react";

const Table = ({ tableHeadings, children }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs border-t border-b border-secondary-100  rounded-md text-gray-700 bg-[#f7f7f7] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">
              {/* <div
                onClick={() => {
                  setSelected([]);
                  setSelectAll(!selectAll);
                }}
                className="flex items-center"
              >
                <input
                  id="checkbox-all"
                  type="checkbox"
                  checked={selectAll}
                  style={{ outline: "none !important" }}
                  className="w-4 h-4  bg-gray-100 border-gray-300 rounded text-primary-600  "
                />
                <label htmlFor="checkbox-all" className="sr-only">
                  checkbox
                </label> 
              </div>*/}
            </th>
            {tableHeadings.map((item, index) => (
              <th
                key={index.toString() + 1}
                scope="col"
                className="px-4 py-1 font-medium text-xs"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
