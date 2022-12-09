import React from 'react'
import PersonalInfo from './form-pages/PersonalInfo'
import Sidebar from './Sidebar'

function Form() {
  return (
  <>
  <Sidebar />

  <div className='form-info'>
      <PersonalInfo />
  </div>
  
  </>
  )
}

export default Form