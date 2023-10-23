import styled from 'styled-components'

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  background-color: ${({ theme, isnew }) =>
    isnew ? theme.COLORS.LIGHT_600 : 'transparent'};

  border: ${({ theme, isnew }) =>
    isnew ? 'none' : `1px dashed ${theme.COLORS.LIGHT_600}`};
  border-radius: 8px;

  color: ${({ theme, isnew }) =>
    isnew ? theme.COLORS.LIGHT_100 : theme.COLORS.LIGHT_500};

  padding: 0 0.75rem;

  > input {
    background: transparent;
    border: none;
    outline: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    width: 100%;
    height: 32px;
  }

  > button {
    border: none;
    background: transparent;

    > svg {
      color: ${({ theme, isnew }) =>
        isnew ? theme.COLORS.LIGHT_100 : theme.COLORS.LIGHT_500};
    }
  }
`
