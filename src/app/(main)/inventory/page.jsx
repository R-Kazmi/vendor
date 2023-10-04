"use client";
import Card from "@/components/Card";
import PageHeading from "@/components/PageHeading";
import Pagination from "@/components/Pagination";
import SearchAndFilters from "@/components/SearchAndFilters";
import Table from "@/components/Table";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiExport, CiImport } from "react-icons/ci";

const tableHeadings = [
  "PRODUCT",
  "SKU",
  "Unavaliable",
  "Committed",
  "Avaliable",
  "On Hand",
  "Incoming",
];

const filters = ["All", "Incoming"];

const productsData = [
  {
    pUrl: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
    pDesc: "Apple iMac 27",
    SKU: "ISMO-010",
  },
  {
    pUrl: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
    pDesc: "Apple iMac 27",
    SKU: "ISMO-010",
  },
  {
    pUrl: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
    pDesc: "Apple iMac 27",
    SKU: "ISMO-010",
  },
  {
    pUrl: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
    pDesc: "Apple iMac 27",
    SKU: "ISMO-010",
  },
  {
    pUrl: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
    pDesc: "Apple iMac 27",
    SKU: "ISMO-010",
  },
];

const Inventory = () => {
  const router = useRouter();
  const [selectAll, setSelectAll] = useState(false);
  const [selected, setSelected] = useState([]);
  return (
    <section className=" dark:bg-gray-900">
      <div className="flex justify-between items-center">
        <PageHeading heading={"Inventory"} />
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              router.push("/add-product");
            }}
            className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <svg
              className="h-3.5 w-3.5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              />
            </svg>
            View products
          </button>
          <button
            type="button"
            className="flex gap-1 items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <CiExport />
            Export
          </button>
          <button
            type="button"
            className="flex gap-1 items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <CiImport />
            Import
          </button>
        </div>
      </div>
      <div className=" mx-auto">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col px-4 py-3 w-full space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
            <SearchAndFilters filters={filters} />
          </div>
          <Table
            tableHeadings={tableHeadings}
            selectAll={selectAll}
            setSelectAll={setSelectAll}
            setSelected={setSelected}
          >
            {productsData?.map((item, index) => {
              return (
                <tr
                  key={index.toString() + 1}
                  className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
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
                  <th
                    scope="row"
                    className="flex w-[150px] items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      src={item?.pUrl}
                      alt="iMac Front Image"
                      className="w-auto h-8 mr-3"
                    />
                    {item?.pDesc}
                  </th>
                  <td className="px-4 py-2">
                    <span className="bg-primary-100 whitespace-nowrap text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                      {item?.SKU}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="bg-primary-100 whitespace-nowrap text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                      {0.0}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="bg-primary-100 whitespace-nowrap text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                      {0.0}
                    </span>
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center">
                      <input
                        min={0}
                        type="number"
                        className="input-field min-w-[140px]"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center">
                      <input
                        min={0}
                        type="number"
                        className="input-field min-w-[140px]"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center">
                      <input
                        min={0}
                        type="number"
                        className="input-field min-w-[140px]"
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </Table>
          {selectAll || selected?.length >= 1 ? (
            <Card className=" justify-center gap-4">
              <button className="bg-gray-100 p-2 rounded-lg ">
                Update Quantities
              </button>
              <button className="bg-gray-100 p-2 rounded-lg ">
                Delete Product
              </button>
              {/* <button className="bg-gray-100 p-2 rounded-lg ">Cancel Order</button> */}
            </Card>
          ) : (
            ""
          )}
          {/* <Pagination /> */}
        </div>
      </div>
    </section>
  );
};

export default Inventory;
