"use client";
import Card from "@/components/Card";
import Model from "@/components/Modal";
import PageHeading from "@/components/PageHeading";
import Table from "@/components/Table";
import { ArrowRightCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const tableHeadings = [
  "Heading 1",
  "Heading 2",
  "Heading 3",
  "Heading 4",
  "Heading 5",
];

const tableData = [];

const DiscountsPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex gap-4 justify-between items-center flex-wrap mb-4">
        <PageHeading heading={"Discounts"} />
        <div className="flex gap-4">
          <button className=" rounded-lg bg-gray-400 p-2 text-center text-base font-semibold text-white shadow-md outline-none ring-gray-500 ring-offset-2 transition hover:bg-gray-500 focus:ring-2">
            Export
          </button>
          <button
            onClick={() => setOpen(true)}
            className=" rounded-lg bg-blue-600 p-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2"
          >
            Create Discount
          </button>
        </div>
      </div>
      <Card>
        <div className="flex w-full gap-4 flex-wrap">
          {tableData.length > 0 ? (
            <>
              {" "}
              <div className="w-full">
                <label htmlFor="sidebar-search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="search"
                    id="sidebar-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 "
                    placeholder="Search Customers"
                  />
                </div>
              </div>{" "}
              <Table tableHeadings={tableHeadings}>
                {" "}
                {tableData?.map((item, index) => {
                  return (
                    <tr key={index.toString() + 1} className="border-b">
                      <td className="px-4 py-3">{item?.customerName}</td>
                      <td className="px-4 py-3">{item?.emailSubscription}</td>
                      <td className="px-4 py-3">{item?.location}</td>
                      <td className="px-4 py-3">{item?.orders}</td>
                      <td className="px-4 py-3">{item?.amount}</td>
                    </tr>
                  );
                })}
              </Table>
            </>
          ) : (
            <div className="flex justify-center items-center flex-col gap-2 w-full p-4">
              <img src="/assets/images/discount.svg" alt="discounts" />
              <h3 className="text-lg font-semibold">
                Manage discounts and promotions
              </h3>
              <p>
                Create discount codes and automatic discounts that apply at
                checkout. You can also use discounts with compare at prices.
              </p>
              <button
                onClick={() => setOpen(true)}
                className=" rounded-lg bg-blue-600 p-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2"
              >
                Create Discount
              </button>
            </div>
          )}
        </div>
      </Card>
      <Model open={open} setOpen={setOpen}>
        <div className="flex justify-between  gap-4 p-4 bg-gray-200">
          <h5 className="font-semibold text-lg">Select Discount Type</h5>
          <XMarkIcon className="w-7 cursor-pointer" />
        </div>
        <Link
          href={"/add-discount"}
          className="flex justify-between cursor-pointer gap-4 p-4"
        >
          <h5 className="text-gray-500 text-md">Select Discount Type</h5>
          <ArrowRightCircleIcon className="w-7 text-gray-500" />
        </Link>{" "}
        <Link
          href={"/add-discount"}
          className="flex justify-between cursor-pointer gap-4 p-4"
        >
          <h5 className="text-gray-500 text-md">Select Discount Type</h5>
          <ArrowRightCircleIcon className="w-7 text-gray-500" />
        </Link>{" "}
        <Link
          href={"/add-discount"}
          className="flex justify-between cursor-pointer gap-4 p-4"
        >
          <h5 className="text-gray-500 text-md">Select Discount Type</h5>
          <ArrowRightCircleIcon className="w-7 text-gray-500" />
        </Link>
        <div className="m-2 self-end">
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg bg-blue-600 p-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2"
          >
            Cancel
          </button>
        </div>
      </Model>
    </div>
  );
};

export default DiscountsPage;
