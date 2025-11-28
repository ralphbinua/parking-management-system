import React from 'react'
import {Route, Routes} from 'react-router-dom'
import LogInPage from './pages/LogInPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'

const App = () => {
  return (
     <div className="relative h-full w-full">
      <Routes>
        <Route path='/login' element={<LogInPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
      </Routes>
    </div>
  )
}

export default App
