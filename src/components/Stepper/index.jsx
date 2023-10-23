import { StepperContainer } from './styles'

import { IconMinus } from '../../assets/icons/icon-minus.svg.jsx'
import { IconPlus } from '../../assets/icons/icon-plus.svg.jsx'

import { useState } from 'react'

export function Stepper() {
  const [amountProduct, setAmountProduct] = useState(0)

  function handleAddAmoutProduct() {
    return setAmountProduct((prevState) => prevState + 1)
  }

  function handleRemoveAmoutProduct() {
    return setAmountProduct((prevState) => {
      if (prevState <= 0) {
        return 0
      }

      return prevState - 1
    })
  }
  return (
    <StepperContainer>
      <button onClick={handleRemoveAmoutProduct}>
        <IconMinus />
      </button>

      <span>{amountProduct}</span>

      <button onClick={handleAddAmoutProduct}>
        <IconPlus />
      </button>
    </StepperContainer>
  )
}
