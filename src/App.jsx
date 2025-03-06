import React from 'react'
import { Routes , Route } from 'react-router-dom';
import Body from './Components/Body.jsx';
import Contactform from './Components/Contactform.jsx';
const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/contactform' element={<Contactform />} />

      </Routes>
    </div>
    
  )
}

export default App