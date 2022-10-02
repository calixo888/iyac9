import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(1400);
  const [screenHeight, setScreenHeight] = useState(800);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    }
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
            <div className="z-10 bg-white fixed left-0 top-0">
              <p>IYA C9</p>
            </div>
            <div className="z-10 bg-white fixed right-0 top-0">
              <p>mural, people</p>
            </div>
            <div className="z-10 bg-white fixed left-0 bottom-0">
              <p>socials</p>
            </div>
            <div className="z-10 bg-white fixed right-0 bottom-0">
              <button onClick={() => zoomIn()}>+</button>
              <button onClick={() => zoomOut()}>-</button>
              <button onClick={() => resetTransform()}>reset</button>
            </div>
            <TransformComponent>
              <Image src="/sunset.png" alt="test" width={screenWidth} height={screenHeight} />
              {/* <div>Example text</div> */}
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  )
}

