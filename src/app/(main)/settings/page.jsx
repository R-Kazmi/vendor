"use client";
import { BiPhone, BiStore } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import {
  useGetCurrentUserQuery,
  useProfileUpdateMutation,
} from "@/redux/services/authApi";
import { useEffect, useState } from "react";
import { notifyError, notifySuccess } from "@/components/Notification";

const Settings = () => {
  const { data } = useGetCurrentUserQuery();
  const [closeButton, setCloseButton] = useState(true);
  const [editInfo, setEditInfo] = useState(true);
  const editButton = () => {
    setCloseButton(!closeButton);
  };
  const editInfoButton = () => {
    setEditInfo(!editInfo);
  };
  const [profileUpdate, { isSuccess, isLoading, isError, error }] =
    useProfileUpdateMutation();

  const saveProfile = () => {
    const formData = new FormData();
    formData.append("city", "6502dc3bcccbb801093c26c8");
    formData.append("country", "6502dc77cccbb801093d5ee8");
    profileUpdate(formData);
    setEditInfo(!editInfo);
  };

  useEffect(() => {
    if (isSuccess) {
      notifySuccess("Updated");
    }
    if (isError) {
      notifyError(error?.data?.message);
    }
  }, [isSuccess, isError]);

  return (
    <div>
      <h1 className="py-2 text-[20px] font-[700] font-sans text-[#303030]">
        Store details
      </h1>
      <div className="bg-white w-full rounded-lg p-4 border">
        <div className="flex pb-2 justify-between">
          <h1 className="font-[600] text-[15px] text-[#303030]">Profile</h1>
          <button
            className="hover:text-[#004299] text-blue-600 text-[15px] hover:underline"
            onClick={editButton}
          >
            {closeButton ? "Edit" : "Close"}
          </button>
        </div>

        {!closeButton ? (
          <>
            <div className="grid lg:grid-cols-2 gap-2">
              <div className="h-50 flex w-auto flex-col justify-center">
                <p className="font-sans text-sm font-normal text-gray-500">
                  Store name
                </p>
                <div className="gap-1 flex flex-col mt-2">
                  <input
                    type="email"
                    id="email"
                    className="rounded-lg h-8 text-gray-600"
                    value={data?.data?.storeName}
                  />
                </div>
              </div>
              <div className="h-50 flex w-auto flex-col justify-center">
                <p className="font-sans text-sm font-normal text-gray-500">
                  Store phone
                </p>
                <div className="gap-1 flex flex-col mt-2">
                  <input
                    type="email"
                    id="email"
                    className="rounded-lg h-8 text-gray-600"
                    value={data?.data?.phone}
                  />
                </div>
              </div>
              <div className="h-50 flex w-auto flex-col justify-center">
                <p className="font-sans text-sm font-normal text-gray-500">
                  Store email
                </p>
                <div className="gap-1 flex flex-col mt-2">
                  <input
                    type="email"
                    id="email"
                    className="rounded-lg h-8 text-gray-600"
                    value={data?.data?.email}
                  />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <button
                className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
                onClick={editButton}
              >
                Save
              </button>
              <button
                className="flex-shrink-0 border-transparent border-4 text-blue-600 hover:text-[#004299] text-sm py-1 px-2 rounded"
                type="button"
                onClick={editButton}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <div className="grid lg:grid-cols-2">
            <div className="flex py-2 bg-clip-border bg-white !flex-row flex-grow items-center rounded-[20px]">
              <div className="flex w-auto flex-row items-center">
                <div className="rounded-full bg-[#E3E3E3] p-3 dark:bg-navy-700">
                  <span className="flex items-center text-gray-700 ">
                    {<BiStore className="h-4 w-4" />}
                  </span>
                </div>
              </div>

              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-sans text-sm font-normal text-gray-500">
                  Store name
                </p>
                <h4 className="text-sm font-medium text-[#303030]">
                  {data?.data?.storeName}
                </h4>
              </div>
            </div>

            <div className="flex py-2 bg-clip-border bg-white !flex-row flex-grow items-center rounded-[20px]">
              <div className="flex w-auto flex-row items-center">
                <div className="rounded-full bg-[#E3E3E3] p-3 dark:bg-navy-700">
                  <span className="flex items-center text-gray-700 ">
                    {<BiPhone className="h-4 w-4" />}
                  </span>
                </div>
              </div>

              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-sans text-sm font-normal text-gray-500">
                  Store phone
                </p>
                <h4 className="text-sm font-medium text-[#303030] ">
                  {data?.data?.phone}
                </h4>
              </div>
            </div>

            <div className="flex py-2 bg-clip-border bg-white !flex-row flex-grow items-center rounded-[20px]">
              <div className="flex w-auto flex-row items-center">
                <div className="rounded-full bg-[#E3E3E3] p-3">
                  <span className="flex items-center text-gray-700 ">
                    {<FiMail className="h-4 w-4" />}
                  </span>
                </div>
              </div>

              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-sans text-sm font-normal text-gray-500">
                  Store email
                </p>
                <h4 className="text-sm font-medium text-[#303030]">
                  {data?.data?.email}
                </h4>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-white w-full rounded-lg mt-5 p-4 border">
        <div className="flex pb-2 justify-between">
          <h1 className="font-[600] text-[15px] text-[#303030]">
            Billing information
          </h1>
          <button
            className="hover:text-[#004299] text-blue-600 text-[15px] hover:underline"
            onClick={editInfoButton}
          >
            {editInfo ? "Edit" : "Close"}
          </button>
        </div>

        {editInfo ? (
          <div className="grid lg:grid-cols-2">
            <div className="flex py-2 bg-clip-border bg-white !flex-row flex-grow items-center rounded-[20px]">
              <div className="h-50 flex w-auto flex-col justify-center">
                <p className="font-sans text-sm font-normal text-gray-500">
                  Business address
                </p>
                <h4 className="text-sm font-medium text-[#303030]">
                  {data?.data?.city}
                </h4>
                <h4 className="text-sm font-medium text-[#303030]">
                  {data?.data?.country}
                </h4>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="grid lg:grid-cols-2 gap-2">
              <div className="h-50 flex w-auto flex-col justify-center">
                <p className="font-sans text-sm font-normal text-gray-500">
                  Country
                </p>
                <div className="gap-1 flex flex-col mt-2">
                  <input
                    type="email"
                    id="email"
                    className="rounded-lg h-8 text-gray-600"
                    value={data?.data?.country}
                  />
                </div>
              </div>
              <div className="h-50 flex w-auto flex-col justify-center">
                <p className="font-sans text-sm font-normal text-gray-500">
                  City
                </p>
                <div className="gap-1 flex flex-col mt-2">
                  <input
                    type="email"
                    id="email"
                    className="rounded-lg h-8 text-gray-600"
                    value={data?.data?.city}
                  />
                </div>
              </div>
              <div className="h-50 flex w-auto flex-col justify-center">
                <p className="font-sans text-sm font-normal text-gray-500">
                  Address
                </p>
                <div className="gap-1 flex flex-col mt-2">
                  <input
                    type="email"
                    id="email"
                    className="rounded-lg h-8 text-gray-600"
                    value={data?.data?.address}
                  />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <button
                className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
                onClick={saveProfile}
              >
                Save
              </button>
              <button
                className="flex-shrink-0 border-transparent border-4 text-blue-600 hover:text-[#004299] text-sm py-1 px-2 rounded"
                type="button"
                onClick={editInfoButton}
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Settings;
