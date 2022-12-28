import React from 'react'


function AddOns() {
  return (
    <div>
    
    <div className='add-ons-info'>
    <h1>Pick add-ons</h1>
    <h2>Add-ons help enhance your gaming experience.</h2>
    

    <form className='add-ons-form'>
    
    <div className='add-on-checkbox'>
    <div className='add-on-input'>
    <input
   type='checkbox'
    />
    <div className='addon-labels'>
    <h3>Online service</h3>
    <p>Access to multiplayer games</p>
    </div>
    </div>
    <span>+$1/mo</span>
    </div>

    <div className='add-on-checkbox'>
    <div className='add-on-input'>
    <input
   type='checkbox'
    />
    <div className='addon-labels'>
    <h3>Larger storage</h3>
    <p>Extra 1TB of cloud save</p>
    </div>
    </div>
    <span>+$2/mo</span>
    </div>

    <div className='add-on-checkbox last-child'>
    <div className='add-on-input'>
    <input
   type='checkbox'
    />
    <div className='addon-labels'>
    <h3>Customizable Profile</h3>
    <p>Custom theme on your profile</p>
    </div>
    </div>
    <span>+$2/mo</span>
    </div>
    
    </form>
    </div>
    
    </div>
  )
}

export default AddOns