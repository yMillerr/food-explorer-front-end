import { styled } from 'styled-components'

export const InputFileContainer = styled.div`
  width: 100%;

  input[type='file'] {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    gap: 8px;

    width: 100%;

    padding: 1.2rem 3.2rem;

    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    cursor: pointer;
  }
`
