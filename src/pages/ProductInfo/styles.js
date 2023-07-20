import styled from 'styled-components'

export const ProductInfoContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';

  > main {
    padding: 0 1.6rem;

    max-width: 31.6rem;
    width: 100%;

    margin: 1.6rem auto 3.5rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 1.6rem;

    grid-area: content;

    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.1rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 2.4rem;
      font-weight: 500;

      align-self: flex-start;

      cursor: pointer;

      &:not(:disabled):hover {
        opacity: 0.5;
      }
    }

    > img {
      max-width: 26.4rem;
      max-height: 26.4rem;
      width: 100%;

      object-fit: cover;
    }
  }

  @media (min-width: 1024px) {
    > main {
      max-width: 1125px;

      margin-top: 2.4rem;

      flex-direction: row;
      gap: 4.7rem;

      > a {
      }

      > img {
        max-height: 39rem;
        max-width: 39rem;
        width: 100%;
      }
    }
  }
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  text-align: center;

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-weight: 500;
    font-size: 2.7rem;
    line-height: 2.7rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: 'Roboto', sans-serif;
    line-height: 2.2rem;
  }

  > .controls-container {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  @media (min-width: 1024px) {
    text-align: left;

    max-width: 86.7rem;

    .controls-container {
      max-width: 29.4rem;
    }
  }
`

export const FoodTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  flex-wrap: wrap;

  gap: 2.6rem;

  > span {
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};

    padding: 0.4rem 0.8rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
    line-height: 2.4rem;

    border-radius: 0.5rem;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: 'Roboto', sans-serif;
  }

  > button {
    border: none;
    background: none;
  }
`
