"use client";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { sideBarNavigation, userNavigation } from "@/routes";
import { removeAuthToken } from "@/redux/features/authSlice";
import { useDispatch } from "react-redux";
import { useGetCurrentUserQuery } from "@/redux/services/authApi";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  const { data } = useGetCurrentUserQuery();

  const signout = () => {
    dispatch(removeAuthToken());
    router.push("/signin");
  };

  return (
    <div className="min-h-screen antialiased bg-[#f1f1f1] ">
      <nav className=" px-4 py-2.5 bg-gray-800 border-gray-700 fixed left-0 right-0 top-0 z-50">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center justify-between">
            <button
              data-drawer-target="drawer-navigation"
              data-drawer-toggle="drawer-navigation"
              aria-controls="drawer-navigation"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 mr-2  rounded-lg cursor-pointer md:hidden  focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2  focus:ring-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                aria-hidden="true"
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Toggle sidebar</span>
            </button>
            <Link
              href="/"
              className="flex items-center gap-2 justify-between mr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="25"
                viewBox="0 0 23 25"
                fill="none"
              >
                <g clipPath="url(#clip0_1106_6162)">
                  <path
                    d="M19.3343 4.65149C19.3264 4.6005 19.3016 4.55364 19.2638 4.51849C19.2261 4.48334 19.1776 4.46195 19.1261 4.45777C19.0403 4.44927 17.3503 4.42463 17.3503 4.42463C17.3503 4.42463 15.9391 3.04904 15.7989 2.90885C15.6595 2.76865 15.3876 2.81114 15.2806 2.84173L14.5711 3.06264C14.4838 2.77382 14.37 2.49367 14.2313 2.22572C13.7266 1.26307 12.9899 0.754122 12.1003 0.752423H12.0969C12.0358 0.752423 11.9737 0.75837 11.9109 0.763468C11.8845 0.732881 11.8599 0.700594 11.831 0.671706C11.4427 0.255375 10.9448 0.0540062 10.35 0.0709993C9.20045 0.104136 8.05597 0.936798 7.12814 2.41605C6.47391 3.45603 5.97856 4.76449 5.83667 5.77558C4.51715 6.18597 3.59358 6.4723 3.57404 6.4774C2.90791 6.68726 2.88751 6.70766 2.79915 7.33725C2.73288 7.81306 0.990234 21.3328 0.990234 21.3328L15.6001 23.8673L21.9325 22.2886C21.9342 22.2903 19.3496 4.77214 19.3343 4.65149ZM13.8387 3.29034C13.5014 3.39315 13.1191 3.51295 12.7036 3.64295C12.6959 3.06009 12.6254 2.24612 12.3535 1.546C13.2287 1.70913 13.6569 2.69898 13.8387 3.29034ZM11.9406 3.87915L9.50208 4.63705C9.73658 3.73131 10.1844 2.82983 10.7341 2.24102C10.938 2.02181 11.2235 1.77626 11.5616 1.63606C11.8794 2.29965 11.9482 3.24191 11.9406 3.87915ZM10.3755 0.836539C10.6457 0.830591 10.8734 0.890067 11.0663 1.01921C10.7312 1.19905 10.4292 1.43466 10.1733 1.71593C9.4426 2.50016 8.88353 3.72112 8.66007 4.89704L6.65658 5.51814C7.05252 3.66844 8.60059 0.888368 10.3755 0.836539Z"
                    fill="url(#paint0_linear_1106_6162)"
                  />
                  <path
                    d="M12.0911 7.72287L11.357 10.4817C11.357 10.4817 10.5362 10.1079 9.56418 10.169C8.13846 10.2591 8.12316 11.1614 8.13676 11.3874C8.21493 12.6211 11.4521 12.8913 11.6339 15.7818C11.7775 18.0555 10.4308 19.6112 8.49276 19.7344C6.16641 19.8823 4.88428 18.5041 4.88428 18.5041L5.37793 16.3995C5.37793 16.3995 6.6677 17.3766 7.70088 17.3087C8.37381 17.2662 8.61511 16.7156 8.59217 16.3265C8.49021 14.7164 5.85458 14.8107 5.68805 12.1666C5.54871 9.94047 7.00587 7.68463 10.2218 7.48072C11.4564 7.40595 12.0911 7.72287 12.0911 7.72287Z"
                    fill="white"
                  />
                  <path
                    d="M19.1259 4.45765C19.0401 4.44915 17.3502 4.42451 17.3502 4.42451C17.3502 4.42451 15.9389 3.04892 15.7987 2.90873C15.7443 2.85846 15.6752 2.82691 15.6016 2.81866V23.8672L21.9315 22.2877L19.3324 4.65137C19.3246 4.60064 19.3 4.55398 19.2626 4.51886C19.2252 4.48374 19.1771 4.46219 19.1259 4.45765Z"
                    fill="url(#paint1_linear_1106_6162)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1106_6162"
                    x1="21.8918"
                    y1="28.3135"
                    x2="1.06246"
                    y2="11.9968"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0018B7" />
                    <stop offset="1" stopColor="#0061F3" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1106_6162"
                    x1="43.415"
                    y1="28.3134"
                    x2="13.3831"
                    y2="10.5259"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.517" stopColor="#0400DF" />
                    <stop offset="0.952" stopColor="#579AFF" />
                  </linearGradient>
                  <clipPath id="clip0_1106_6162">
                    <rect
                      width="21.2414"
                      height="24.64"
                      fill="white"
                      transform="translate(0.990234 0.0700073)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span className="self-center text-2xl font-semibold whitespace-nowrap italic text-white">
                Shopify
              </span>
              <span className="font-thin border-[1px] text-sm rounded-xl text-white border-gray-400 p-1">
                Summer {`'23`}
              </span>
            </Link>
            <form className="hidden md:block md:pl-2">
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative sm:w-64 md:w-[26rem]">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
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
                  name="email"
                  id="topbar-search"
                  className="text-sm bg-gray-100 rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2.5  border-gray-600 placeholder-gray-400 text-gray-600"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center lg:order-2">
            <button
              type="button"
              data-drawer-toggle="drawer-navigation"
              aria-controls="drawer-navigation"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 mr-1 text-gray-500 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Toggle search</span>
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                />
              </svg>
            </button>
            {/* Notifications */}
            <Menu as="div">
              <div>
                <Menu.Button className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                  <span className="sr-only">View notifications</span>
                  {/* Bell icon */}
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
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
                <Menu.Items className="absolute right-0 z-10 py-1 m-2 origin-top-right bg-white rounded-md shadow-lg w-70 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
                    Notifications
                  </div>
                  <Menu.Item>
                    <div className="flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                      <div className="flex-shrink-0">
                        <img
                          className="rounded-full w-11 h-11"
                          src={
                            data?.data?.storeImage
                              ? data?.data?.storeImage
                              : "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                          }
                          alt="Avatar"
                        />
                        <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-700">
                          <svg
                            aria-hidden="true"
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="w-full pl-3">
                        <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Muhammad Umair
                          </span>{" "}
                          and{" "}
                          <span className="font-medium text-gray-900 dark:text-white">
                            5 others
                          </span>{" "}
                          order your product
                        </div>
                        <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                          10 minutes ago
                        </div>
                      </div>
                    </div>
                  </Menu.Item>
                  <div className="block py-2 font-medium text-center text-gray-900 cursor-pointer text-md bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline">
                    <div className="inline-flex items-center">
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      View all
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            {/* User */}
            <Menu as="div">
              <div>
                <Menu.Button className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                    alt="user photo"
                  />
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
                <Menu.Items className="absolute right-0 z-10 py-1 m-2 origin-top-right bg-white rounded-md shadow-lg w-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-4 py-3">
                    <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                      {data?.data?.name}
                    </span>
                    <span className="block text-sm text-gray-900 truncate dark:text-white">
                      {data?.data?.email}
                    </span>
                  </div>
                  <hr />
                  <Menu.Item>
                    <div className="py-1 text-gray-700 dark:text-gray-300">
                      {userNavigation.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                        >
                          {item.name}
                        </Link>
                      ))}
                      <div
                        onClick={signout}
                        className="block cursor-pointer px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >
                        Sign out
                      </div>
                    </div>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </nav>
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform  bg-gray-50 border-r border-gray-200 shadow-sm md:translate-x-0`}
        aria-label="Sidenav"
        id="drawer-navigation"
      >
        <div className="h-full px-3 py-5 overflow-y-auto bg-gray-50">
          <form action="#" method="GET" className="mb-2 md:hidden">
            <label htmlFor="sidebar-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
              />
            </div>
          </form>
          <ul className="space-y-2">
            {sideBarNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? "bg-gray-100 dark:bg-gray-700"
                      : "text-gray-900"
                  } flex items-center p-2 text-base font-medium  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                >
                  <item.icon
                    className="w-6 h-6 text-gray-700 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                  />
                  <span className="ml-3">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <main className="p-4 md:ml-64 pt-20 ">
        <div className="p-4">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
