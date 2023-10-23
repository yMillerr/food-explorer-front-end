import styled from 'styled-components'

export const IngredientsWrapperContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  width: 100%;

  border-radius: 8px;

  padding: 0.5rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 0.875rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`
