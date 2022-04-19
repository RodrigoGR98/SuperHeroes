import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';

import background from '../../assets/background.jpg';
import { GiCrossedSwords } from "react-icons/gi";

import { Container, Main, HeroBattle, Fighters } from './styles';
import { Background } from '../../components/Background/styles';

const Battle: React.FC = () => {
  const [startBattle, setStartBattle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartBattle(true);
    }, 5000)
  }, [])

  return (
    <Background background={background}>
      <Container>
        <Header />
        <Main>
          <div className="title">
            <h1>HEROES</h1>
            <GiCrossedSwords />
            <h1>BATTLE</h1>
          </div>
          <Fighters>
            <button>Choose character 1</button>
            <button>Choose character 2</button>
          </Fighters>
          {startBattle &&
            <HeroBattle>
              <div className="sides">
                <div className="side fighter-one">
                  <h2 className="name">Venom</h2>
                  <img src="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/687-venom.jpg" />
                </div>
                <div className="versus">
                  <span>vs.</span>
                </div>
                <div className="side fighter-two">
                  <h2 className="name">Spiderman</h2>
                  <img src="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/620-spider-man.jpg" />
                </div>
              </div>
            </HeroBattle>
          }
        </Main>
      </Container>
    </Background>
  );
}

export default Battle;