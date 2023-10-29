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
  min-width: 100vw;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  position: fixed;
  inset: 0;
  z-index: 99999;

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

    padding: 0 1.75rem;

    flex: 1;

    > div {
      margin-top: 36px;

      > a {
        display: block;
        padding: 0.625rem;

        font: ${({ theme }) => theme.COLORS.MEDIUM_300};
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
