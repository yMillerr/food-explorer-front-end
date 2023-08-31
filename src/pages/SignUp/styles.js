import styled from 'styled-components'

export const SignUpContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7.3rem;

  margin-top: 15.3rem;
  padding: 0 3.2rem;

  @media (min-width: 760px) {
    flex-direction: row;
    gap: 20rem;
  }

  @media (min-width: 1024px) {
    gap: 30rem;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;

  justify-self: center;

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.7rem;
    line-height: 4.4rem;
    font-family: 'Roboto', sans-serif;
  }
`

export const InputContainer = styled.div`
  max-width: 31.6rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  > h3 {
    display: none;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;
    text-align: center;

    &:hover {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      transition: all 0.4s;
    }
  }

  @media (min-width: 760px) {
    > h3 {
      display: flex;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 3.2rem;
    }

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    padding: 6.4rem;

    border-radius: 1.6rem;

    box-sizing: content-box;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 100%;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    line-height: 100%;
  }

  @media (min-width: 760px) {
    > input {
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`
