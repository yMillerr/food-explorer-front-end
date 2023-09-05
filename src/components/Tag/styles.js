import styled from 'styled-components'

export const TagContainer = styled.span`
  display: block;

  background-color: ${({ theme }) => theme.COLORS.DARK_1000};

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.MEDIUM_100};

  padding: 0.25rem 0.5rem;

  border-radius: 5px;
`
