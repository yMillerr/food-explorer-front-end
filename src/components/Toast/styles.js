import styled from 'styled-components'

import * as Toast from '@radix-ui/react-toast'

export const Viewport = styled(Toast.Viewport)`
  position: fixed;

  top: 130px;
  right: 30px;
  z-index: 9999;

  max-width: 300px;
  width: 100%;
`
export const Root = styled(Toast.Root)`
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};

  padding: 0.75rem;

  position: relative;

  border: 2px solid
    ${({ theme, status }) =>
      status === 'sucess' ? theme.COLORS.MINT_100 : theme.COLORS.TOMATO_300};

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;

  &[data-state='open'] {
    animation: openToast 0.6s;
  }

  &:not([data-state='open']) {
    animation: closeToast 0.6s;
  }

  @keyframes closeToast {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }

  @keyframes openToast {
    from {
      transform: translateX(100%);
      opacity: 0;
    }

    to {
      transform: translateX(0);
    }
  }
`

export const Title = styled(Toast.Title)`
  font: ${({ theme }) => theme.TYPOGRAPHY.ROBOTO.REGULAR_400};
  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 0.75rem;
`
