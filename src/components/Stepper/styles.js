import styled from 'styled-components'

export const StepperContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  > span {
    font: ${({ theme }) => theme.TYPOGRAPHY.ROBOTO.SMALL_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > button {
    background: none;
    border: 0;
  }

  @media (min-width: 1024px) {
    > span {
      font: ${({ theme }) => theme.TYPOGRAPHY.ROBOTO.BOLD_100};
    }
  }
`
