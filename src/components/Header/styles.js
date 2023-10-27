import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 104px;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  padding: 5.6rem 2.8rem 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2.4rem;

  grid-area: header;

  .receipt-button-mobile {
    position: relative;

    > span {
      width: 20px;
      height: 20px;

      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.MEDIUM_100};

      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      right: -10px;
      top: -10px;
    }
  }

  div:nth-child(3),
  a:last-child {
    display: none;
  }

  div:nth-child(3) {
    max-width: 580px;
  }

  > section {
    max-width: 216px;
    width: 100%;

    display: none;
  }

  @media (min-width: 768px) {
    > .menu-button,
    .receipt-button-mobile {
      display: none;
    }

    > div:nth-child(3),
    a:last-child,
    section {
      display: flex;
    }

    justify-content: space-between;
    gap: 2rem;

    padding: 1.5rem 7.75rem;
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
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font: ${({ theme }) => theme.TYPOGRAPHY.ROBOTO.BOLD_200};

    display: flex;
    align-items: center;
    gap: 0.8rem;

    > span {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font: ${({ theme }) => theme.TYPOGRAPHY.ROBOTO.REGULAR_100};
    }
  }

  @media (min-width: 768px) {
    max-width: 197px;
    width: 100%;

    align-items: flex-start;

    > h1 {
      font: ${({ theme }) => theme.TYPOGRAPHY.ROBOTO.BOLD_200};
      flex-direction: column;
      gap: 0;

      > span {
        align-self: flex-end;
      }
    }

    > img {
      width: 30px;
      height: 30px;
    }
  }
`
