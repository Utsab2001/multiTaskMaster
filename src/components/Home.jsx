import React from 'react'

function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-[585px] text-white w-full bg-slate-950">
        <div className="container flex flex-wrap p-10 gap-14 bg-slate-800 w-[340px] justify-center">
          <div className="w-20  p-2 flex flex-col gap-2 items-center cursor-pointer">
            <img src="/weather.png" alt="" className='w-14'/>
            <h5>Weather</h5>
          </div>
          <div className="w-20  p-2 flex flex-col gap-2 items-center cursor-pointer">
            <img src="/notes.png" alt="" className='w-12'/>
            <h5>Notes</h5>
          </div>
          <div className="w-20  p-2 flex flex-col gap-2 items-center cursor-pointer">
            <img src="/calculator.png" alt="" className='w-12'/>
            <h5>Calculator</h5>
          </div>
          <div className="w-20  p-2 flex flex-col gap-2 items-center cursor-pointer">
            <img src="/clockicon.png" alt="" className='w-12'/>
            <h5>Clock</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home