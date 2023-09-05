import { InputContainer } from './styles'

export function Input({ icon: Icon, ...rest }) {
  return (
    <InputContainer>
      {Icon && <Icon size={24} />}

      <input {...rest} />
    </InputContainer>
  )
}
