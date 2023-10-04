import React from "react";

const Loader = ({ h = "50px", w = "50px", color = "blue" }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="animate-spin rounded-full  border-b-2 "
        style={{ width: w, height: h, borderColor: color }}
      />
    </div>
  );
};

export default Loader;
