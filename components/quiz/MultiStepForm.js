"use client";
import { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import FormNavigation from './FormNavigation';

export default function MultiStepForm ({ currentStep, setCurrentStep, nextStep, prevStep }) {
  const [formData, setFormData] = useState({
    email: '',
    destination: '',
    dateRange: '',
    groupSize: '',
    dreamTrip: '',
    travelType: '',
    additionalInfo: '',
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const submitForm = () => {
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="flex flex-col gap-3 p-5 w-full lg:w-[60%] items-center" >
      {currentStep === 1 && (
        <StepOne formData={formData} currentStep={currentStep} handleChange={handleChange} />
      )}
      {currentStep === 2 && (
        <StepTwo formData={formData} currentStep={currentStep} handleChange={handleChange} />
      )}
      {currentStep === 3 && (
        <StepThree formData={formData} currentStep={currentStep} handleChange={handleChange} />
      )}
      <FormNavigation
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
        submitForm={submitForm}
      />
    </div>
  );
};
