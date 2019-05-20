import React from 'react';
import styled from 'styled-components';
import bgImage from './assets/img/background.png';

import Header from './components/header';
import About from './components/about';
import Work from './components/work';
import Background from './components/background';
import Interests from './components/interests';
import Contact from './components/contact';

const styles = {
  appContainer: styled.div`
    padding: 5% 0 5% 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  `,
  backgroundImage: {
    backgroundImage: `url(${bgImage})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'fixed',
    backgroundSize: 'cover',
  }
}

function App() {
  return (
    <styles.appContainer style={styles.backgroundImage}>
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
