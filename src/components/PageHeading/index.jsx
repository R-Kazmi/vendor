import React from "react";

const PageHeading = ({ heading }) => {
  return (
    <div className="pb-4">
      <h1 className="block whitespace-nowrap text-[20px] text-[#303030] font-bold  text-left">
        {heading}
      </h1>
      {/* <p className="mb-2 hidden h-1 w-14 bg-blue-600 sm:block" /> */}
    </div>
  );
};

export default PageHeading;
