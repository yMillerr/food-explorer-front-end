import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;

  > main {
    padding: 0 1rem;
  }
`

export const FrameContainer = styled.section`
  max-width: 376px;
  height: 120px;
  width: 100%;

  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

  border-radius: 3px;

  margin: 2.75rem auto 3.875rem;

  display: flex;
  align-items: center;

  animation: rightToLeft 1s 0.3s backwards;

  > .frame-mobile {
    max-width: 100%;

    margin-left: -2rem;
    margin-top: -2rem;

    object-fit: cover;
  }

  > div {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    > h3 {
      font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.SEMIBOLD_100};
    }

    > p {
      font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.REGULAR_100};
      font-size: 0.75rem;
    }
  }

  .frame-desktop {
    display: none;
  }

  @media (min-width: 768px) {
    max-width: 1120px;
    height: 260px;
    width: 100%;

    margin: 10.25rem auto 3.875rem;

    display: flex;

    > div {
      padding-right: 6.25rem;

      > h3 {
        font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.MEDIUM_500};
      }

      > p {
        font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.REGULAR_400};
      }
    }

    > .frame-desktop {
      display: flex;

      margin-top: -2rem;

      max-width: 400px;
      height: 290px;
      object-fit: cover;
    }

    > .frame-mobile {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    justify-content: space-between;

    .frame-desktop {
      margin-top: -9.3rem;

      max-width: 656px;
      height: 412px;
    }
  }
`

export const Content = styled.section`
  max-width: 436px;
  margin-left: auto;

  @media (min-width: 425px) {
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    max-width: 1120px;
  }
`
