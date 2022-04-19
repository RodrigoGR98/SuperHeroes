import React from 'react';
import logoImg from '../../assets/logo1.png';

import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo Superheroes" onClick={() => document.location = '/'} />
        <div className="buttons-header">
          <a href="/">Home</a>
          <a href="/favorites">Favorites</a>
          <a href="/battle">Heroes Battle</a>
        </div>
      </Content>
    </Container>
  );
}

export default Header;