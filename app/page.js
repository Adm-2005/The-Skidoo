"use client";
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaArrowCircleRight } from "react-icons/fa";
import Link from 'next/link';
import MultiStepForm from '../components/quiz/MultiStepForm';

export default function HomePage() {
  return (
    <div className="bg-[url('/hero.png')] h-[657px] flex justify-center items-center flex-col">
      <div className="flex flex-col gap-5 bg-white/20 lg:bg-transparent shadow-white/20 shadow-md lg:shadow-none w-full lg:w-3/5 mt-[45px] lg:mt-0 p-3 text-center">
        <h1 className="font-bold text-2xl w-full font-itim lg:text-5xl">Inspiring Explorations & Endless Possibilities</h1>
        <p className="text-lg font-poppins lg:text-xl w-full font-medium">Unlock the world of travel with Skidoo, your intelligent guide ready to transform your adventures. Whether you're dreaming of a serene getaway, an action-packed holiday, or a journey off the beaten path, Skidoo is here to help you craft the perfect itinerary. </p>
        <Link href="/quiz">
          <button type="button" className="flex font-itim items-center mx-auto gap-2 font-semibold px-6 py-2 bg-black text-white rounded-full text-xl lg:text-2xl w-fit">
            Take our Travel Quiz
            <IconContext.Provider value={{ size: '30px', color: '#ffffff', className: ''}}>
              <FaArrowCircleRight />
            </IconContext.Provider>
          </button>
        </Link>
      </div>
    </div>
  );
}
