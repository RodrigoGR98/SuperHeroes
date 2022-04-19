import React from 'react';
import SuperHeroes from '../../components/SuperHeroes';
import Header from '../../components/Header';

import background from '../../assets/background.jpg';

import { Container, Main } from './styles';
import { Background } from '../../components/Background/styles';

const Home: React.FC = () => {
  return (
    <Background background={background}>
      <Container>
        <Header />
        <Main>
          <SuperHeroes />
        </Main>
      </Container>
    </Background>
  );
}

export default Home;