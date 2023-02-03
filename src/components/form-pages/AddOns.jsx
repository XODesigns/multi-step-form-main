import {useState} from 'react'
import Buttons from '../Buttons'
import data from '../../data'

function AddOns({formData, setFormData, range, setRange, selected, setSelected, setRangeBool, rangeBool}) {

const [isOnline, SetIsOnline] = useState(false)
const [isLarger, SetIsLarger] = useState(false)
const [isCustom, SetIsCustom] = useState(false)


  return (
    <div>
    
    <div className='add-ons-info'>
    <h1>Pick add-ons</h1>
    <h2>Add-ons help enhance your gaming experience.</h2>
    

    <form className='add-ons-form'>
    
    <div className={isOnline ? 'add-on-checkbox-checked' : 'add-on-checkbox'}>
    <div className='add-on-input'>

    <input
   type='checkbox'
   value="Online service"
   name={range === "0" ? data.map(data => data.onlneSrvceMnth) : data.map(data => data.onlneSrvceYr)}
   onChange={(evt) => {
    setFormData({
      ...formData,
     addonsOnline: evt.target.value,
     addonOnlinePrice: evt.target.name,
    })
    SetIsOnline(!isOnline)
  }}

    />

    <div className='addon-labels'>
    <h3>Online service</h3>
    <p>Access to multiplayer games</p>
    </div>

    </div>

    <span>{range === "0" ? data.map(data => data.onlneSrvceMnth) : data.map(data => data.onlneSrvceYr)}</span>

    </div>

    <div className={isLarger ? 'add-on-checkbox-checked' : 'add-on-checkbox'}>
    <div className='add-on-input'>

    <input
   type='checkbox'
   value="Larger storage"
   name={range === "0" ? data.map(data => data.lrgeStrgeMnth) : data.map(data => data.lrgeStrgeYr)}
   onChange={(evt) => {
    setFormData({
      ...formData,
     addonsStorage: evt.target.value,
     addonStoragePrice: evt.target.name,
    })
    SetIsLarger(!isLarger)
  }}
    />
    <div className='addon-labels'>
    <h3>Larger storage</h3>
    <p>Extra 1TB of cloud save</p>
    </div>
    </div>
    <span>{range === "0" ? data.map(data => data.lrgeStrgeMnth) : data.map(data => data.lrgeStrgeYr)}</span>
    </div>

    <b className={isCustom ? 'add-on-checkbox-checked' : 'add-on-checkbox'}>
    <div className='add-on-input'>

    <input
   type='checkbox'
   value="Customizable profile"
   name={range === "0" ? data.map(data => data.cstmPrfleMnth) : data.map(data => data.cstmPrfleYr)}
   onChange={(evt) => {
    setFormData({
      ...formData,
     addonsCustom: evt.target.value,
     addonCustomPrice: evt.target.name,
    })
    SetIsCustom(!isCustom)
  }}
    />
    <div className='addon-labels'>
    <h3>Customizable profile</h3>
    <p>Custom theme on your profile</p>
    </div>
    </div>
    <span>{range === "0" ? data.map(data => data.cstmPrfleMnth) : data.map(data => data.cstmPrfleYr)}</span>
    </b>
    
    </form>
    </div>
    
    </div>
  )
}

export default AddOns