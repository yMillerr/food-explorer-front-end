import styled from 'styled-components'

export const SectionContainer = styled.section`
  display: grid;
  gap: 1.5rem;

  width: 100%;

  margin-bottom: 1.5rem;

  animation: opacity 1s 0.3s backwards;

  > h4 {
    align-self: flex-start;

    font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.MEDIUM_400};
    font-size: 1.125rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 3rem;

    > h4 {
      font-size: 2rem;
    }
  }
`
