/* eslint-disable react/prop-types */
import { ButtonContainer } from './styles'

export function Button({ title, icon: Icon, ...rest }) {
  return (
    <ButtonContainer type="button" {...rest}>
      {Icon && <Icon size={22} color="#fff" />}

      <span>{title}</span>
    </ButtonContainer>
  )
}
