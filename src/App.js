import React, { useState, memo } from 'react'
import AllValue from './Context/AllValue'
import Email from './Components/Email/Email'

export default function App() {
  const [EmailValue, setEmailValue] = useState()
  const [TextValue, setTextValue] = useState()
  const [SubjectValue, setSubjectValue] = useState()

  return (
    <AllValue.Provider value={{
      setEmailValue,
      setTextValue,
      setSubjectValue,
      EmailValue,
      SubjectValue,
      TextValue
    }}>
      <Email />
    </AllValue.Provider>
  )
}
