
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Doctor from './pages/Doctors'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Appointment from './pages/Appointment';
import Login from './pages/Login';
import Navigation from './components/Navigation';


export default function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/alldoctors' element={<Doctor/>}/>
        <Route path='/alldoctors/:speciality' element={<Doctor/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/my-appointments' element={<MyAppointments/>}/>
        <Route path='/MyProfile' element={<MyProfile/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
      </Routes>
    </div>

  )
}