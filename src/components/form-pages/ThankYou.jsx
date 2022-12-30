import React from 'react'
import Thanks from '../images/icon-thank-you.svg'

function ThankYou() {
  return (
    <div className='thanks'>
    <img src={Thanks} />
    
    <h1>Thank you!</h1>

   <p>Thanks for confirming your subscription! We hope you have fun 
    using our platform. If you ever need support, please feel free 
    to email us at support@loremgaming.com.</p> 
    
    </div>
  )
}

export default ThankYou