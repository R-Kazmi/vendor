"use client";
import PageHeading from "@/components/PageHeading";
import Pagination from "@/components/Pagination";
import Card from "@/components/Card";
import SearchAndFilters from "@/components/SearchAndFilters";
import { useRouter } from "next/navigation";
import Table from "@/components/Table";
import { useEffect, useState } from "react";
import CurrentStatus from "@/components/CurrentStatus";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/redux/services/productsApi";
import Loader from "@/components/Loader";
import Model from "@/components/Modal";
import { RxCross1 } from "react-icons/rx";
import { notifyError, notifySuccess } from "@/components/Notification";

const tableHeadings = [
  "Product",
  "Status",
  "Inventory",
  "Sales Channels",
  "Markets",
  "Type",
  "Vendor",
];

const filters = ["All", "Active", "Draft", "Archived"];

const Products = () => {
  const router = useRouter();
  const [selectAll, setSelectAll] = useState(false);
  const [selected, setSelected] = useState();
  const [deleteModal, setDeleteModal] = useState(false);

  console.log(selected, "selected", selectAll);
  const [payload, setPayload] = useState({
    limit: 20,
    text: "",
    total: "",
    page: "",
    pages: "",
    sinceId: "",
    status: "",
  });
  const { data, isFetching } = useGetProductsQuery({
    limit: payload.limit,
    text: payload.text,
    sinceId: payload.sinceId,
    status: payload.status,
  });

  const [DeleteProduct, { isLoading }] = useDeleteProductMutation();

  // Maybe use this code later

  // const updatedArray = [];
  // useEffect(() => {
  //   if (selectAll) {
  //     data?.data?.items?.map((item, index) => {
  //       updatedArray.push(item?.id);
  //       setSelected([...updatedArray]);
  //     });
  //   }
  // }, [selectAll]);

  useEffect(() => {
    if (data) {
      setPayload({
        ...payload,
        total: data?.data?.total,
        pages: data?.data?.pages,
        page: data?.data?.page,
      });
    }
  }, [data]);

  return (
    <section className="">
      {/* Delete Modal */}
      <Model open={deleteModal} setOpen={setDeleteModal}>
        <div className="rounded-xl flex flex-col">
          <div className="flex bg-[#f3f3f3] border-[#e3e3e3] border-b items-center justify-between p-4">
            <h1>Are you sure you want to delete this product</h1>
            <RxCross1
              className="cursor-pointer hover:rotate-180 hover:transition-all hover:duration-300"
              onClick={() => {
                setDeleteModal(!deleteModal);
              }}
            />
          </div>
          <p className="my-5 mx-4">This can&apos;t be undone</p>

          <hr className="bg-[#e3e3e3]" />
          <div className="flex justify-end gap-4 items-center my-2">
            <button
              onClick={() => {
                setDeleteModal(!deleteModal);
              }}
              className="border border-[#e3e3e3] rounded-md px-2 py-1 text-[#515151] bg-white"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                DeleteProduct({ id: selected })
                  .then(({ error, data }) => {
                    const res = data !== undefined ? data : error?.data;
                    res?.success
                      ? notifySuccess(res?.message)
                      : notifyError(res?.message);
                  })
                  .catch((error) => notifySuccess("error", notifyError(error)));
                setDeleteModal(!deleteModal);
              }}
              className="bg-[#e51c00] rounded-md px-2 py-1 mr-4 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </Model>
      <div className="flex my-4 flex-col sm:flex-row justify-between items-center">
        <PageHeading heading={"Products"} />
        <div className="flex gap-2">
          {/* <button
            type="button"
            className="flex gap-1 items-center justify-center flex-shrink-0 px-3 py-1   text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Export
          </button>
          <button
            type="button"
            className="flex gap-1 items-center justify-center flex-shrink-0 px-3 py-1  text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Import
          </button> */}
          <button
            type="button"
            onClick={() => {
              router.push("/add-product");
            }}
            className="w-full md:w-auto flex items-center justify-center  px-3 py-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Add product
          </button>
        </div>
      </div>
      <div className=" mx-auto border border-secondary-100 rounded-lg">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col p-2 w-full space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
            <SearchAndFilters
              searchText={(data) => {
                setPayload({ ...payload, text: data });
              }}
              selectedFilter={(data) => {
                setPayload({ ...payload, status: data == "All" ? "" : data });
              }}
              filters={filters}
            />
          </div>

          <Card className={"relative flex flex-col gap-4 !p-0"}>
            <Table
              tableHeadings={tableHeadings}
              selectAll={selectAll}
              setSelectAll={setSelectAll}
              setSelected={setSelected}
            >
              {isFetching || isLoading ? (
                <tr className="border-b w-full dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td colSpan={8} className="   px-4 py-3 cursor-pointer">
                    <Loader />
                  </td>
                </tr>
              ) : data?.data?.items?.length >= 1 ? (
                data?.data?.items?.map((item, index) => {
                  let inventory = 0;
                  return (
                    <tr
                      key={index.toString() + 1}
                      className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <td className="w-4 px-4 py-3 cursor-pointer">
                        <div
                          onClick={() => {
                            if (selected === item?.id) {
                              // const updatedArray = selected.filter(
                              //   (element) => element !== item?.id
                              // );
                              setSelected("");
                            } else {
                              setSelected(
                                // [...selected, item?.id]
                                item?.id
                              );
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
                                : selected === item?.id && true
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
                        className="flex  items-center px-4 py-2 font-medium text-gray-900  dark:text-white"
                      >
                        <img
                          src={item?.image?.src}
                          alt="iMac Front Image"
                          className="w-10 h-10 mr-3"
                        />
                        <p className="">{item?.title}</p>
                      </th>
                      <td className="px-4 py-2">
                        <CurrentStatus type={item.status} />
                      </td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="flex items-center">
                          {item?.variants?.map((variant) => {
                            inventory += variant?.inventory_quantity;
                          })}
                          <p>{inventory}</p>
                          <span className="font-light pl-1">
                            in stock{" "}
                            {item?.variants?.length > 1 &&
                              `for ${item?.variants?.length} variants`}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-2 text-right pr-8 font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        ---
                      </td>
                      <td className="px-4 py-2 text-right pr-8 font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        ---
                      </td>
                      <td className="px-4 py-2 font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        {item?.product_type}
                      </td>

                      <td className="px-4 py-2 font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        {item?.vendor}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td
                    colSpan={8}
                    className="mx-auto w-full text-center px-4 py-3 cursor-pointer"
                  >
                    No data Found
                  </td>
                </tr>
              )}
            </Table>
            {selectAll || selected ? (
              <Card className="fixed bottom-5 left-[50%] border border-secondary-100 w-fit mx-auto justify-center gap-4">
                <button
                  onClick={() => {
                    router.push(`/update-product/${selected}`);
                  }}
                  className="bg-[#d4d4d4] text-xs font-medium text-[#545454] p-2 rounded-lg "
                >
                  Edit Product
                </button>
                <button
                  onClick={() => {
                    setDeleteModal(!deleteModal);
                  }}
                  className="bg-[#d4d4d4] text-xs font-medium text-[#545454] p-2 rounded-lg "
                >
                  Delete Product
                </button>
                {/* <button className="bg-gray-100 p-2 rounded-lg ">Cancel Order</button> */}
              </Card>
            ) : (
              ""
            )}
            <Pagination data={data} payload={payload} setPayload={setPayload} />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;
