import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import { Hero } from '../../heroesContext';

import { Container, TextContent, Img, PowerStats, Loading } from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  hero: Hero
}

const HeroModal: React.FC<ModalProps> = ({ isOpen, onRequestClose, hero }: ModalProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, [])

  function addClassColor(stat: number) {
    if (stat < 40) {
      return 'low'
    } else if (stat >= 40 && stat < 80) {
      return 'medium'
    } else {
      return 'high'
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <Loading>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </Loading>
        <Img src={hero.images.md} />
        <PowerStats>
          <div className="stats first">
            <p>Combat: <span className={addClassColor(hero.powerstats.combat)}>{hero.powerstats.combat}</span></p>
            <p>Durability: <span className={addClassColor(hero.powerstats.durability)}>{hero.powerstats.durability}</span></p>
            <p>Intelligence: <span className={addClassColor(hero.powerstats.intelligence)}>{hero.powerstats.intelligence}</span></p>
          </div>
          <div className="stats second">
            <p>Power: <span className={addClassColor(hero.powerstats.power)}>{hero.powerstats.power}</span></p>
            <p>Speed: <span className={addClassColor(hero.powerstats.speed)}>{hero.powerstats.speed}</span></p>
            <p>Strength: <span className={addClassColor(hero.powerstats.strength)}>{hero.powerstats.strength}</span></p>
          </div>
        </PowerStats>
        <TextContent>
          <h2>{hero.name.toUpperCase()}</h2>

          <h3>Appearance:</h3>
          <p>Gender: <span>{hero.appearance.gender}</span></p>
          <p>Race: <span>{hero.appearance.race}</span></p>
          <p>Eye color: <span>{hero.appearance.eyeColor}</span></p>
          <p>Weight: <span>{hero.appearance.weight[1]}</span></p>
          <p>Height: <span>{hero.appearance.height[1]}</span></p>
          <br />

          <h3>Biography:</h3>
          <p>Full name: <span>{hero.biography.fullName}</span></p>
          <p>Alignment: <span>{hero.biography.alignment}</span></p>
          <p>Alter Egos: <span>{hero.biography.alterEgos}</span></p>
          <p>First Appearance: <span>{hero.biography.firstAppearance}</span></p>
          <p>Place of birth: <span>{hero.biography.placeOfBirth}</span></p>
          <p>Publisher: <span>{hero.biography.publisher}</span></p>
          <br />

          <h3>Work:</h3>
          <p>Base: <span>{hero.work.base}</span></p>
          <p>Occupation: <span>{hero.work.occupation}</span></p>
        </TextContent>
      </Container>
    </Modal>
  )
}

export default HeroModal;