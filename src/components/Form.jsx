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
  .matches(/^\+[0-9]*$/)
  .required('Required')
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
      case 1:
        return <PersonalInfo handleSubmit={handleSubmit} errors={errors} touched={touched} handleBlur={handleBlur} values={values} handleChange={handleChange} />

        case 0:
        return <Plan PersonalInfo handleSubmit={handleSubmit} errors={errors} touched={touched} handleBlur={handleBlur} values={values} handleChange={handleChange} />

        case 2:
        return <AddOns formData={formData} setFormData={setFormData} range={range} setRange={setRange} selected={selected} setSelected={setSelected} />

        case 3:
        return <Summary formData={formData} setFormData={setFormData} pages={pages} setPages={pages} />

        case 4:
        return <ThankYou />
    
      default:
        return <Plan />
    }
  }

  const handleBtnSubmit = () => {
    
    if(pages === 0){
      if (formData.name === '' || formData.name.length <= 1){
       return alert('Please enter your name')
      } else if (formData.email === '' || !formData.email.includes('@')){
        return alert('Please enter a valid email')
      } else if (formData.phone === '' || formData.name.length <= 1){
        return alert('This field is required')
      } else {
        setPages(pages + 1)
      }
    } else if (pages === 1){
      if(formData.plan === ''){
        return alert('Please select your plan')
      } else {
        setPages(pages + 1)
      }
    } else if (pages === 2){
      if(!formData.addonsOnline && !formData.addonOnlinePrice || !formData.addonsStorage && !formData.addonStoragePrice || !formData.addonsCustom && !formData.addonCustomPrice){
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


      <div className='links'>

      {
        pages > 0 && pages < 4 && <Buttons 
      btnClass={'prev-step'} 
      name={ 'Go Back'} 
      click={handleSubmitToo} 
      /> 
      }
      
    {pages === 3 ? <Buttons 
        btnClass={'confirm'} 
        name={'Confirm' } 
        click={handleSubmit} 
        /> : null}
      

      </div>
    

  </div>
  
  </>
  )
}

export default Form