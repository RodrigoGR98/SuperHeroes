import React from 'react';
import Modal from 'react-modal';
import heroesApi from '../../heroesAPI.json';

import { Hero } from '../../heroesContext';

import { Container, HeroList } from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  setCharacterOne: (hero: Hero) => void;
  setCharacterTwo: (hero: Hero) => void;
  characterChoose: number;
}

const HeroBattleModal: React.FC<ModalProps> = ({ isOpen, onRequestClose, setCharacterOne, setCharacterTwo, characterChoose }) => {

  function selectCharacter(hero: Hero) {
    if (characterChoose === 1) {
      setCharacterOne(hero)
      onRequestClose();
    } else {
      setCharacterTwo(hero)
      onRequestClose();
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content battle"
    >
      <Container>
        {heroesApi.map((hero: Hero) =>
          <HeroList key={hero.id} onClick={() => selectCharacter(hero)}>
            <img src={hero.images.sm} />
            <span>{hero.name}</span>
          </HeroList>)}
      </Container>
    </Modal>
  );
}

export default HeroBattleModal;