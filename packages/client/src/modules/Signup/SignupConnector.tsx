import * as React from 'react'
import { SignupView } from './ui/SignupView'

//container -> view
//container -> connector -> view 
// controller -> connector -> view

export const SignupConnector = () => {
  return (
    <SignupView />
  )
}