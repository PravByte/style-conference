import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Styleconference from './Styleconference'
import Speaker from './Speaker'
import Subnav from './Subnav';
import Footer from './footer';
import Schedule from './Schedule';
import Register from './Register';
import Ven from './Ven';
const App = () => {
  return (
    <div>
        <BrowserRouter>
        
               <Routes> 
                   <Route index path='/' element={<><Nav/><Styleconference/></>}/>
                   <Route path='/home' element={<><Nav/><Styleconference/></>} />
                   <Route path='/speaker' element={<><Subnav/><Speaker/></>}/>
                   <Route path='/schedule' element={<><Subnav/><Schedule/></>} />
                   <Route path='/ven' element={<><Subnav/><Ven/></>} />
                   <Route path='/register' element={<><Subnav/><Register/></>} />
               </Routes>
               <Footer/>
           </BrowserRouter>
    </div>
  )
}

export default App