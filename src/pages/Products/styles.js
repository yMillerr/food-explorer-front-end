import styled from 'styled-components'

export const ProductsContainer = styled.main`
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`

export const Content = styled.section`
  max-width: 316px;

  margin: 2rem auto;

  > header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    > a {
      font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.MEDIUM_300};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      display: flex;
      align-items: center;
      gap: 0.75rem;

      cursor: pointer;

      align-self: flex-start;

      animation: leftToRight 1s 0.3s;
    }

    > img {
      max-width: 264px;
      height: 264px;

      border-radius: 50%;

      width: 100%;

      object-fit: cover;

      animation: opacity 1s 0.3s backwards;
    }
  }

  > main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    margin: 1rem 0;

    animation: opacity 1s 0.6s backwards;

    > h3 {
      font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.MEDIUM_300};
      font-size: 1.75rem;
    }

    > p {
      font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.MEDIUM_300};
      font-size: 1rem;
    }

    > section {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      margin-top: 3rem;
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 465px;

    gap: 2rem;

    max-width: 1125px;

    > header {
      > img {
        max-width: 390px;
        height: 390px;

        margin-top: 2.265rem;
      }
    }

    > main {
      align-items: flex-start;
      align-self: flex-end;

      > h3 {
        font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.MEDIUM_500};
      }

      > p {
        font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.REGULAR_300};
      }

      > section {
        gap: 2rem;

        align-self: flex-start;
      }
    }
  }
`

export const TagsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem 1.5rem;

  padding: 0 1.75rem;

  @media (min-width: 768px) {
    padding: 0;

    gap: 0.75rem;
  }
`
