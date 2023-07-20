import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  grid-area: footer;

  padding: 3rem 2.8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  grid-area: footer;

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-family: 'DM Sans', sans-serif;
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    > span {
      font-size: 1.4rem;
    }

    padding: 2.4rem 12.3rem;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > h3 {
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    font-size: 1.6rem;
  }

  @media (min-width: 768px) {
    > h3 {
      font-size: 2.4rem;
    }
  }
`
