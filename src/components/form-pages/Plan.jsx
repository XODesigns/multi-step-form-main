import React, { useState } from 'react'

import Arcade from '../images/icon-arcade.svg'
import Advanced from '../images/icon-advanced.svg'
import Pro from '../images/icon-pro.svg'


function Plan() {
const [value, setValue] = useState(0)

  return (
    <div className='select-plan'>
    
    <h1>Select your plan</h1>
    <h2>You have the option of monthly or yearly billing.</h2>
    

    <form className='plan-form'>
    <div className='plan-cards'>

    <div className='plan-card'>

    <img src={Arcade} />
    <h3>Arcade</h3>

    <p>$9/mo</p>
    </div>

    <div className='plan-card'>
    <img src={Advanced} />
    <h3>Advanced</h3>
    <p>$12/mo</p>
    </div>


    <div className='plan-card'>
    <img src={Pro} />
    <h3>Pro</h3>
    <p>$15/mo</p>
    </div>


    </div>

    <div className='slider'>
    
    <p>Monthly</p>
    <div className="switch">
    <input
      type="range"
      min="0"
      max="1"
    onChange={(e)=> setValue(e.target.value)}
      value={value}
    />  
  </div>
  <p>Yearly</p>
    
    </div>
    


    </form>


    </div>
  )
}

export default Plan