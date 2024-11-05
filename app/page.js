"use client";
import {  } from 'react';
import { IconContext } from 'react-icons';
import { FaArrowCircleRight } from "react-icons/fa";
import Link from 'next/link'
import MultiStepForm from '../components/MultiStepForm';

export default function HomePage() {
  return (
    <div className="bg-[url('/hero.png')] h-[657px] flex justify-center items-center flex-col">
      <div className="flex flex-col gap-5 w-3/5 text-center">
        <h1 className="font-bold text-5xl">Inspiring Explorations & Endless Possibilities</h1>
        <p className="text-xl font-medium">Unlock the world of travel with Skidoo, your intelligent guide ready to transform your adventures. Whether you're dreaming of a serene getaway, an action-packed holiday, or a journey off the beaten path, Skidoo is here to help you craft the perfect itinerary. </p>
        <Link href="/quiz">
          <button type="button" className="flex mx-auto gap-2 font-semibold px-6 py-2 bg-black text-white rounded-full text-2xl w-fit">
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
