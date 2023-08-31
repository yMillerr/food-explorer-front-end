import styled from 'styled-components'

export const ProductInfoContainer = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    padding: 0 1rem;

    max-width: 316px;
    width: 100%;

    margin: 1rem auto 2.25rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    grid-area: content;

    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 1.5rem;
      font-weight: 500;

      align-self: flex-start;

      cursor: pointer;

      &:not(:disabled):hover {
        opacity: 0.5;
      }
    }

    > img {
      max-width: 264px;
      max-height: 264px;
      width: 100%;

      object-fit: cover;
    }
  }

  @media (min-width: 1024px) {
    > main {
      max-width: 1125px;

      margin-top: 1.5rem;

      flex-direction: row;
      gap: 3rem;

      > img {
        max-height: 390px;
        max-width: 390px;
        width: 100%;
      }
    }
  }
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  text-align: center;

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-weight: 500;
    font-size: 2.7rem;
    line-height: 2.7rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.REGULAR_300};
  }

  > .controls-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    text-align: left;

    max-width: 867px;

    .controls-container {
      max-width: 294px;
    }
  }
`

export const FoodTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  flex-wrap: wrap;

  gap: 1.5rem;

  > span {
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};

    padding: 4px 8px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.MEDIUM_100};

    border-radius: 5px;
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
    font: ${({ theme }) => theme.TYPOGRAPHY.ROBOTO.BOLD_200};
  }

  > button {
    border: none;
    background: none;
  }
`
