"use client";
import OrderStats from "@/components/OrderStats";
import PageHeading from "@/components/PageHeading";
import Pagination from "@/components/Pagination";
import SearchAndFilters from "@/components/SearchAndFilters";
import { CiExport, CiImport } from "react-icons/ci";
import Table from "@/components/Table";
import { useRouter } from "next/navigation";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import CurrentStatus from "@/components/CurrentStatus";
import { useGetOrdersQuery } from "@/redux/services/ordersApi";
import Loader from "@/components/Loader";

const tableHeadings = [
  "Order",
  "Date",
  "Customer",
  "Total",
  "Payment Status",
  "Fulfillment Status",
  "items",
  "Delievery Status",
  "Delievery Method",
];

const Orders = () => {
  const router = useRouter();
  const [selectAll, setSelectAll] = useState(false);
  const [selected, setSelected] = useState();
  const [payload, setPayload] = useState({
    limit: 20,
    text: "",
    total: "",
    page: "",
    pages: "",
    sinceId: "",
    status: "",
  });

  const { data, isFetching } = useGetOrdersQuery({
    limit: payload.limit,
    text: payload.text,
    sinceId: payload.sinceId,
    status: payload.status,
  });

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
    <section className=" ">
      <div className=" flex justify-between items-center">
        <PageHeading heading={"Orders"} />
      </div>
      {/* <OrderStats /> */}
      <div className="mx-auto">
        {/* Start coding here */}
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <SearchAndFilters
            searchText={(data) => {
              setPayload({ ...payload, text: data });
            }}
            selectedFilter={(data) => {
              setPayload({ ...payload, status: data == "All" ? "" : data });
            }}
            filters={["All", "Unfulfilled", "Unpaid", "Open", "Closed"]}
          />

          <Table tableHeadings={tableHeadings}>
            {isFetching ? (
              <tr className="border-b w-full dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td colSpan={11} className="   px-4 py-3 cursor-pointer">
                  <Loader />
                </td>
              </tr>
            ) : data?.data?.items?.length > 0 ? (
              data?.data?.items?.map((item, index) => {
                return (
                  <tr
                    key={index.toString() + 1}
                    className="border-b dark:border-gray-700 cursor-pointer"
                  >
                    <td className="w-4 px-4  cursor-pointer">
                      <div
                        onClick={() => {
                          if (selected === item?.order?.id) {
                            // const updatedArray = selected.filter(
                            //   (element) => element !== item?.order?.id
                            // );
                            setSelected("");
                          } else {
                            setSelected(item?.order?.id);
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
                              : selected === item?.order?.id && true
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
                    <td
                      onClick={() => router.push(`/orders/${item?.order?.id}`)}
                      className="px-4 py-2  font-medium"
                    >
                      {item?.order?.name}
                    </td>
                    <td className="px-4 py-2  whitespace-nowrap">
                      {item?.order?.created_at?.slice(0, 10)}
                    </td>
                    <td className="px-4 py-2  whitespace-nowrap">
                      {item?.order?.customer?.first_name
                        ? item?.order?.customer?.first_name +
                          item?.order?.customer?.last_name
                        : "---"}
                    </td>
                    {/* <td className="px-4 py-2  whitespace-nowrap">
                      {item?.order?.customer?.first_name
                        ? item?.order?.customer?.first_name +
                          item?.order?.customer?.last_name
                        : "---"}
                    </td> */}
                    <td className="px-4 py-2  whitespace-nowrap">
                      {item?.order?.current_subtotal_price}
                    </td>
                    <td className="px-4 py-2  whitespace-nowrap">
                      {item?.order?.financial_status ? (
                        <CurrentStatus type={item?.order?.financial_status} />
                      ) : (
                        "---"
                      )}
                    </td>
                    <td className="px-4 py-2  whitespace-nowrap">{"---"}</td>
                    <td className="px-4 py-2  whitespace-nowrap">
                      {item?.order?.line_items?.length}
                    </td>
                    <td className="px-4 py-2  whitespace-nowrap">---</td>
                    <td className="px-4 py-2  whitespace-nowrap">---</td>
                  </tr>
                );
              })
            ) : (
              <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td
                  colSpan={11}
                  className="mx-auto w-full text-center px-4 py-3 cursor-pointer"
                >
                  No data Found
                </td>
              </tr>
            )}
          </Table>
          {selectAll || selected?.length >= 1 ? (
            <Card className=" justify-center gap-4">
              <button className="bg-gray-100 p-2 rounded-lg ">
                Mark as fulfilled
              </button>
              <button className="bg-gray-100 p-2 rounded-lg ">
                Capture Payments
              </button>
              <button className="bg-gray-100 p-2 rounded-lg ">
                Cancel Order
              </button>
            </Card>
          ) : (
            ""
          )}
          <Pagination data={data} payload={payload} setPayload={setPayload} />
        </div>
      </div>
    </section>
  );
};

export default Orders;
