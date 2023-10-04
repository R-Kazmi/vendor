import React from "react";
import { BiRadioCircle } from "react-icons/bi";

const CurrentStatus = ({ type }) => {
  switch (type) {
    case "Approved":
    case "warning":
    case "Payment pending":
      return (
        <p className="font-normal flex whitespace-nowrap flex-row justify-center items-center  gap-2 bg-lightGreen-200 rounded-full w-fit bg-[#FFD6A4] text-[#412d00]  text-[12px] px-2">
          <BiRadioCircle /> {type}
        </p>
      );
    case "draft":
      return (
        <p className="font-normal flex whitespace-nowrap flex-row justify-center items-center   gap-2 bg-lightGreen-200 rounded-full w-fit bg-[#e0f0ff] text-[#1566aa]  text-[12px] px-2.5">
          Draft
        </p>
      );
    case "Waiting":
    case "Pending":
    case "Sold":
      return (
        <p className="rounded-full w-fit whitespace-nowrap bg-[#F2F4F7] text-[14px] px-2 text-[#344054]">
          <span className="font-black text-4xl">•</span> {type}
        </p>
      );
    case "Responded":
    case "Open":
    case "Paid":
    case "Booked":
    case "success":
      return (
        <p className="rounded-full w-fit whitespace-nowrap bg-[#ECFDF3] text-[14px] px-2 text-[#027A48]">
          • {type}
        </p>
      );
    case "Rejected":
    case "Closed":
    case "Withdrawn":
    case "Withdraw":
    case "InActive":
    case "Cancelled":
    case "error":
      return (
        <p className="rounded-full w-fit whitespace-nowrap bg-[#FFE4E4] text-[14px] px-2 text-[#DF4444]">
          • {type}
        </p>
      );
    case "InProgress":
    case "active":
      return (
        <p className="font-normal flex flex-row justify-center items-center p-1 gap-2  bg-lightGreen-200 rounded-full whitespace-nowrap w-fit bg-[#ECFDF3] text-[#027A48]  text-[14px] px-2">
          • Active
        </p>
      );

    default:
      return (
        <p className="font-normal flex flex-row justify-center items-center rounded-full w-fit whitespace-nowrap gap-2 bg-[#f4f4f4] text-[14px] px-2 ">
          • {type}
        </p>
      );
  }
};

export default CurrentStatus;
