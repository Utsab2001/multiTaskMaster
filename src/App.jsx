import { useState } from 'react'
import './App.css'
import {Outlet} from "react-router-dom"
import Clock from './components/Clock';
import Calculator2 from './components/calculator/Calculator2';
import Weather2 from './components/Weather2';
import Dummy from './components/Dummy';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className="flex items-center"> */}
      <Clock />
      {/* <Weather2 /> */}
      {/* <Calculator /> */}
      {/* <Calculator2 /> */}
      {/* <Dummy/> */}
      {/* </div> */}
    </>
  );
}

export default App
