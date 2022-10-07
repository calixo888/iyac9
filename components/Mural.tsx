import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Mural() {
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
    <div className="w-screen relative">
      <TransformWrapper
        initialScale={1}
        // initialPositionX={200}
        // initialPositionY={100}
        wheel={{ disabled: true }}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className="z-10 absolute right-3 bottom-3 flex flex-items">
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
              <Image src="/mural.png" alt="test" width={windowSize.innerWidth} height={windowSize.innerWidth * 0.66} />
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

