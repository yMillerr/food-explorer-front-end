import styled from 'styled-components'

export const NewContainer = styled.div`
  height: 100vh;

  padding: 1.6rem;

  > main {
    max-width: 364px;
    margin: 1rem auto 5rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    grid-area: content;

    > a {
      display: flex;
      align-items: center;

      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    h2 {
      font-family: 'Roboto', sans-serif;
      font-size: 3.2rem;
    }
  }

  @media (min-width: 1024px) {
    > main {
      max-width: 1120px;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: 80px auto 204px 48px;

    button {
      grid-column: 3;
    }
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: 'Roboto', sans-serif;
  }

  > input {
    width: 100%;

    padding: 1.6rem 1.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    border: none;
    border-radius: 8px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > textarea {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    height: 17.2rem;

    resize: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: 'Roboto', sans-serif;

    padding: 1.4rem;

    border: none;
    border-radius: 8px;
  }

  @media (min-width: 1024px) {
    &:nth-child(4) {
      grid-column: 1 / 3;
    }

    &:nth-child(6) {
      grid-column: 1 / -1;
    }
  }
`

export const TagsWrapper = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  border-radius: 8px;

  padding: 0.8rem;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.6rem;
`
