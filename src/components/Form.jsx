import {useState} from 'react'
import Buttons from './Buttons'
import AddOns from './form-pages/AddOns'
import PersonalInfo from './form-pages/PersonalInfo'
import Plan from './form-pages/Plan'
import Summary from './form-pages/Summary'
import ThankYou from './form-pages/ThankYou'
import Sidebar from './Sidebar'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import 'yup-phone'



const FormSchema = Yup.object().shape({
  name: Yup.string()
  .matches(/^[A-Za-z]*$/, 'Name should contain only letters')
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
  email: Yup.string()
  .email('Invalid email')
  .required('Required'),
  phone: Yup.string()
  .matches(/^\+[0-9 ]*$/, 'Match example +1111111111')
  .required('Required')
  .min(2, 'Too Short!')
  .max(16, 'To Long')
})


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
  const [rangeBool, setRangeBool] = useState(false)


  const {
    values,
    handleSubmit,
    touched,
    errors,
    handleChange,
    isSubmitting,
    handleBlur,
  } = useFormik({
    initialValues: {
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
    },

    validationSchema: FormSchema,

    onSubmit(){
      setPages(pages + 1)
      console.log()
    }
  })
  

  const conditionalComponent = () => {
    switch (pages) {
      case 0:
        return <PersonalInfo handleSubmit={handleSubmit} errors={errors} touched={touched} handleBlur={handleBlur} values={values} handleChange={handleChange} />

        case 1:
        return <Plan formData={formData} setFormData={setFormData} range={range} setRange={setRange} selected={selected} setSelected={setSelected} rangeBool={rangeBool} setRangeBool={setRangeBool} />

        case 2:
        return <AddOns formData={formData} setFormData={setFormData} range={range} setRange={setRange} selected={selected} setSelected={setSelected} rangeBool={rangeBool} setRangeBool={setRangeBool} />

        case 3:
        return <Summary formData={formData} setFormData={setFormData} pages={pages} setPages={pages} range={range} setRange={setRange} rangeBool={rangeBool} setRangeBool={setRangeBool} />

        case 4:
        return <ThankYou />
    
      default:
        return <PersonalInfo />
    }
  }

  const handleBtnSubmit = () => {
    
    if (pages === 1){
      if(formData.plan === ''){
        return alert('Please select your plan')
      } else {
        setPages(pages + 1)
      }
    } else if (pages === 2){
      if(formData.addonsOnline === '' && formData.addonsStorage === '' && formData.addonCustomPrice === ''){
        return alert('Please pick add-ons')
      }else {
        setPages(pages + 1)
      }
    } else 
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


      <div className={pages === 2 || pages === 3 ? 'links-two' : 'links'}>

      {
        pages > 0 && pages < 4 && <Buttons 
      btnClass={'prev-step'} 
      name={ 'Go Back'} 
      click={handleSubmitToo} 
      /> 
      }
      
    {pages >= 1 && pages < 4 ? <Buttons 
        btnClass={ pages >= 1  && pages < 3 ? 'next-step' : 'confirm'} 
        name={ pages >= 1  && pages < 3 ? 'Next Step' : 'Confirm' } 
        click={handleBtnSubmit} 
        /> : null}
      

      </div>
    

  </div>
  
  </>
  )
}

export default Form