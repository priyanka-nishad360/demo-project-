import React from "react";

const Checkbox = ({ label, labelId, checked, onChange }) => {
  return (
      <div className="flex outline w-full justify-start">
        <input
          type="checkbox"
        //   className=""
          id={labelId}
          checked={checked}
          onChange={onChange}
        />
      <div className="ml-2 text-gray-700 font-medium">
        <label htmlFor={labelId} className="inline-block">
          {label}
        </label>
      </div>
      <div
        className={`h-5 w-5 rounded-full ${
          checked ? "bg-green-500" : "bg-white border border-gray-300"
        }`}
      >
        {checked && (
          <svg
            className="w-1 h-1 text-white"
            // viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 7.5L5.5 9.5L8.5 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Checkbox;