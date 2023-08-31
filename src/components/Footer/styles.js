import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  padding: 1.875rem 1.75rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  grid-area: footer;

  > span {
    font: ${({ theme }) => theme.TYPOGRAPHY.ROBOTO.REGULAR_200};
  }

  @media (min-width: 768px) {
    padding: 1.5rem 7.75rem;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > h3 {
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    font: ${({ theme }) => theme.TYPOGRAPHY.ROBOTO.BOLD_200};
    font-size: 1rem;
  }

  > img {
    height: 30px;
    width: 30px;
  }

  @media (min-width: 768px) {
    > h3 {
      font-size: 1.5rem;
    }
  }
`
