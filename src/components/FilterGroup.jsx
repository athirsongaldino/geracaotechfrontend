import React, { useState } from "react";

const FilterGroup = ({ title, inputType, options }) => {

  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (value) => {
    if (inputType === "radio") {
      setSelectedValue(value);
    }
  };

  return (
    <div className="mb-4 w-[308px]">
      <h3 className="text-14 text-dark-gray-2 font-semibold mb-2">{title}</h3>
      <div className="space-y-2">
        {options.map((option, index) => (
          <label key={index} className="flex items-center">
            <input
              type={inputType}
              value={option.value}
              checked={inputType === "radio" ? selectedValue === (option.value || option.text) : undefined}
              onChange={() => handleChange(option.value || option.text)}
              className="w-[22px] h-[22px]"
            />
            <span className="ml-2 text-dark-gray-2">{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;