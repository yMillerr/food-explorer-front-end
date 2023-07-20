import styled from 'styled-components'

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.LIGHT_600 : 'transparent'};

  border: ${({ theme, isNew }) =>
    isNew ? 'none' : `1px dashed ${theme.COLORS.LIGHT_600}`};
  border-radius: 8px;

  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.LIGHT_100 : theme.COLORS.LIGHT_500};

  padding: 1rem 1.6rem;

  > input {
    background: transparent;
    border: none;
    outline: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > button {
    border: none;
    background: transparent;

    > svg {
      color: ${({ theme, isNew }) =>
        isNew ? theme.COLORS.LIGHT_100 : theme.COLORS.LIGHT_500};
    }
  }
`
