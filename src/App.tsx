import React from 'react';
import { GlobalStyle } from 'styles/global';
import { Main } from 'components/Main';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
};
