import React from "react";
import useClickOutSide from "../hooks/useClickOutSide";

const Dropdown = () => {
  const { show, setShow, nodeRef: dropdownRef } = useClickOutSide();
  return (
    <div className="relative w-full max-w-[400px]" ref={dropdownRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={(e) => setShow(!show)}
      >
        Selected
      </div>
      {show && (
        <div className="border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white ">
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">ReactJs</div>
          <div className="p-5 cursor-pointer">VueJs</div>
          <div className="p-5 cursor-pointer">NodeJs</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
