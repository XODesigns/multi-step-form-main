import {useState} from 'react'
import Buttons from './Buttons'
import AddOns from './form-pages/AddOns'
import PersonalInfo from './form-pages/PersonalInfo'
import Plan from './form-pages/Plan'
import Summary from './form-pages/Summary'
import ThankYou from './form-pages/ThankYou'
import Sidebar from './Sidebar'
import { Formik } from 'formik';


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

  const [error, setError] = useState("")
  const [range, setRange] = useState("0")
  const [selected, setSelected] = useState(false)
  

  const conditionalComponent = () => {
    switch (pages) {
      case 0:
        return <PersonalInfo formData={formData} setFormData={setFormData} error={error} setError={setError} handleSubmit={handleSubmit} />

        case 1:
        return <Plan formData={formData} setFormData={setFormData} range={range} setRange={setRange} selected={selected} setSelected={setSelected} setError={setError}  />

        case 2:
        return <AddOns formData={formData} setFormData={setFormData} range={range} setRange={setRange} selected={selected} setSelected={setSelected} setError={setError}  />

        case 3:
        return <Summary formData={formData} setFormData={setFormData} pages={pages} setPages={pages} setError={setError} />

        case 4:
        return <ThankYou />
    
      default:
        return <PersonalInfo formData={formData} setFormData={setFormData} error={error} setError={setError}  />
    }
  }

  const handleSubmit = () => {
    
    // if(pages === 0){
    //   if (formData.name === '' || formData.name.length <= 1){
    //    setError(error)
    //   } else if (formData.email === '' || !formData.email.includes('@')){
    //     setError(error)
    //   } else if (formData.phone === '' || formData.name.length <= 1){
    //     setError(error)
    //   } else {
    //     setPages(pages + 1)
    //   }
    // } else if (pages === 1){
    //   if(formData.plan === ''){
    //    setError(error)
    //   } else {
    //     setPages(pages + 1)
    //   }
    // } else if (pages === 2){
    //   if(formData.addonsOnline === '' || formData.addonsStorage === '' || formData.addonsCustom === ''){
    //     setError(error)
    //   }else {
    //     setPages(pages + 1)
    //   }
    // } else 
    setPages(pages + 1)
  }

  const handleSubmitToo = () => {
    setPages(pages - 1)
  }


  return (
  <>
  <Sidebar pages={pages} setPages={pages} />

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
        btnClass={ pages >= 0 && pages <= 2 ? 'next-step' : 'confirm'} 
        name={ pages >= 0 && pages <= 2 ? 'Next Step' : 'Confirm' } 
        click={handleSubmit} 
        />}
      

      </div>
    

  </div>
  
  </>
  )
}

export default Form