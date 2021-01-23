import React from 'react';
import { Header } from './components/Header';
import { CardList } from './components/CardList';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <CardList />
    </>
  );
};

export default App;
