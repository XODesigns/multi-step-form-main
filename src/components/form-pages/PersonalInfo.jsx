import React from 'react'
import Buttons from '../Buttons'

function PersonalInfo() {
  return (
    <div className='personal-info'>
    <h1>Personal info</h1>
    <h2>Please provide your name, email address, and phone number.</h2>
    

    <form className='personal-form'>
    <label>Name</label>
    <input
    placeholder='e.g Stephen King'
    />

    <label>Email</label>
    <input
    placeholder='e.g stephenking@lorem.com'
    />

    <label>Phone Number</label>
    <input
    placeholder='e.g +1 234 567 890'
    />

    <Buttons />
    </form>
    </div>
  )
}

export default PersonalInfo