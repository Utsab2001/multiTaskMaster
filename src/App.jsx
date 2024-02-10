import { useState } from 'react'
import './App.css'
import {Outlet} from "react-router-dom"
import Home from './components/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className="min-h-screen bg-slate-800 flex justify-center"> */}
      <div className='flex justify-center h-full'>
      {/* <div class="min-h-screen flex items-center justify-center bg-slate-800"> */}
    <Home/>
        {/* <div class="w-64 h-64 p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col justify-center items-center text-white"> */}
          {/* <Outlet/> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default App
