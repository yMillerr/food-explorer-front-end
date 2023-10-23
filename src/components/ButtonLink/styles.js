import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const ButtonLinkContainer = styled(Link)`
  width: 100%;

  padding: 0.75rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.MEDIUM_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border-radius: 5px;
`
