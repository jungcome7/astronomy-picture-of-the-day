import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import AppRouter from './routes/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRouter></AppRouter>
    </>
  );
}

export default App;
