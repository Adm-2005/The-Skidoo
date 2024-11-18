"use client";

export default function Tab({ selectedOption, setSelectedOption, options }) {
    const handleTabClick = (index) => {
        setSelectedOption(options[index]);
    };

    return (
        <div className="flex mx-auto gap-3 h-[80px] items-center overflow-x-auto whitespace-nowrap scrollbar-hide px-4">
            {options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={`font-poppins text-lg rounded-full px-4 py-2 transition-colors ${
                        selectedOption === option 
                            ? 'bg-black text-white' 
                            : 'bg-gray-200 text-black hover:bg-gray-300'
                    }`}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}
