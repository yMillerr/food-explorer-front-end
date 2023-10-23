import { InputContainer } from './styles'
import { forwardRef } from 'react'

export const Input = forwardRef(function Input(
  { icon: Icon, errors = {}, name, type = 'text', ...rest },
  ref,
) {
  const inputNameWithErrors = Object.entries(errors).map((error) => error[0])

  return (
    <InputContainer errors={inputNameWithErrors}>
      <div>
        {Icon && <Icon size={24} />}

        <input {...rest} ref={ref} name={name} type={type} />
      </div>

      {errors[name] && <span>{errors[name]?.message}</span>}
    </InputContainer>
  )
})
