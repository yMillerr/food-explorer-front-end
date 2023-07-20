import styled from 'styled-components'

export const CardContainer = styled.div`
  max-width: 21rem;
  height: 29.2rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  position: relative;

  border-radius: 0.8rem;

  .button-top {
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;

    background: none;
    border: none;

    > svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  > img {
    max-width: 8.8rem;
    width: 100%;

    object-fit: cover;
  }

  > h3 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.4rem;
    font-family: 'Roboto';
    line-height: 2.2rem;

    text-align: center;

    display: none;
  }

  > span {
    line-height: 1.6rem;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  @media (min-width: 768px) {
    max-width: 30.3rem;
    height: 46.2rem;

    > p {
      display: block;
    }

    > img {
      max-width: 17.6rem;
    }

    > h3 {
      font-size: 2.4rem;
      line-height: 3.3rem;

      text-align: center;
    }

    > span {
      font-size: 3.2rem;
      line-height: 5.1rem;
    }
  }
`

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.6rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.4rem;

    > button {
      border: none;
      background: none;

      > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }
    }

    > span {
      font-family: 'Roboto';
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3.2rem;
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    > button {
      flex: 1;
      padding: 1.2rem 2.4rem;
    }
  }
`
