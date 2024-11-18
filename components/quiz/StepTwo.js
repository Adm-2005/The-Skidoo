"use client";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const travelOptions = [
  { href: '/icons/budget.png', type: 'Budget' },
  { href: '/icons/romantic.png', type: 'Romantic' },
  { href: '/icons/adventure.png', type: 'Adventure' },
  { href: '/icons/culture.png', type: 'Culture' },
  { href: '/icons/relaxation.png', type: 'Relaxation' },
  { href: '/icons/family.png', type: 'Family' },
  { href: '/icons/friends.png', type: 'Friends' },
  { href: '/icons/solo.png', type: 'Solo' },
  { href: '/icons/corporation.png', type: 'Corporate' },
  { href: '/icons/senior.png', type: 'Senior' }
];

const StepTwo = ({ formData, handleChange }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const nextSlide = () => {
    if(currentSlide === 2) {
      setCurrentSlide((prev) => prev - 1);
    }
    else {
      setCurrentSlide((prev) => prev + 1);
    }
  }

  const prevSlide = () => {
    if(currentSlide === 1) {
      setCurrentSlide((prev) => prev + 1);
    }
    else {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col gap-7 w-full h-full justify-center items-center">
      <h1 className="text-xl font-itim lg:text-2xl text-center font-bold text-[#F2AC78]">
        Step 2 / 3: Choose Your Travel Type
      </h1>

      <div className="flex flex-row items-center font-poppins gap-[20px] lg:hidden">
        <IconContext.Provider value={{ size: '50px' }}>
          <FaChevronLeft onClick={prevSlide} />
        </IconContext.Provider>

        {currentSlide === 1 && (
          <div className="grid grid-cols-1 grid-rows-5 w-[60vw] gap-2">
            {travelOptions.slice(0, 5).map((option) => (
              <div
                key={option.type}
                className={`flex justify-center items-center h-[80px] hover:bg-[#F2AC78] shadow-md rounded-lg p-4 ${
                  formData.travelType === option.type ? 'active' : ''
                }`}
                onClick={() => handleChange('travelType', option.type)}
              >
                <div className="flex justify-center items-center gap-2">
                  <img src={option.href} className="w-[20px] h-[20px]" alt={option.type} />
                  <h3>{option.type}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {currentSlide === 2 && (
          <div className="grid grid-cols-1 grid-rows-5 w-[60vw] gap-2">
            {travelOptions.slice(5).map((option) => (
              <div
                key={option.type}
                className={`flex justify-center items-center h-[80px] hover:bg-[#F2AC78] shadow-md rounded-lg p-4 ${
                  formData.travelType === option.type ? 'active' : ''
                }`}
                onClick={() => handleChange('travelType', option.type)}
              >
                <div className="flex justify-center items-center gap-2">
                  <img src={option.href} className="w-[20px] h-[20px]" alt={option.type} />
                  <h3>{option.type}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        <IconContext.Provider value={{ size: '50px' }}>
          <FaChevronRight onClick={nextSlide} />
        </IconContext.Provider>
      </div>

      {/* Grid layout for larger screens */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-2 font-poppins w-full max-w-md">
        {travelOptions.map((option) => (
          <div
            key={option.type}
            className={`flex justify-center items-center h-[80px] hover:bg-[#F2AC78] shadow-md rounded-lg p-4 ${
              formData.travelType === option.type ? 'active' : ''
            }`}
            onClick={() => handleChange('travelType', option.type)}
          >
            <div className="flex justify-center items-center gap-2">
              <img src={option.href} className="w-[20px] h-[20px]" alt={option.type} />
              <h3>{option.type}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepTwo;
