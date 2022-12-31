import React from 'react'

function Sidebar({pages}) {


  return (
    <div className='form-sidebar'>
    
        <div className='your-info'>
            <span className={pages === 0 ? 'form-sidebar-active': null}>1</span>
            <div className='step-text'>
            <h4>Step 1</h4>
            <h3>Your info</h3>
            </div>
        </div>

        <div className='plan'>
            <span className={pages === 1 ? 'form-sidebar-active' : null}>2</span>
            <div className='step-text'>
            <h4>Step 2</h4>
            <h3>Select Plan</h3>
            </div>
        </div>

        <div className='add-ons'>
            <span className={pages === 2 ? 'form-sidebar-active' : null}>3</span>
            <div className='step-text'>
            <h4>Step 3</h4>
            <h3>add-ons</h3>
            </div>
        </div>

        <div className='summary'>
            <span className={pages >= 3 ? 'form-sidebar-active' : null}>4</span>
            <div className='step-text'>
            <h4>Step 4</h4>
            <h3>summary</h3>
            </div>
        </div>

    </div>
  )
}

export default Sidebar