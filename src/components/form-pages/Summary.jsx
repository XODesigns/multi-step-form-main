import React from 'react'

function Summary({formData}) {
  return (
    <div>
    
    <div className='summary-info'>
    <h1>Finishing up</h1>
    <h2>Double-check everything looks OK before confirming.</h2>
    

    <div className='summary-form'>
    
    {formData.name}
    {formData.email}
   {formData.phone}
    
    </div>
    </div>
    
    </div>
  )
}

export default Summary