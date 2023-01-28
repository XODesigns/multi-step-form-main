import React from 'react'

function Summary({formData, pages, setPages, range, setRange}) {

  

// Extracting numbers and calculate the total at the end
  const planPrice = formData.planPrice.match(/\d+/)
  const onlinePrice = formData.addonOnlinePrice.match(/\d+/)
  const storagePrice = formData.addonStoragePrice.match(/\d+/)
  const customPrice = formData.addonCustomPrice.match(/\d+/)
  
//calculate the price
  const total = Number(planPrice) + Number(onlinePrice) + Number(storagePrice) + Number(customPrice)

  const date = formData.planPrice === "$9/mo" || "$12/mo" || "$15/mo" ? "/mo" : "/yr" 
  console.log((`${storagePrice} yes`))

  return (
    <div>
    
    <div className='summary-info'>
    <h1>Finishing up</h1>
    <h2>Double-check everything looks OK before confirming.</h2>
    

    <div className='summary-form'>
   
    <div className='plan-summary'>
    <div className='plan-summary-head'>
    <h3>{formData.plan}({range === '0' ? "Monthly" : "Yearly"})</h3>
    <span className="change-link" onClick={setRange(!range)}>Change</span>
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
    <span>{`+$${total}${date}`}</span>
    </div>
    
    </div>
    </div>
    
    </div>
  )
}

export default Summary