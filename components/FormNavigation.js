const FormNavigation = ({ currentStep, nextStep, prevStep, submitForm }) => (
    <div className={currentStep > 1 ? "flex gap-7 justify-between" : "flex justify-end"}>
      {currentStep > 1 && (
        <button onClick={prevStep} className="bg-black px-4 py-2 w-[100px] text-white rounded-full">
          Previous
        </button>
      )}
      {currentStep < 3 ? (
        <button onClick={nextStep} className="bg-black px-4 py-2 w-[100px] text-white rounded-full">
          Next
        </button>
      ) : (
        <button onClick={submitForm} className="bg-black px-4 py-2 w-[100px] text-white rounded-full">
          Submit
        </button>
      )}
    </div>
);
  
export default FormNavigation;
  