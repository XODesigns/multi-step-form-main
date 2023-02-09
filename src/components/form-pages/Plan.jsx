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

const [name, setName] = useState({
  arcade:'',
  advanced:'',
  pro:'',
})

const [isArcade, setIsArcade] = useState("false")
const [isAdvanced, setIsAdvcanced] = useState("false")
const [isPro, setIsPro] = useState("false")




const handleClick = (evt) =>{
  // setSelected(!selected)
  console.log(evt.target.value)
  // setFormData({
  //   ...formData,
  //   plan: evt.target.name,
  //   planPrice:evt.target.value,
  // })
}


  return (
    <div className='select-plan'>
    
    <h1>Select your plan</h1>
    <h2>You have the option of monthly or yearly billing.</h2>
    
   
    <form className='plan-form'>
    <div className='plan-cards'>

    <div
    // type='button'
    className={isArcade === "false" ? 'plan-card' : 'plan-card-focus'}
    value={range === "0" ? price.arcade = data.map(data => data.prceArcdeMnth) : price.arcade = data.map(data => data.prceArcdeYr)}
    name={name.arcade = "Arcade"}
    onClick={(evt)=>{
      setIsArcade("true")
      setIsAdvcanced("false")
      setIsPro("false")

      setFormData({
        ...formData,
        plan: name.arcade,
        planPrice:price.arcade,
      })

      console.log(evt.target.value)
    }}
    
    >
    <img src={Arcade} />
    <h3>Arcade</h3>
    <p>{range === "0" ? price.arcade = data.map(data => data.prceArcdeMnth) : price.arcade = data.map(data => data.prceArcdeYr)}
    </p>
    <span>{range === "1" && "2 months free"}</span>
    </div>

    <div 
    // type='button'
    className={isAdvanced === "false"  ? 'plan-card' : 'plan-card-focus'}
    value={range === "0" ? price.advanced = data.map(data => data.prceAdvncdMnth) : price.arcade = data.map(data => data.prceAdvncdYr)}
    name={name.advanced = "Advanced"}
    onClick={(evt)=>{
      setIsAdvcanced("true")
      setIsArcade("false")
      setIsPro("false")

      setFormData({
        ...formData,
        plan: name.advanced,
        planPrice:price.advanced,
      })

      console.log(price.arcade)
    }}
   
    >
    <img src={Advanced} />
    <h3>Advanced</h3>
    <p>{range === "0" ? price.advanced = data.map(data => data.prceAdvncdMnth) : price.arcade = data.map(data => data.prceAdvncdYr)}
    </p>
    <span>{range === "1" && "2 months free"}</span>
    </div>


    <div 
    // type='button'
    className={isPro === "false"  ? 'plan-card' : 'plan-card-focus'}
    value={range === "0" ? price.pro = data.map(data => data.prceProMnth) : price.arcade = data.map(data => data.prceProYr)}
    name={name.pro = "Pro"}
    onClick={(evt)=>{
      setIsPro("true")
      setIsArcade("false")
      setIsAdvcanced("false")

      console.log(evt.target.value)
      setFormData({
        ...formData,
        plan: name.pro,
        planPrice:price.pro,
      })

      
    }}
    onChange={handleClick}
  
    >
    <img src={Pro} />
    <h3>Pro</h3>
    <p>{range === "0" ? price.pro = data.map(data => data.prceProMnth) : price.arcade = data.map(data => data.prceProYr)}
    </p>
    <span>{range === "1" && "2 months free"}</span>
    </div>


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