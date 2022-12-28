import React from 'react'

function Summary() {
  return (
    <div>
    
    <div className='summary-info'>
    <h1>Finishing up</h1>
    <h2>Double-check everything looks OK before confirming.</h2>
    

    <form className='summary-form'>
    
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

    <div className='links'>

   
</div>
    
    </form>
    </div>
    
    </div>
  )
}

export default Summary