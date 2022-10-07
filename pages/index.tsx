import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Mural from "../components/Mural";
import People from "../components/People.jsx";

export default function Home() {
  return (
    <div className="">
      <div>
        <div className="z-10 fixed left-3 top-3">
          <a href="#">
            <div className="bg-white py-2 px-5 rounded-full border-gray-1 shadow-lg text-lg">☁️ IYA<strong>C9</strong></div>
          </a>
        </div>
        <div className="z-10 fixed right-3 top-3">
          <div className="flex flex-row items-center">
            <a href="#mural">
              <div className="bg-white py-2 px-5 rounded-full border-gray-1 shadow-lg text-md ml-3">Mural</div>
            </a>
            <a href="#people">
              <div className="bg-white py-2 px-5 rounded-full border-gray-1 shadow-lg text-md ml-3">People</div>
            </a>
          </div>
        </div>
        <div className="z-10 fixed left-3 bottom-3">
          <a href="https://instagram.com/9cohort" target="_blank" rel="noreferrer">
            <div
              className="bg-white w-10 h-10 rounded-full border-gray-1 shadow-lg flex items-center justify-center"
            >
              <Image src="/icons/instagram.svg" width={20} height={20} />
            </div>
          </a>
        </div>
      </div>

      <div>
        <img className="desktop" src="/header-desktop.png" />
        <img className="mobile" src="/header-mobile.png" />
      </div>
      <div id="mural" className="desktop">
        <Mural/>
      </div>
      <div id="people">
        <People />
      </div>
    </div>
  )
}

