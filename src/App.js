import React from 'react';
import styled from 'styled-components';

import Header from './components/header';

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
    </styles.appContainer>
  );
}

export default App;
