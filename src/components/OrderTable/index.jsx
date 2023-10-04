"use client";
import React, { useState } from "react";
import Card from "../Card";

const OrderTable = ({ tableData, tableHeadings }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selected, setSelected] = useState([]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              onClick={() => {
                setSelectAll(!selectAll);
                setSelected([]);
              }}
              className="flex items-center px-4 py-3"
            >
              <input
                id="checkbox-all"
                type="checkbox"
                checked={selectAll}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="checkbox-all" className="sr-only">
                checkbox
              </label>
            </th>
            {tableHeadings.map((item, index) => (
              <th
                key={index.toString() + 1}
                scope="col"
                className="px-4 py-3 whitespace-nowrap"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData?.map((item, index) => {
            return (
              <tr
                key={index.toString() + 1}
                className="border-b dark:border-gray-700"
              >
                <td className="w-4 px-4 py-3 cursor-pointer">
                  <div
                    onClick={() => {
                      if (selected.includes(index + 1)) {
                        const updatedArray = selected.filter(
                          (element) => element !== index + 1
                        );
                        setSelected(updatedArray);
                      } else {
                        setSelected([...selected, index + 1]);
                      }
                      setSelectAll(false);
                    }}
                    className="flex items-center"
                  >
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      checked={
                        selectAll
                          ? selectAll
                          : selected?.includes(index + 1) && true
                      }
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="px-4 py-3">{item?.orderName}</td>
                <td className="px-4 py-3">{item?.date}</td>
                <td className="px-4 py-3">{item?.customer}</td>
                <td className="px-4 py-3">{item?.total}</td>
                <td className="px-4 py-3">{item?.paymentStatus}</td>
                <td className="px-4 py-3">{item?.fulfillmentStatus}</td>
                <td className="px-4 py-3">{item?.orderItems}</td>
                <td className="px-4 py-3">{item?.dStatus}</td>
                <td className="px-4 py-3">{item?.dMethod}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectAll || selected?.length >= 1 ? (
        <Card className=" justify-center gap-4">
          <button className="bg-gray-100 p-2 rounded-lg ">
            Mark as fulfilled
          </button>
          <button className="bg-gray-100 p-2 rounded-lg ">
            Capture Payments
          </button>
          <button className="bg-gray-100 p-2 rounded-lg ">Cancel Order</button>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
};

export default OrderTable;
