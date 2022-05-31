import React, { useRef, useState } from "react";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };
  React.useEffect(() => {
    function handleClickOutDropdown(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("click", handleClickOutDropdown);

    return () => {
      document.removeEventListener("click", handleClickOutDropdown);
    };
  }, []);
  return (
    <div className="relative w-full max-w-[400px]" ref={dropdownRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={handleClick}
      >
        Selected
      </div>
      {showDropdown && (
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
