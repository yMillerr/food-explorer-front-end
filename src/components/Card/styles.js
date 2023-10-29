import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 210px;
  height: 292px;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 8px;

  position: relative;

  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  text-align: center;

  flex: 1;

  animation: leftToRight 1s 0.6s backwards;

  > header {
    position: absolute;
    top: 1rem;
    right: 1rem;

    > button {
      background-color: transparent;
      border: none;
    }
  }

  > main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;

    > img {
      max-width: 88px;
      height: 88px;

      width: 100%;
      object-fit: cover;

      border-radius: 50%;
    }

    > a {
      font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.MEDIUM_100};
      color: inherit;

      display: flex;
      align-items: center;
      gap: 1rem;

      > span {
        font-size: 0.875rem;
      }

      &:hover {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }

    > p {
      display: none;
    }

    > span {
      font: ${({ theme }) => theme.TYPOGRAPHY.ROBOTO.REGULAR_400};
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    > button {
      height: 2rem;
    }
  }

  @media (min-width: 768px) {
    width: 305px;
    height: 462px;

    padding: 1.5rem;

    > main {
      gap: 1rem;

      > img {
        max-width: 176px;
        height: 176px;
      }

      > a {
        font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.BOLD_300};
      }

      > p {
        display: inline-block;

        font: ${({ theme }) => theme.TYPOGRAPHY.ROBOTO.REGULAR_200};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }

      > span {
        font: ${({ theme }) => theme.TYPOGRAPHY.ROBOTO.REGULAR_500};
      }
    }

    > footer {
      flex-direction: row;
      gap: 1rem;

      > button {
        height: 48px;
        max-width: 92px;
      }
    }
  }
`
