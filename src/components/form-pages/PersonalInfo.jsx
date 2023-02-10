import React from 'react'
import Buttons from '../Buttons'


function PersonalInfo({onSubmit, handleSubmit, errors, touched, handleBlur, values, handleChange}) {



  return (
    <div className='personal-info'>
    <h1>Personal info</h1>
    <h2>Please provide your name, email address, and phone number.</h2>
    

    <form className='personal-form' onSubmit={handleSubmit}>
    <label>Name <span>{errors.name && touched.name ? errors.name : null}</span></label>
    <input
    placeholder='e.g Stephen King'
   onChange={handleChange}
   value={values.name}
   name="name"
    />

    <label>Email <span>{errors.email && touched.email ? errors.email : null}</span></label>
    <input
    placeholder='e.g stephenking@lorem.com'
    onChange={handleChange}
    value={values.email}
    name="email"
    />

    <label>Phone Number <span>{errors.phone && touched.phone ? errors.phone : null}</span></label>
    <input
    type='tel'
    placeholder='e.g +1 234 567 890'
    onChange={handleChange}
    value={values.phone}
    name="phone"
    />

    <Buttons 
    btnClass={'next-step-two'} 
    name={'Next Step'} 
    // click={handleSubmit} 
    />

    </form>
    </div>
  )
}

export default PersonalInfo