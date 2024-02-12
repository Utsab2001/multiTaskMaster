import React from 'react'
import {Link} from 'react-router-dom';
function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-[585px] text-white w-full bg-slate-950">
        <div className="container flex flex-wrap p-10 gap-14 bg-slate-800 w-[340px] justify-center">
          <Link
            to="/weather"
            className="w-20  p-2 flex flex-col gap-2 items-center cursor-pointer"
          >
            <img src="/weather.png" alt="" className="w-14" />
            <h5>Weather</h5>
          </Link>
          <Link
            to="/notes"
            className="w-20  p-2 flex flex-col gap-2 items-center cursor-pointer"
          >
            <img src="/notes.png" alt="" className="w-12" />
            <h5>Notes</h5>
          </Link>
          <Link
            to="/calculator"
            className="w-20  p-2 flex flex-col gap-2 items-center cursor-pointer"
          >
            <img src="/calculator.png" alt="" className="w-12" />
            <h5>Calculator</h5>
          </Link>
          <Link
            to="/clock"
             className="w-20  p-2 flex flex-col gap-2 items-center cursor-pointer"
          >
            <img src="/clockicon.png" alt="" className="w-12" />
            <h5>Clock</h5>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home