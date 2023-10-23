import { styled } from 'styled-components'

export const InputFileContainer = styled.div`
  width: 100%;

  overflow: hidden;

  input[type='file'] {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    width: 100%;
    height: 48px;

    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    cursor: pointer;
  }
`
