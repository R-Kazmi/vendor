import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { TbShoppingCartCancel } from "react-icons/tb";
import { Fragment } from "react";
import { useRouter } from "next/navigation";

const Product = (props) => {
  const router = useRouter();
  const { data } = props;
  console.log("ok", data);

  return (
    <>
      <div className="w-full">
        <div className="flex justify-between">
          <div className="flex flex-row ">
            <p className="flex bg-[#CDFEE1] rounded-lg  px-2 text-sm items-center">
              <TbShoppingCartCancel className="mt-1 mr-2 text-green-700" />
              Unfulfilled ({1})
            </p>
            <p className="flex pl-1 text-sm items-center">ISM1001MART-F1</p>
          </div>
          <div>
            <Menu as="div">
              <div>
                <Menu.Button className="flex mx-3 md:mr-0 text-3xl">
                  <span className="sr-only">Open user menu</span>
                  <p>...</p>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-10 md:right-auto z-10 m-2 w-40 origin-top-right rounded-md bg-white  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    <div className=" text-gray-700 dark:text-gray-300">
                      <button className=" p-2 w-full">Hold fulfillment</button>
                    </div>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <div className="flex flex-wrap mt-4 border justify-between rounded-md p-4">
          <div className="flex gap-4 ">
            <div>
              <img
                className="h-12 w-12 border rounded-md"
                src="https://www.thesportstore.pk/image/cache/20-6-2018/TTBDYA04-1000x1000.jpg"
              />
            </div>
            <div>
              <p
                className="cursor-pointer text-sm"
                onClick={() => router.push(`/orders`)}
              >
                CARBON TABLE TENNIS BLADE
              </p>
              <p className="bg-gray-200 rounded-lg px-2 py-0.5 w-fit text-xs">
                M / Red / Forrest Gump
              </p>
              <p className="text-xs text-gray-500 pl-1">SKU: WEST-109030</p>
            </div>
          </div>
          <div className="flex gap-4 text-[15px]">
            <p>
              Rs 6,690.00 x <span> 1 </span>
            </p>
            <p>Rs 6,690.00</p>
          </div>
        </div>
      </div>
      <button className="self-end bg-gray-600 text-white p-2 rounded-lg text-sm hover:bg-gray-800">
        Fulfill item
      </button>
    </>
  );
};

export default Product;
