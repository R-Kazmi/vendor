"use client";
import PageHeading from "@/components/PageHeading";
import { settingsNavigation } from "@/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SettingsLayout({ children }) {
  const pathname = usePathname();

  return (
    <section>
      <PageHeading heading={"Settings"} />
      <div className="grid grid-cols-8 pt-3 pb-10 sm:grid-cols-10">
        <div className="relative my-4 w-56 sm:hidden">
          <input
            className="peer hidden"
            type="checkbox"
            name="select-1"
            id="select-1"
          />
          <label
            htmlFor="select-1"
            className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-700 peer-checked:ring"
          >
            Store
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
            {settingsNavigation.map((item) => (
              <li
                className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white"
                key={item.href}
              >
                <Link href="/settings">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 hidden sm:block">
          <ul>
            {settingsNavigation.map((item) => (
              <li
                key={item.href}
                className={`${
                  pathname === item.href
                    ? "text-blue-700 border-l-blue-700"
                    : ""
                } mt-5 cursor-pointer border-l-2  px-2 py-2 font-semibold  transition hover:border-l-blue-700 hover:text-blue-700`}
              >
                <Link href="/settings">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <main className="col-span-8 overflow-hidden rounded-xl p-0 sm:p-4 ">
          {children}
        </main>
      </div>
    </section>
  );
}
