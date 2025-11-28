import React from 'react'
import {Route, Routes} from 'react-router-dom'
import LogInPage from './pages/LogInPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import MotorParking from './pages/MotorParking.jsx'
import PSBParking from './pages/PSBParking.jsx'
import CarParkingOne from './pages/CarParkingOne.jsx'
import CarParkingTwo from './pages/CarParkingTwo.jsx'

const App = () => {
  return (
     <div className="relative h-full w-full">
      <Routes>
        <Route path='/' element={<LogInPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/motorparking' element={<MotorParking/>}/>
        <Route path='/psbparking' element={<PSBParking/>}/>
        <Route path='/carparkingone' element={<CarParkingOne/>}/>
        <Route path='/carparkingtwo' element={<CarParkingTwo/>}/>
      </Routes>
    </div>
  )
}

export default App
