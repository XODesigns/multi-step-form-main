import React, { useState } from 'react'

import Arcade from '../images/icon-arcade.svg'
import Advanced from '../images/icon-advanced.svg'
import Pro from '../images/icon-pro.svg'
import data from '../../data'


function Plan({formData, setFormData, range, setRange, selected, setSelected, setRangeBool, rangeBool}) {


const [price, setPrice] = useState({
  arcade:'',
  advanced:'',
  pro:'',
})

const handleClick = (evt) =>{
  setSelected(!selected)
  console.log(evt.target.value)
  setFormData({
    ...formData,
    plan: evt.target.name,
    planPrice:evt.target.value,
  })
}





  return (
    <div className='select-plan'>
    
    <h1>Select your plan</h1>
    <h2>You have the option of monthly or yearly billing.</h2>
    
   
    <form className='plan-form'>
    <div className='plan-cards'>

    <button 
    type='button'
    className='plan-card'
    value={range === "0" ? price.arcade = data.map(data => data.prceArcdeMnth) : price.arcade = data.map(data => data.prceArcdeYr)}
    name="Arcade"
    onClick={handleClick}
    >
    <img src={Arcade} />
    <h3>Arcade</h3>
    <p>{range === "0" ? price.arcade = data.map(data => data.prceArcdeMnth) : price.arcade = data.map(data => data.prceArcdeYr)}
    </p>
    <span>{range === "1" && "2 months free"}</span>
    </button>

    <button 
    type='button'
    className='plan-card'
    value={range === "0" ? price.arcade = data.map(data => data.prceAdvncdMnth) : price.arcade = data.map(data => data.prceAdvncdYr)}
    name="Advanced"
    onClick={handleClick}
    >
    <img src={Advanced} />
    <h3>Advanced</h3>
    <p>{range === "0" ? price.arcade = data.map(data => data.prceAdvncdMnth) : price.arcade = data.map(data => data.prceAdvncdYr)}
    </p>
    <span>{range === "1" && "2 months free"}</span>
    </button>


    <button 
    type='button'
    className='plan-card'
    value={range === "0" ? price.arcade = data.map(data => data.prceProMnth) : price.arcade = data.map(data => data.prceProYr)}
    name="Pro"
    onClick={handleClick}
    >
    <img src={Pro} />
    <h3>Pro</h3>
    <p>{range === "0" ? price.arcade = data.map(data => data.prceProMnth) : price.arcade = data.map(data => data.prceProYr)}
    </p>
    <span>{range === "1" && "2 months free"}</span>
    </button>


    </div>

    <div className='slider'>
    
    <p style={range ==="1" ? {color: 'hsl(231, 11%, 63%)'} : {color: 'hsl(213, 96%, 18%)'}}>Monthly</p>
    <div className="switch">
    <input
    
      type="range"
      min="0"
      max="1"
    onChange={(evt)=>{
      if(!range){
        setFormData({
          ...formData,
          planDate: "Monthly",
        })
      } else if(range){
        setFormData({
          ...formData,
          planDate: "Yearly",
        })
      }
      setRange(evt.target.value)
      if(!range){
        setRangeBool(!rangeBool)
      } else {
        setRangeBool(rangeBool)
      }
    }}
      value={range}

    />  
  </div>
  <p style={range ==="0" ? {color: 'hsl(231, 11%, 63%)'} : {color: 'hsl(213, 96%, 18%)'}}>Yearly</p>
    
    </div>
    


    </form>


    </div>
  )
}

export default Plan