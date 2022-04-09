import React from 'react';

import { Hero } from '../../heroesContext';

import { Container } from './styles';

interface SuperHeroCardProps {
  hero: Hero
}

const SuperHeroCard: React.FC<SuperHeroCardProps> = ({ hero }: SuperHeroCardProps) => {
  return (
    <Container>
      <img src={hero.images.sm} alt="" />
      <span>{hero.name}</span>
    </Container>
  );
}

export default SuperHeroCard;