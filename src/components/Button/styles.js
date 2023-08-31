import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;
  height: 48px;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

  border: none;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font: ${({ theme }) => theme.TYPOGRAPHY.POPPINS.MEDIUM_100};
`
