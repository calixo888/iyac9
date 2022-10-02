import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Home() {
  const [windowSize, setWindowSize] = useState({ innerWidth: 1400, innerHeight: 800 });

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    if (typeof window !== 'undefined') {
      handleWindowResize();
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-blue-100">
      <TransformWrapper
        initialScale={1}
        // initialPositionX={200}
        // initialPositionY={100}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className="z-10 fixed left-3 top-3">
              <div className="bg-white py-2 px-5 rounded-full border-gray-1 shadow-lg text-lg">☁️ IYA<strong>C9</strong></div>
            </div>
            <div className="z-10 fixed right-3 top-3">
              <div className="flex flex-row items-center">
                <div className="bg-white py-2 px-5 rounded-full border-gray-1 shadow-lg text-md ml-3">Mural</div>
                <div className="bg-white py-2 px-5 rounded-full border-gray-1 shadow-lg text-md ml-3">People</div>
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
            <div className="z-10 fixed right-3 bottom-3 flex flex-items">
              <button
                onClick={() => zoomIn()}
                className="bg-white w-10 h-10 rounded-full border-gray-1 shadow-lg flex items-center justify-center ml-1"
              >
                <Image src="/icons/zoom-in.svg" width={20} height={20} />
              </button>
              <button
                onClick={() => zoomOut()}
                className="bg-white w-10 h-10 rounded-full border-gray-1 shadow-lg flex items-center justify-center ml-1"
              >
                <Image src="/icons/zoom-out.svg" width={20} height={20} />
              </button>
              <button
                onClick={() => resetTransform()}
                className="bg-white w-10 h-10 rounded-full border-gray-1 shadow-lg flex items-center justify-center ml-1"
              >
                <Image className="" src="/icons/rotate.svg" width={20} height={20} />
              </button>
            </div>
            <TransformComponent>
              <Image src="/sunset.png" alt="test" width={windowSize.innerWidth} height={windowSize.innerHeight} />
              {/* <div>Example text</div> */}
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  )

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
}

