import styled from 'styled-components'

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 100%;

  margin-bottom: 2.4rem;

  > h4 {
    align-self: flex-start;

    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    margin-bottom: 4.8rem;

    > h4 {
      font-size: 3.2rem;
    }
  }
`
