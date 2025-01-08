import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.text};
  }

  p {
    color: ${({ theme }) => theme.text};
  }

  section {
    background: ${({ theme }) => theme.cardBg};
    margin: 1rem 0;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px ${({ theme }) => theme.shadowColor};
  }
`;

