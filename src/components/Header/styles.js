import styled from 'styled-components'

import * as Dialog from '@radix-ui/react-dialog'

export const Trigger = styled(Dialog.Trigger)`
  background: none;
  border: none;

  @media (min-width: 768px) {
    display: none;
  }
`

export const Content = styled(Dialog.Content)`
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  position: fixed;
  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &[data-state='open'] {
    animation: open 0.6s ease-in-out;
  }

  &:not([data-state='open']) {
    animation: close 0.6s;
  }

  > header {
    min-width: 100%;
    height: 114px;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};
  }

  > main {
    max-width: 372px;
    width: 100%;

    margin: 0 auto;

    flex: 1;

    > div {
      margin-top: 36px;

      > a {
        display: block;
        padding: 0.625rem;

        font: lighter 1.5rem/140% 'Poppins', sans-serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

        cursor: pointer;
      }
    }
  }

  @keyframes open {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }

    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes close {
    from {
      opacity: 1;
      transform: translateX(0);
    }

    to {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
`

export const Close = styled(Dialog.Close)`
  background-color: transparent;
  border: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  align-items: center;
  gap: 1.6rem;

  padding: 3.75rem 1.75rem 1.75rem;

  > span {
    font: ${({ theme }) => theme.TYPOGRAPHY.ROBOTO.REGULAR_400};
    font-size: 1.325rem;
  }
`

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
