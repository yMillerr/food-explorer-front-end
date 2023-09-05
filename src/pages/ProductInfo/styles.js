import styled from 'styled-components'

export const ProductInfoContainer = styled.main`
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`

export const Content = styled.section`
  height: 100vh;
  max-width: 316px;

  margin: 2rem auto;

  > header {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > a {
      font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.MEDIUM_300};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      display: flex;
      align-items: center;
      gap: 0.75rem;

      cursor: pointer;
    }

    > img {
      max-width: 264px;
      max-height: 264px;

      width: 100%;

      object-fit: cover;
    }
  }

  > main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    margin: 1rem 0;

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
        max-height: 390px;
      }
    }

    > main {
      align-items: flex-start;
      align-self: center;

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
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem 1.5rem;

  padding: 0 1.75rem;

  @media (min-width: 768px) {
    padding: 0;

    gap: 0.75rem;
  }
`
