import styled from 'styled-components'

export const CarouselContainer = styled.div`
  position: relative;

  width: 100%;

  overflow: hidden;

  > div {
    > div {
      display: flex;
    }
  }

  > button {
    width: fit-content;
    height: fit-content;

    cursor: pointer;

    padding: 1rem;

    background: 0;
    border: 0;

    display: none;
    align-items: center;
    justify-content: center;

    z-index: 0;

    &:disabled path {
      fill: ${({ theme }) => theme.COLORS.LIGHT_600};
    }
  }

  .arrow-left {
    position: absolute;
    top: 50%;
    left: 10;

    transform: translateY(-50%);
  }

  .arrow-right {
    position: absolute;
    top: 50%;
    right: 0;

    transform: translateY(-50%);
  }

  @media (min-width: 768px) {
    > button {
      display: flex;
    }

    max-width: 1120px;
  }
`
