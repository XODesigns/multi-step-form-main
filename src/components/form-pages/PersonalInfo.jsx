import React from 'react'


function PersonalInfo({formData, setFormData, error, setError}) {


  // const handleChange = (evt) =>{
  //   setFormData({
  //     ...formData,
  //     name:evt.target.value,
  //     email:evt.target.value,
  //     phone:evt.target.value,
  //   })
  // }

  return (
    <div className='personal-info'>
    <h1>Personal info</h1>
    <h2>Please provide your name, email address, and phone number.</h2>
    

    <form className='personal-form'>
    <label>Name <span></span></label>
    <input
    placeholder='e.g Stephen King'
    onChange={(evt) => {
      setFormData({
        ...formData,
        name: evt.target.value,
      })
    }}
    value={formData.name}
    required
    />

    <label>Email <span></span></label>
    <input
    placeholder='e.g stephenking@lorem.com'
    onChange={(evt) => {
      setFormData({
        ...formData,
        email: evt.target.value,
      })
    }}
    value={formData.email}
    />

    <label>Phone Number <span></span></label>
    <input
    type='tel'
    placeholder='e.g +1 234 567 890'
    onChange={(evt) => {
      setFormData({
        ...formData,
        phone: evt.target.value,
      })
      handlePersonalInfoErrors
    }}
    value={formData.phone}
    />

    </form>
    </div>
  )
}

export default PersonalInfo