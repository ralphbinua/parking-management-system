import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LogInPage from './pages/LogInPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import DashboardLayout from './pages/dashboard/DashboardLayout.jsx'  // new layout wrapper
import MotorParking from './pages/dashboard/MotorParking.jsx'
import PSBParking from './pages/dashboard/PSBParking.jsx'
import CarParkingOne from './pages/dashboard/CarParkingOne.jsx'
import CarParkingTwo from './pages/dashboard/CarParkingTwo.jsx'
import Faculty from './pages/dashboard/Faculty.jsx'
import DashboardLayoutAdmin from "./pages/admin/dashboard/DashboardLayout.jsx";
import RealTimeSlotMonitoring from "./pages/admin/dashboard/RealTimeSlotMonitoring.jsx";
import EntryExitCounter from "./pages/admin/dashboard/EntryExitCounter.jsx";
import NotificationHistoryMonitoring from "./pages/admin/dashboard/NotificationHistoryMonitoring.jsx";


const App = () => {
  return (
    <div className="relative h-full w-full">
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Protected Dashboard routes with shared layout for user */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="motorparking" element={<MotorParking />} />
          <Route path="psbparking" element={<PSBParking />} />
          <Route path="carparkingone" element={<CarParkingOne />} />
          <Route path="carparkingtwo" element={<CarParkingTwo />} />
          <Route path="faculty" element={<Faculty />} />
        </Route>

        {/* Protected Dashboard routes with shared layout for admin */}
        <Route path="/admin/dashboard" element={<DashboardLayoutAdmin />}>
          <Route path="realtimeslotmonitoring" element={<RealTimeSlotMonitoring />}/>
          <Route path="entryexitcounter" element={<EntryExitCounter />}/>
          <Route path="notificationhistorymonitoring" element={<NotificationHistoryMonitoring />}/>
        </Route>
      </Routes>

    </div>
  )
}

export default App
