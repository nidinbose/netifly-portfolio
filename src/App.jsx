import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Mainpage from './Components/Mainpage'
import Buttons from './Components/Buttons'
import Services from './Components/Services'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Contacts from './Components/Contacts'

const App = () => {
  return (
   <BrowserRouter>
   {/* <Navbar/> */}
   <Routes>

<Route path='/' Component={Mainpage}/>
<Route path='/buttons' Component={Buttons}/>
<Route path='/services' Component={Services}/>
<Route path='/projects' Component={Projects}/>
<Route path='/contacts' Component={Contacts}/>


   </Routes>
   </BrowserRouter>
  )
}

export default App