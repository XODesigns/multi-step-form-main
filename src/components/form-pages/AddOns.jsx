import React from 'react'


function AddOns({formData, setFormData, range, setRange, selected, setSelected}) {



  return (
    <div>
    
    <div className='add-ons-info'>
    <h1>Pick add-ons</h1>
    <h2>Add-ons help enhance your gaming experience.</h2>
    

    <form className='add-ons-form'>
    
    <div className={selected ? 'add-on-checkbox-checked' : 'add-on-checkbox'}>
    <div className='add-on-input'>

    <input
   type='checkbox'
   value="Online service"
   name={range === "0" ? "+$1/mo" : "+$10/yr"}
   onChange={(evt) => {
    setFormData({
      ...formData,
     addonsOnline: evt.target.value,
     addonOnlinePrice: evt.target.name,
    })
    setSelected(!selected)
  }}

    />

    <div className='addon-labels'>
    <h3>Online service</h3>
    <p>Access to multiplayer games</p>
    </div>

    </div>

    <span>{range === "0" ? "+$1/mo" : "+$10/yr"}</span>

    </div>

    <div className={selected ? 'add-on-checkbox-checked' : 'add-on-checkbox'}>
    <div className='add-on-input'>

    <input
   type='checkbox'
   value="Larger storage"
   name={range === "0" ? `+$${Number(2)}/mo` : "+$20/yr"}
   onChange={(evt) => {
    setFormData({
      ...formData,
     addonsStorage: evt.target.value,
     addonStoragePrice: evt.target.name,
    })
    setSelected(!selected)
  }}
    />
    <div className='addon-labels'>
    <h3>Larger storage</h3>
    <p>Extra 1TB of cloud save</p>
    </div>
    </div>
    <span>{range === "0" ? `+$${Number(2)}/mo` : "+$20/yr"}</span>
    </div>

    <b className={selected ? 'add-on-checkbox-checked' : 'add-on-checkbox last-child'}>
    <div className='add-on-input'>

    <input
   type='checkbox'
   value="Customizable profile"
   name={range === "0" ? `+$ ${Number(2)}/mo` : "+$20/yr"}
   onChange={(evt) => {
    setFormData({
      ...formData,
     addonsCustom: evt.target.value,
     addonCustomPrice: evt.target.name,
    })
   setSelected(!selected)
  }}
    />
    <div className='addon-labels'>
    <h3>Customizable profile</h3>
    <p>Custom theme on your profile</p>
    </div>
    </div>
    <span>{range === "0" ? "+$2/mo" : "+$20/yr"}</span>
    </b>
    
    </form>
    </div>
    
    </div>
  )
}

export default AddOns