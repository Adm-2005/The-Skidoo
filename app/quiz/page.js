"use client";
import { useState } from "react";
import Layout from "../layout";
import MultiStepForm from "../../components/quiz/MultiStepForm";

export default function Quiz() {
    const [currentStep, setCurrentStep] = useState(1);
    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const prevStep = () => setCurrentStep((prev) => prev - 1);

    let bg = '';

    if(currentStep === 1) {
        bg = 'bg-sky-100';
    }
    else if(currentStep === 2) {
        bg = 'bg-[#FFF4DB]';
    }
    else {
        bg = 'bg-[#FFF4DB]';
    }

    return (
        <Layout index={false}>
            <div className={`flex flex-col lg:flex-row w-full h-full ${bg}`}>
                <div className="w-full lg:w-[40%]">
                    {(currentStep === 1) && (<img src="/stepOne.jpg" className="lg:rounded-r-xl h-[50vh] lg:h-screen w-full"></img>)}
                    {(currentStep === 2) && (<img src="/stepTwo.jpg" className="lg:rounded-r-xl h-[50vh] lg:h-screen w-full"></img>)}
                    {(currentStep === 3) && (<img src="/stepThree.jpg" className="lg:rounded-r-xl h-[50vh] lg:h-screen w-full"></img>)}
                </div>
                <MultiStepForm currentStep={currentStep} setCurrentStep={setCurrentStep} nextStep={nextStep} prevStep={prevStep} />
            </div>
        </Layout>
    )
}