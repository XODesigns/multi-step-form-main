import React from 'react'

function Sidebar() {
  return (
    <div className='form-sidebar'>
    
        <div className='your-info'>
            <span>1</span>
            <div className='step-text'>
            <h4>Step 1</h4>
            <h3>Your info</h3>
            </div>
        </div>

        <div className='plan'>
            <span>2</span>
            <div className='step-text'>
            <h4>Step 2</h4>
            <h3>Select Plan</h3>
            </div>
        </div>

        <div className='add-ons'>
            <span>3</span>
            <div className='step-text'>
            <h4>Step 3</h4>
            <h3>add-ons</h3>
            </div>
        </div>

        <div className='summary'>
            <span>4</span>
            <div className='step-text'>
            <h4>Step 4</h4>
            <h3>summary</h3>
            </div>
        </div>

    </div>
  )
}

export default Sidebar