import React from 'react';
import styled from 'styled-components';

import Header from './components/header';
import About from './components/about';
import Work from './components/work';
import Background from './components/background';
import Interests from './components/interests';
import Contact from './components/contact';

const styles = {
  appContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: bisque;
    align-items: center;
  `,
}

function App() {
  return (
    <styles.appContainer>
      <Header/>
      <About/>
      <Background/>
      <Work/>
      <Interests/>
      <Contact/>
    </styles.appContainer>
  );
}

export default App;
