import React from 'react'
import AddOns from './form-pages/AddOns'
import PersonalInfo from './form-pages/PersonalInfo'
import Plan from './form-pages/Plan'
import Sidebar from './Sidebar'

function Form() {
  return (
  <>
  <Sidebar />

  <div className='form-info'>
      <AddOns />
    
  </div>
  
  </>
  )
}

export default Form