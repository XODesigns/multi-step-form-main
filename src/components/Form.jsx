import React from 'react'
import AddOns from './form-pages/AddOns'
import PersonalInfo from './form-pages/PersonalInfo'
import Plan from './form-pages/Plan'
import Summary from './form-pages/Summary'
import Sidebar from './Sidebar'
import Buttons from './Buttons'

function Form() {
  return (
  <>
  <Sidebar />

  <div className='form-info'>

    <Summary />
    <Buttons btnClass={'next-step'} name={'Next Step'}/>
  </div>
  
  </>
  )
}

export default Form