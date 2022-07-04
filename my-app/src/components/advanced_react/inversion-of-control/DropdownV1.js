import React from "react";
import { useState } from "react";

const Dropdown = ({
  options,
  placeholder = "Please select an option",
  inputPlaceholder,
  onChange = () => {},
  visibleIconCheck = false,
  visibleInputSearch = false,
}) => {
  const [show, setShow] = useState(false);
  const handleToggleDropdown = () => {
    setShow(!show);
  };
  return (
    <div className="relative inline-block w-full max-w-[300px]">
      <div
        className="placeholder flex items-center justify-between p-4 border border-gray-300
      rounded cursor-pointer"
        onClick={handleToggleDropdown}
      >
        {placeholder}
      </div>
      {show && (
        <div className="options border border-gray-300 rounded">
          {visibleInputSearch && (
            <div className="p-2">
              <input
                type="text"
                placeholder={inputPlaceholder}
                className="p-4 outline-none w-full border border-gray-200 rounded"
                onChange={onChange}
              />
            </div>
          )}
          {options &&
            options.length > 0 &&
            options.map((item) => (
              <div
                key={item.title}
                className="options-item p-4 cursor-pointer flex items-center justify-between"
                onClick={item.onClick}
              >
                <span>{item.title}</span>
                {visibleIconCheck && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
