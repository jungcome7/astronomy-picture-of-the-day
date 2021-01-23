import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import AppRouter from './routes/index';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppRouter></AppRouter>
    </>
  );
};

export default App;
