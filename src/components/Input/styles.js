import styled, { css } from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  width: 100%;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.875rem;

    padding: 1rem 0.875rem;

    width: 100%;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    border: none;
    border-radius: 8px;

    &:has(input:focus) {
      outline: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    }

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

    ${({ errors, theme }) =>
      errors.length > 0
        ? errors.map((error) => {
            return css`
              &:has(input[name=${error}]) {
                outline: 1px solid ${theme.COLORS.TOMATO_400};
              }
            `
          })
        : null}
  }

  > span {
    font: ${({ theme }) => theme.TYPOGRAPHY.ROBOTO.REGULAR_200};
    color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  @media (min-width: 768px) {
    > div {
      outline: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
