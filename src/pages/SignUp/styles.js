import styled from 'styled-components'

export const SignUpContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.5rem;

  margin-top: 9.75rem;
  padding: 0 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;

    padding: 0 2rem;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  justify-self: center;

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font: ${({ theme }) => theme.TYPOGRAPHY.ROBOTO.BOLD_700};
  }
`

export const Form = styled.form`
  max-width: 316px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  > h3 {
    display: none;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.MEDIUM_100};

    cursor: pointer;
    text-align: center;

    &:hover {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      transition: all 0.4s;
    }
  }

  @media (min-width: 768px) {
    > h3 {
      display: flex;
      align-self: center;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.MEDIUM_400};
    }

    max-width: 476px;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    padding: 4rem;
    border-radius: 1rem;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  width: 100%;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font: ${({ theme }) => theme.TYPOGRAPHY.ROBOTO.REGULAR_400};
  }
`
