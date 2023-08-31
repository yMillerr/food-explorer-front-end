import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;
  height: 48px;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  border: none;
  border-radius: 8px;

  padding: 1rem 0.875rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;

  > input {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    background-color: transparent;

    outline: none;
    border: none;

    width: 100%;
    height: 48px;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  &:has(input:focus) {
    outline: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }
`
