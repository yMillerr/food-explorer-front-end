import styled, { css } from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  animation: opacity 1s 0.9s backwards;

  > button:nth-child(8) {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  ${({ theme, errors }) =>
    errors.map((error) => {
      return css`
        [name=${error}], [data-error='true'] {
          outline: 1px solid ${theme.COLORS.TOMATO_400};
        }
      `
    })}

  @media (min-width: 768px) {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    > button:nth-child(8) {
      grid-column: 2;
      grid-row: 4;
      max-width: 135px;

      justify-self: flex-end;
    }

    > button:nth-child(7) {
      grid-column: 3;
      grid-row: 4;
    }

    > div:nth-child(6) {
      grid-column: 1 / -1;
    }

    > div:nth-child(5) {
      grid-column: 3;
    }

    > div:nth-child(4) {
      grid-row: 2;
      grid-column: 1 / 3;
    }

    > div:nth-child(2) {
      grid-column: 2 / 3;
    }
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font: ${({ theme }) => theme.TYPOGRAPHY.ROBOTO.REGULAR_400};
  }

  > input {
    width: 100%;

    padding: 1rem 0.875rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    border: none;
    border-radius: 8px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
