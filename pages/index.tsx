import type { NextPage } from 'next';

export default function Home() {
  return (
    <div>
      <div className="h-screen bg-blue-100 justify-center items-center flex">
        <h1 className="text-xl font-semibold">Header</h1>
      </div>

      <div className="h-screen bg-green-100 justify-center items-center flex">
        <h1 className="text-xl font-semibold">Grid of IY9 Profiles</h1>
      </div>

      <div className="h-screen bg-red-100 justify-center items-center flex">
        <h1 className="text-xl font-semibold">Digitized Mural w/ tooltips</h1>
      </div>

      <div className="h-screen bg-yellow-100 justify-center items-center flex">
        <h1 className="text-xl font-semibold">Mural Timelapse video embed</h1>
      </div>
    </div>
  )
}

