import { useState } from 'react'
import './App.css'
import {Outlet} from "react-router-dom"
import Clock from './components/Clock';
import Calculator2 from './components/calculator/Calculator2';
import Weather2 from './components/Weather2';
import Dummy from './components/Dummy';
import Home from './components/Home';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Outlet/>
      {/* <div className="flex items-center"> */}
      {/* <Home/> */}
      {/* <Clock /> */}
      {/* <Weather2 /> */}
      {/* <Calculator /> */}
      {/* <Calculator2 /> */}
      {/* <Dummy/> */}
      {/* </div> */}
    </>
  );
}

export default App
