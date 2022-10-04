import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Mural from "./Mural";

export default function Profiles() {
  const [profiles, setProfiles] = useState();

  // useEffect(() => {
  //   setProfiles([
  //     {
  //       name: "Calix Huang",
  //       pronouns: "he/him",
  //       bio: "Calix is a 2nd year CS student at UC Berkeley. He is interested in the intersection of technology and social justice, and is currently working on a project to help people with disabilities find accessible housing. In his free time, he enjoys playing video games, watching anime, and playing the piano.",
  //     }
  //   ])
  // })

  return (
    <div className="py-16 max-w-5xl mx-auto">
      <div className="grid grid-cols-3 gap-5">
        <div className="text-center">
          <img className="w-48 rounded-full mx-auto" src="/pfp.jpeg" alt="Picture" />
          <h3 className="text-4xl font-semibold mt-4">Calix Huang</h3>
          <p className="text-sm text-gray-400 mt-2">he/him</p>
          <p className="mt-4">Calix is a 2nd year CS student at UC Berkeley. He is interested in the intersection of technology and social justice, and is currently working on a project to help people with disabilities find accessible housing. In his free time, he enjoys playing video games, watching anime, and playing the piano.</p>
        </div>
        <div className="text-center">
          <img className="w-48 rounded-full mx-auto" src="/pfp.jpeg" alt="Picture" />
          <h3 className="text-4xl font-semibold mt-4">Calix Huang</h3>
          <p className="text-sm text-gray-400 mt-2">he/him</p>
          <p className="mt-4">Calix is a 2nd year CS student at UC Berkeley. He is interested in the intersection of technology and social justice, and is currently working on a project to help people with disabilities find accessible housing. In his free time, he enjoys playing video games, watching anime, and playing the piano.</p>
        </div>
      </div>
    </div>
  )
}

