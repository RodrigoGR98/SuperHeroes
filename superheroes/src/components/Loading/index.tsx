import React from 'react';

import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <h1 data-text="Loading...">LOADING</h1>
      <div className="dots">
        <div className="load-one dot"></div>
        <div className="load-two dot"></div>
        <div className="load-three dot"></div>
      </div>
    </Container>
  )
}

export default Loading;