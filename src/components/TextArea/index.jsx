import { forwardRef } from 'react'
import { TextAreaContainer } from './styles'

export const TextArea = forwardRef(function TextArea({ ...rest }, ref) {
  return <TextAreaContainer ref={ref} {...rest}></TextAreaContainer>
})
