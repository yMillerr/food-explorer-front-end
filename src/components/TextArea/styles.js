import styled from 'styled-components'

export const TextAreaContainer = styled.textarea`
  width: 100%;
  height: 170px;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  font: ${({ theme }) => theme.TYPOGRAPHY.ROBOTO.REGULAR_400};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border-radius: 8px;
  border: none;

  padding: 0.875rem;

  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`
