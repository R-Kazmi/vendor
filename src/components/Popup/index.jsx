"use client";
import React, { useEffect, useRef } from "react";

const Popup = ({ children, open, setOpen }) => {
  const divRef = useRef(null);

  // Function to close the div when clicking outside
  const closeDivOnClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setOpen(!open);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDivOnClickOutside);

    return () => {
      document.removeEventListener("click", closeDivOnClickOutside);
    };
  }, []);
  return (
    <div ref={divRef} className={`absolute  z-10 ${open ? "block" : "hidden"}`}>
      {children}
    </div>
  );
};

export default Popup;
