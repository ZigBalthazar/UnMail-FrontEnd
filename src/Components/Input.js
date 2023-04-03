import React from 'react'
import { useState, useEffect, useContext } from 'react'
import AllValue from '../Context/AllValue'
export default function Input({ placeholder, name, SubmitClick }) {
  const [Value, SetValue] = useState(null)
  const [regex, setRegex] = useState('')
  const [regexStatus,setregexStatus]= useState('')
  const ContextValue = useContext(AllValue)
  const InputRegex = RegExp(regex)
  

  const InputChangeHandler = (e) => {
    SetValue(e.target.value)

    if (e.target.className == 'Email') {
      ContextValue.setEmailValue(e.target.value)
    }

    if (e.target.className == 'Text') {
      ContextValue.setTextValue(e.target.value)
    }

    if (e.target.className == 'Subject') {
      ContextValue.setSubjectValue(e.target.value)
    }

  }


  useEffect(() => {

    switch (name) {
      case 'Email': {
        setRegex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/)
        break
      }


    }

    setregexStatus(InputRegex.test(Value))
  
console.log(regexStatus);
    if (regexStatus) {

      ContextValue.setInputsValidTrue(true)
    }
    else {
      ContextValue.setInputsValidTrue(false)
    }



  }, [Value])

useEffect(() => {

SetValue('')

 
}, [SubmitClick])

  return <input className={name} name={name} onChange={(e) => InputChangeHandler(e)} value={Value} type={name == 'Email' ? 'email' : 'text'} placeholder={placeholder} />





}
