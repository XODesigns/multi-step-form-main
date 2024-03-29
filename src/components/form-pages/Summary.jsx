import React from 'react'
import data from '../../data'

function Summary({formData, pages, setPages, range, setRange, setRangeBool, rangeBool}) {

  

// Extracting numbers and calculate the total at the end
  const planPrice = formData.planPrice.toString().match(/\d+/)
  const onlinePrice = formData.addonOnlinePrice.match(/\d+/)
  const storagePrice = formData.addonStoragePrice.match(/\d+/)
  const customPrice = formData.addonCustomPrice.match(/\d+/)
  
//calculate the price
  const total = Number(planPrice) + Number(onlinePrice) + Number(storagePrice) + Number(customPrice)

  // const date = formData.planPrice === "$9/mo" || "$12/mo" || "$15/mo" ? "/mo" : "/yr" 
  console.log((`${range} yes`))

  const setRanges = () =>{

    if(range === "0"){
      setRange("1")
    } else {
      setRange("0")
    }
    
  }

  return (
    <div>
    
    <div className='summary-info'>
    <h1>Finishing up</h1>
    <h2>Double-check everything looks OK before confirming.</h2>
    

    <div className='summary-form'>
   
    <div className='plan-summary'>
    <div className='plan-summary-head'>
    <h3>{formData.plan}({range === '0' ? "Monthly" : "Yearly"})</h3>
    
    </div>
    <p>{formData.planPrice}</p>
    </div>


    <div className='addons-summary'>

    <div className='addon-options'>
    <p>{formData.addonsOnline}</p>
    <span>{formData.addonOnlinePrice}</span>
    </div>

    <div className='addon-options'>
    <p>{formData.addonsStorage}</p>
    <span>{formData.addonStoragePrice}</span>
    </div>

    <div className='addon-options'>
    <p>{formData.addonsCustom}</p>
    <span>{formData.addonCustomPrice}</span>
    </div>

    </div>

    <div className='total'>
    <p>Total (per {range === '0' ? "month" : "year"})</p>
    <span className='purple-txt'>{`+$${total} ${range === '0' ? "/mo" : "/yr"}`}</span>
    </div>
    
    </div>
    </div>
    
    </div>
  )
}

export default Summary