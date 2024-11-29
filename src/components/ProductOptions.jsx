import { useState } from "react";

const ProductOptions = ({ options, radius, shape, type }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const getOptionStyle = (option) => {
        const baseStyle = "cursor-pointer flex items-center justify-center";

        const shapeStyle = shape === "square" ? `w-[48px] h-[48px] border border-light-gray-2 ${radius ? `rounded-[${radius}]` : ""}` : "w-[31px] h-[31px] rounded-full border-2";

        const typeStyle = type === "text" ? "text-[16px] leading-[24px] tracking-[0.75px] font-bold text-dark-gray-2" : "";

        const selectedStyle = selectedOption === option ? shape === "square" ? "border-2 border-primary bg-primary text-white" : "ring-2 ring-primary ring-offset-2" : "";

        return `${baseStyle} ${shapeStyle} ${typeStyle} ${selectedStyle}`
    };
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    return (
        <div className="flex flex-wrap gap-2">
            {options.map((option, index) => (
                <div
                    key={index}
                    className={getOptionStyle(option)}
                    onClick={() => handleOptionClick(option)}
                    style={type === "color" ? { backgroundColor: option } : {}}
                >
                    {type === "text" && option}
                </div>
            ))}
        </div>
    );
};

export default ProductOptions;