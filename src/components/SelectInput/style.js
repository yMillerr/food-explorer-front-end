import { styled } from 'styled-components'

import * as Select from '@radix-ui/react-select'

export const Trigger = styled(Select.Trigger)`
  width: 100%;
  height: 48px;

  padding: 0.75rem 1rem;

  border: 0;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled(Select.Content)`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  border-radius: 8px;
  padding: 0.675rem;

  overflow: hidden;
  cursor: pointer;
`

export const Item = styled(Select.Item)`
  padding: 0.75rem;
  border-radius: 8px;

  &[data-highlighted] {
    outline: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
  }
`
