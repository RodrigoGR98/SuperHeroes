import React, { useEffect, useState } from 'react';
import HeroModal from '../HeroModal';

import { Hero } from '../../heroesContext';

import { Container } from './styles';

interface SuperHeroCardProps {
  hero: Hero
}

const SuperHeroCard: React.FC<SuperHeroCardProps> = ({ hero }: SuperHeroCardProps) => {
  const [isHeroModalOpen, setIsHeroModalOpen] = useState(false);

  function handleOpenHeroModal() {
    setIsHeroModalOpen(true);
  }

  function handleCloseHeroModal() {
    setIsHeroModalOpen(false);
  }


  return (
    <>
      <Container onClick={handleOpenHeroModal}>
        <img src={hero.images.sm} alt="" />
        <span>{hero.name}</span>
      </Container>
      {isHeroModalOpen && <HeroModal
        isOpen={isHeroModalOpen}
        onRequestClose={handleCloseHeroModal}
        hero={hero}
      />}
    </>
  );
}

export default SuperHeroCard;