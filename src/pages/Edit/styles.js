import styled from 'styled-components'

export const NewContainer = styled.div`
  padding: 0 1rem;

  > main {
    max-width: 364px;
    margin: 2.5rem auto 3rem;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    > a {
      display: flex;
      align-items: center;
      gap: 0.875rem;

      font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.MEDIUM_400};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 1rem;

      animation: leftToRight 1s 0.3s backwards;
    }

    h2 {
      font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.MEDIUM_400};

      animation: leftToRight 0.9s 0.4s backwards;
    }
  }

  @media (min-width: 768px) {
    > main {
      max-width: 1120px;

      > a {
        font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.BOLD_300};

        width: fit-content;

        &:hover {
          transition: all 0.6s;
          color: ${({ theme }) => theme.COLORS.LIGHT_400};

          path {
            fill: ${({ theme }) => theme.COLORS.LIGHT_400};
          }
        }
      }
    }
  }
`
