import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import Weather2 from './components/Weather2.jsx'
import Calculator2 from './components/calculator/Calculator2.jsx'
import Clock from './components/Clock.jsx'
import Notes from './components/Notes.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>} >
    <Route path='' element={<Home/>}/>
    <Route path='weather' element={<Weather2/>}/>
    <Route path='calculator' element={<Calculator2/>}/>
    <Route path='clock' element={<Clock/>}/>
    <Route path='notes' element={<Notes/>}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
