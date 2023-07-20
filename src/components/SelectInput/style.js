import { styled } from 'styled-components'

export const SelectInputContainer = styled.select`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  border: none;
  border-radius: 5px;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  padding: 1.6rem;

  font-size: 1.4rem;
  font-family: 'Roboto', sans-serif;
`
