import React from 'react'
import { Element } from 'react-ui/primitives'

export const Input = props => {
  return <Element as="input" component="Input" {...props} />
}

export const Form = props => {
  return <Element as="form" component="Form" {...props} />
}
