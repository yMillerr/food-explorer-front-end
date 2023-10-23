import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
  }

  html {
    ::-webkit-scrollbar {
      width: 3px;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.COLORS.DARK_1000};
      
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.LIGHT_100};

      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  body {
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }


  input, label, input::placeholder {
    font-family: 'Roboto', sans-serif;
  }

  button, a {
    transition: all .3s;

    cursor: pointer;
  }

  button:hover {
    filter: brightness(1.2);
  }
`
