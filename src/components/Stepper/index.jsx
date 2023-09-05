import { StepperContainer } from './styles'

import { IconMinus } from '../../assets/icons/icon-minus.svg.jsx'
import { IconPlus } from '../../assets/icons/icon-plus.svg.jsx'

export function Stepper() {
  return (
    <StepperContainer>
      <button>
        <IconMinus />
      </button>

      <span>0</span>

      <button>
        <IconPlus />
      </button>
    </StepperContainer>
  )
}
