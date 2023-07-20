import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;

  > main {
    padding: 0 1.6rem;
  }
`

export const Content = styled.main`
  max-width: 43.7rem;
  width: 100%;

  margin: 4.4rem auto;

  grid-area: content;

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 1024px) {
    max-width: 1120px;
  }
`

export const FrameContainer = styled.div`
  width: 100%;
  height: 12rem;

  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

  border-radius: 3px;

  margin: 4.4rem 0 6.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    max-width: 100%;

    margin-left: -2.5rem;
    margin-top: -2rem;
  }

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 0.3rem;

    max-width: 21.5rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    > h3 {
      font-size: 1.8rem;
      line-height: 2.5rem;
      font-weight: 600;
    }

    > p {
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
  }

  .frame-desktop {
    display: none;
  }

  @media (min-width: 1024px) {
    height: 26rem;

    margin: 16.3rem 0 6.2rem;

    > div {
      max-width: 42.2rem;

      margin-right: 10rem;

      gap: 0.8rem;

      > h3 {
        font-size: 4rem;
        font-family: 'Popins', sans-serif;
        line-height: 140%;
      }

      > p {
        font-size: 1.6rem;
      }
    }

    > img {
      width: 656px;
      height: 406px;

      object-fit: cover;
    }

    > .frame-desktop {
      display: flex;

      margin-top: -15rem;
    }

    > .frame-mobile {
      display: none;
    }
  }
`

export const Carousels = styled.div`
  width: 100%;

  display: flex;
  align-content: center;
`
