import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  padding: 5.6rem 2.8rem 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2.4rem;

  grid-area: header;

  > button {
    background: none;
    border: none;

    > svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  .receipt-button-mobile {
    position: relative;

    > span {
      width: 2rem;
      height: 2rem;

      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 1.4rem;
      line-height: 2.4rem;

      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      right: -1rem;
      top: -1rem;
    }
  }

  .dektop-order-button {
    max-width: 21.6rem;
    width: 100%;
    height: 4.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    padding: 1.2rem 3.2rem 1.2rem 3.2rem;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

    border-radius: 0.5rem;

    display: none;

    > span {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 1.4rem;
      line-height: 2.4rem;
    }

    img {
      width: 3.2rem;
      height: 3.2rem;
    }
  }

  div:nth-child(3),
  .signout-button {
    display: none;
  }

  .close {
    animation: closeMenu 0.9s ease;
    visibility: hidden;
  }

  .open {
    animation: openMenu 0.9s backwards;
  }

  @media (min-width: 1024px) {
    > .menu-button {
      display: none;
    }

    div:nth-child(3),
    .signout-button,
    .dektop-order-button {
      display: flex;
    }

    justify-content: space-between;
    gap: 3.2rem;

    padding: 2.4rem 12.3rem;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > img {
    width: 2.4rem;
    height: 2.4rem;
  }

  > h1 {
    font-size: 2.1rem;
    line-height: 2.4rem;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    display: flex;
    align-items: center;
    gap: 0.8rem;

    > span {
      font-size: 1.2rem;
      line-height: 2rem;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font-weight: 400;
    }
  }

  @media (min-width: 1024px) {
    align-items: flex-start;
    > h1 {
      font-size: 2.4rem;
      flex-direction: column;
      gap: 0;

      > span {
        align-self: flex-end;
      }
    }

    > img {
      width: 3rem;
      height: 3rem;
    }
  }
`

export const MobileMenuContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  position: absolute;
  inset: 0;

  > header {
    width: 100%;

    padding: 5.6rem 2.8rem 2.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    display: flex;
    align-items: center;
    gap: 1.6rem;

    > button {
      background: none;
      border: none;

      > img {
        background: none;
        border: none;
      }
    }

    > p {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: 'Roboto', sans-serif;
      font-size: 2.1rem;
      line-height: 2.4rem;
      font-weight: 400;
    }
  }

  > main {
    max-width: 37.2rem;
    width: 100%;

    margin: 3.6rem auto 0;

    padding: 0 1.6rem;

    > div:nth-child(1) {
      margin-bottom: 3.6rem;
    }

    .menu-content {
      display: block;

      width: 100%;

      padding: 1rem;

      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 2.4rem;
      line-height: 3.4rem;
    }
  }

  @keyframes openMenu {
    0% {
      opacity: 0;
      transform: translateX(-30rem);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes closeMenu {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-30rem);
    }
  }
`
