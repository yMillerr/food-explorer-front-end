import { ButtonContainer } from './styles'

export function Button({ title, icon: Icon, type = 'button', ...rest }) {
  return (
    <ButtonContainer type={type} {...rest}>
      {Icon && <Icon size={22} color="#fff" />}

      <span>{title}</span>
    </ButtonContainer>
  )
}
