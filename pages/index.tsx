import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import HeaderNav from '../components/HeaderNav';
import Mural from "../components/Mural";
import People from "../components/People.jsx";

export default function Home() {
  return (
    <div>
      <div>
        <HeaderNav/>
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
        <img className="mobile w-full" src="/header-mobile.png" />
      </div>
      <div className="blue-to-white-gradient"></div>
      <div id="mural" className="desktop">
        <Mural/>
      </div>
      <div id="people">
        <People />
      </div>
    </div>
  )
}

