import React from 'react'

function Summary({formData, pages, setPages}) {

// Extracting numbers and calculate the total at the end
  const planPrice = formData.planPrice.match(/[0-9]/)
  const onlinePrice = formData.addonOnlinePrice.match(/[0-9]/)
  const storagePrice = formData.addonStoragePrice.match(/[0-9]/)
  const customPrice = formData.addonCustomPrice.match(/[0-9]/)
  
//calculate the price
  const total = Number(planPrice) + Number(onlinePrice) + Number(storagePrice) + Number(customPrice)

  const date = formData.planPrice === "$9/mo" ? "/mo" : "/yr"
  console.log(Number(total))

  return (
    <div>
    
    <div className='summary-info'>
    <h1>Finishing up</h1>
    <h2>Double-check everything looks OK before confirming.</h2>
    

    <div className='summary-form'>
   
    <div className='plan-summary'>
    <div className='plan-summary-head'>
    <h3>{formData.plan}({formData.planPrice === "$9/mo" ? "Monthly" : "Yearly"})</h3>
    <span><a href='#'>Change</a></span>
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
    <p>Total (per month)</p>
    <span>{`+$${total}${date}`}</span>
    </div>
    
    </div>
    </div>
    
    </div>
  )
}

export default Summary