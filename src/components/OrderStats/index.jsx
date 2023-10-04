"use client";

import { BiCalendar } from "react-icons/bi";

const OrderStats = () => {
  return (
    <div
      className={
        "divide-x-2 h-fit min-h-[4rem] bg-white shadow-sm overflow-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 rounded-lg !p-0 border border-secondary-100 my-6 divide-secondary-100 "
      }
    >
      <div className="flex relative cursor-pointer justify-center items-center gap-2 hover:bg-[#f3f3f3] py-4 m-2 rounded-lg text-center">
        <BiCalendar />
        <h1>Today</h1>
      </div>
      <div className="relative p-2 flex flex-col text-sm font-normal m-2 hover:bg-[#f3f3f3]">
        <h1 className=" underline underline-offset-4 decoration-dotted  text-[#303030]">
          Orders
        </h1>

        <p className="text-[#303030] font-medium">1 -</p>
      </div>
      <div className="p-2 text-sm font-normal m-2 hover:bg-[#f3f3f3]">
        <h1 className=" underline underline-offset-4 decoration-dotted text-[#303030]">
          Ordered Items
        </h1>
        <p className="text-[#303030] font-medium">1 -</p>
      </div>
      <div className="p-2 text-sm font-normal m-2 hover:bg-[#f3f3f3]">
        <h1 className=" underline underline-offset-4 decoration-dotted text-[#303030]">
          Returned Items
        </h1>
        <p className="text-[#303030] font-medium">1 -</p>
      </div>
      <div className="p-2 text-sm font-normal m-2 hover:bg-[#f3f3f3]">
        <h1 className=" underline underline-offset-4 decoration-dotted text-[#303030]">
          Fulfilled Items
        </h1>
        <p className="text-[#303030] font-medium">1 -</p>
      </div>
      <div className="p-2 text-sm font-normal m-2 hover:bg-[#f3f3f3]">
        <h1 className=" underline underline-offset-4 decoration-dotted text-[#303030]">
          Time to fulfill
        </h1>
        <p className="text-[#303030] font-medium"> -</p>
      </div>
    </div>
  );
};

export default OrderStats;
