import { useEffect, useState } from "react";

const Pagination = ({ payload, setPayload, data }) => {
  const [prevIds, setPrevIds] = useState([""]);
  console.log(prevIds);
  return (
    <nav
      className="flex my-3 px-3 flex-col gap-4 w-full md:flex-row justify-center items-center  space-y-3 md:space-y-0 "
      aria-label="Table navigation"
    >
      {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Showing
        <span className="font-semibold px-2 text-gray-900 dark:text-white">
          {payload?.page == 1
            ? `1 - ${payload?.limit}`
            : `${payload?.limit * payload?.page + 1} - ${
                payload?.limit * payload?.page + payload?.limit
              }`}
        </span>
        of
        <span className="font-semibold px-2 text-gray-900 dark:text-white">
          {payload?.total}
        </span>
      </span> */}
      <ul className="inline-flex items-stretch -space-x-px">
        <li>
          <button
            disabled={prevIds?.length === 1}
            onClick={() => {
              if (payload?.page >= 1) {
                setPayload({
                  ...payload,
                  page: payload?.page - 1,
                  sinceId: prevIds[prevIds?.length - 2],
                });
                const updatedArray = [...prevIds];
                updatedArray.pop();
                setPrevIds(updatedArray);
              }
            }}
            className="flex disabled:cursor-not-allowed items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
        {/* <li>
          <a
            href="#"
            className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            ...
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            100
          </a>
        </li> */}
        <li>
          <button
            disabled={data?.data?.items?.length != payload.limit}
            onClick={() => {
              if (payload?.page <= payload?.pages) {
                setPrevIds([
                  ...prevIds,
                  data?.data?.items[data?.data?.items?.length - 1]?.id,
                ]);
                setPayload({
                  ...payload,
                  page: payload?.page + 1,
                  sinceId: data?.data?.items[data?.data?.items?.length - 1]?.id,
                });
              }
            }}
            className="flex disabled:cursor-not-allowed items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
