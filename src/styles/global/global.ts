import { createGlobalStyle } from 'styled-components';
import { normalizeStyle } from './normalize';
import { FONT_FAMILY } from 'styles/typography';

export const GlobalStyle = createGlobalStyle`
  ${normalizeStyle};
  
  html, kbd {
    font-family: ${FONT_FAMILY};
  }
`;