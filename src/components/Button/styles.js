import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;
  height: 4.8rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

  border: none;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-weight: 500;

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 500;
  }
`
