import {useState} from 'react'
import Buttons from './Buttons'
import AddOns from './form-pages/AddOns'
import PersonalInfo from './form-pages/PersonalInfo'
import Plan from './form-pages/Plan'
import Summary from './form-pages/Summary'
import ThankYou from './form-pages/ThankYou'
import Sidebar from './Sidebar'

function Form() {

  const [pages, setPages] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    planPrice:'',
    planDate:'',
    addonsOnline:'',
    addonOnlinePrice:'',
    addonsStorage:'',
    addonStoragePrice:'',
    addonsCustom:'',
    addonCustomPrice:'',
  })
  const [range, setRange] = useState("0")
  const [selected, setSelected] = useState(false)
  

  const conditionalComponent = () => {
    switch (pages) {
      case 0:
        return <PersonalInfo formData={formData} setFormData={setFormData} />

        case 1:
        return <Plan formData={formData} setFormData={setFormData} range={range} setRange={setRange} selected={selected} setSelected={setSelected} />

        case 2:
        return <AddOns formData={formData} setFormData={setFormData} range={range} setRange={setRange} selected={selected} setSelected={setSelected} />

        case 3:
        return <Summary formData={formData} setFormData={setFormData} pages={pages} setPages={pages} />

        case 4:
        return <ThankYou />
    
      default:
        return <PersonalInfo formData={formData} setFormData={setFormData} />
    }
  }

  const handleSubmit = () => {
    setPages(pages + 1)
  }

  const handleSubmitToo = () => {
    setPages(pages - 1)
  }


  return (
  <>
  <Sidebar />

  <div className='form-info'>
      {conditionalComponent()}


      <div className='links'>

      {
        pages > 0 && pages < 4 && <Buttons 
      btnClass={'prev-step'} 
      name={ 'Go Back'} 
      click={handleSubmitToo} 
      /> 
      }
      
      {pages === 4 ? null : <Buttons 
        btnClass={'next-step'} 
        name={ pages >= 0 && pages <= 2 ? 'Next Step' : 'Confirm' } 
        click={handleSubmit} 
        />}
      

      </div>
    

  </div>
  
  </>
  )
}

export default Form