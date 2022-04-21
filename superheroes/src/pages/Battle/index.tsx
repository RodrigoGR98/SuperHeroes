import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import HeroBattleModal from '../../components/HeroBattleModal';
import { Hero } from '../../heroesContext';
import ImageDust from './ImageDust';

import background from '../../assets/background.jpg';
import { GiCrossedSwords } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";

import { Container, Main, HeroBattle, Fighters, Images } from './styles';
import { Background } from '../../components/Background/styles';
import { off } from 'process';

const Battle: React.FC = () => {
  const [startBattle, setStartBattle] = useState(false);
  const [isHeroModalOpen, setIsHeroModalOpen] = useState(false);

  const [characterOne, setCharacterOne] = useState<Hero>();
  const [characterTwo, setCharacterTwo] = useState<Hero>();
  const [characterChoose, setCharacterChoose] = useState(0);
  const [oneDefeat, setOneDefeat] = useState(false);
  const [twoDefeat, setTwoDefeat] = useState(false);
  const [resultOne, setResultOne] = useState('');
  const [resultTwo, setResultTwo] = useState('');
  const [showResultOne, setShowResultOne] = useState(false);
  const [showResultTwo, setShowResultTwo] = useState(false);
  const [oneTotalPower, setOneTotalPower] = useState(0);
  const [twoTotalPower, setTwoTotalPower] = useState(0);

  function handleOpenHeroModal() {
    setIsHeroModalOpen(true);
  }

  function handleCloseHeroModal() {
    setIsHeroModalOpen(false);
  }

  interface Result {
    isDraw: boolean,
    isOneDefeat: boolean,
    isTwoDefeat: boolean,
  }

  function startCharacterBattle() {
    if (characterOne && characterTwo) {
      setStartBattle(true);
    }

    setTimeout(() => {
      let psOne1 = document.getElementById('psOne1');
      let psOne2 = document.getElementById('psOne2');
      let psOne3 = document.getElementById('psOne3');
      let psOne4 = document.getElementById('psOne4');
      let psOne5 = document.getElementById('psOne5');
      let psOne6 = document.getElementById('psOne6');
      let psOne7 = document.getElementById('psOne7');
      let psTwo1 = document.getElementById('psTwo1');
      let psTwo2 = document.getElementById('psTwo2');
      let psTwo3 = document.getElementById('psTwo3');
      let psTwo4 = document.getElementById('psTwo4');
      let psTwo5 = document.getElementById('psTwo5');
      let psTwo6 = document.getElementById('psTwo6');
      let psTwo7 = document.getElementById('psTwo7');

      if (psOne1) { psOne1.style.opacity = '1'; }
      if (psTwo1) { psTwo1.style.opacity = '1'; }

      setTimeout(() => {
        if (psOne2) { psOne2.style.opacity = '1'; }
        if (psTwo2) { psTwo2.style.opacity = '1'; }
      }, 1000);

      setTimeout(() => {
        if (psOne3) { psOne3.style.opacity = '1'; }
        if (psTwo3) { psTwo3.style.opacity = '1'; }
      }, 2000);

      setTimeout(() => {
        if (psOne4) { psOne4.style.opacity = '1'; }
        if (psTwo4) { psTwo4.style.opacity = '1'; }
      }, 3000);

      setTimeout(() => {
        if (psOne5) { psOne5.style.opacity = '1'; }
        if (psTwo5) { psTwo5.style.opacity = '1'; }
      }, 4000);

      setTimeout(() => {
        if (psOne6) { psOne6.style.opacity = '1'; }
        if (psTwo6) { psTwo6.style.opacity = '1'; }
      }, 5000);

      setTimeout(() => {
        if (psOne7) { psOne7.style.opacity = '1'; }
        if (psTwo7) { psTwo7.style.opacity = '1'; }
      }, 8000);

      let result: Result | undefined;

      setTimeout(() => {
        result = getWinner();
      }, 7000);

      setTimeout(() => {
        if (result)
          getResultLabels(result.isDraw, result.isOneDefeat, result.isTwoDefeat);
      }, 8000);
    }, 2000)
  }

  function compareStats(statOne: number, statTwo: number, character: number) {
    if (statOne > statTwo) {
      return <span className="win">Win!</span>;
    } else if (statOne === statTwo) {
      return <span className="draw">Draw!</span>;
    } else {
      return <span className="defeat">Defeat!</span>;
    }
  }

  function getWinner() {
    if (characterOne && characterTwo) {
      let stats1 = characterOne.powerstats;
      let stats2 = characterTwo.powerstats;

      let counterCharacterOne = 0;
      let counterCharacterTwo = 0;
      let totalPowerOne = 0;
      let totalPowerTwo = 0;

      if (stats1.combat > stats2.combat) {
        counterCharacterOne = counterCharacterOne + 1;
      } else if (stats1.combat < stats2.combat) {
        counterCharacterTwo = counterCharacterTwo + 1;
      }

      totalPowerOne += stats1.combat;
      totalPowerTwo += stats2.combat;

      if (stats1.durability > stats2.durability) {
        counterCharacterOne = counterCharacterOne + 1;
      } else if (stats1.durability < stats2.durability) {
        counterCharacterTwo = counterCharacterTwo + 1;
      }

      totalPowerOne += stats1.durability;
      totalPowerTwo += stats2.durability;

      if (stats1.intelligence > stats2.intelligence) {
        counterCharacterOne = counterCharacterOne + 1;
      } else if (stats1.intelligence < stats2.intelligence) {
        counterCharacterTwo = counterCharacterTwo + 1;
      }

      totalPowerOne += stats1.intelligence;
      totalPowerTwo += stats2.intelligence;

      if (stats1.power > stats2.power) {
        counterCharacterOne = counterCharacterOne + 1;
      } else if (stats1.power < stats2.power) {
        counterCharacterTwo = counterCharacterTwo + 1;
      }

      totalPowerOne += stats1.power;
      totalPowerTwo += stats2.power;

      if (stats1.speed > stats2.speed) {
        counterCharacterOne = counterCharacterOne + 1;
      } else if (stats1.speed < stats2.speed) {
        counterCharacterTwo = counterCharacterTwo + 1;
      }

      totalPowerOne += stats1.speed;
      totalPowerTwo += stats2.speed;

      if (stats1.strength > stats2.strength) {
        counterCharacterOne = counterCharacterOne + 1;
      } else if (stats1.strength < stats2.strength) {
        counterCharacterTwo = counterCharacterTwo + 1;
      }

      totalPowerOne += stats1.strength;
      totalPowerTwo += stats2.strength;

      setOneTotalPower(totalPowerOne);
      setTwoTotalPower(totalPowerTwo);

      console.log(counterCharacterOne, counterCharacterTwo);
      console.log(totalPowerOne, totalPowerTwo);

      let isDraw = false;
      let isOneDefeat = false;
      let isTwoDefeat = false;

      if (counterCharacterOne > counterCharacterTwo) {
        setTwoDefeat(true);
        isTwoDefeat = true;
      } else if (counterCharacterTwo === counterCharacterOne) {
        if (totalPowerOne > totalPowerTwo) {
          setTwoDefeat(true);
          isTwoDefeat = true;
        } else if (totalPowerOne === totalPowerTwo) {
          isDraw = true;
        } else {
          setOneDefeat(true);
          isOneDefeat = true;
        }
      } else {
        setOneDefeat(true);
        isOneDefeat = true;
      }

      return {
        isDraw,
        isOneDefeat,
        isTwoDefeat
      };
    }
  }

  function getResultLabels(isDraw: boolean | undefined, isOneDefeat: boolean | undefined, isTwoDefeat: boolean | undefined) {
    console.log(isOneDefeat, isTwoDefeat);
    if (isDraw === false) {
      if (isOneDefeat === true) {
        setResultOne('Defeat!')
      } else {
        setResultOne('Winner!')
      }

      if (isTwoDefeat === true) {
        setResultTwo('Defeat!')
      } else {
        setResultTwo('Winner!')
      }
    } else {
      setResultOne('Draw!');
      setResultTwo('Draw!')
    }
    setShowResultOne(true);
    setShowResultTwo(true);
  }

  function getLabelClass(result: string) {
    if (result === 'Winner!') {
      return 'win'
    } else if (result === 'Defeat!') {
      return 'defeat'
    } else {
      return 'draw'
    }
  }

  return (
    <Background background={background}>
      <Container>
        <HeroBattleModal
          isOpen={isHeroModalOpen}
          onRequestClose={handleCloseHeroModal}
          setCharacterOne={setCharacterOne}
          setCharacterTwo={setCharacterTwo}
          characterChoose={characterChoose}
        />
        <Header />
        <Main>
          <div className="title">
            <h1>HEROES</h1>
            <GiCrossedSwords />
            <h1>BATTLE</h1>
          </div>
          {startBattle !== true && (
            <Fighters>
              <div>
                <button onClick={() => { handleOpenHeroModal(); setCharacterChoose(1) }}>{characterOne ? characterOne.name : 'Choose character 1'}</button>
                {startBattle === false && <div className="character-placeholder">
                  {characterOne ? <img src={characterOne.images.sm} /> : <FaUserAlt />}
                </div>}
              </div>
              <div>
                <button onClick={() => { handleOpenHeroModal(); setCharacterChoose(2) }}>{characterTwo ? characterTwo.name : 'Choose character 2'}</button>
                {startBattle === false && <div className="character-placeholder">
                  {characterTwo ? <img src={characterTwo.images.sm} /> : <FaUserAlt />}
                </div>}
              </div>
            </Fighters>
          )}
          {startBattle &&
            <HeroBattle>
              <div className="sides">
                <div className="side fighter-one">
                  <h2 className="name">{characterOne && characterOne.name}</h2>
                  <Images>
                    <ImageDust image={characterOne && characterOne.images.sm} defeat={oneDefeat} />
                    {showResultOne && <span className={`result ${getLabelClass(resultOne)}`}>{resultOne}</span>}
                  </Images>
                  <div className="powerstats one">
                    <span id="psOne1" className="powerstat">
                      Combat: {characterOne && characterOne.powerstats.combat}
                      {(characterOne && characterTwo) && compareStats(characterOne.powerstats.combat, characterTwo.powerstats.combat, 1)}
                    </span>
                    <span id="psOne2" className="powerstat">
                      Durability: {characterOne && characterOne.powerstats.durability}
                      {(characterOne && characterTwo) && compareStats(characterOne.powerstats.durability, characterTwo.powerstats.durability, 1)}
                    </span>
                    <span id="psOne3" className="powerstat">
                      Intelligence: {characterOne && characterOne.powerstats.intelligence}
                      {(characterOne && characterTwo) && compareStats(characterOne.powerstats.intelligence, characterTwo.powerstats.intelligence, 1)}
                    </span>
                    <span id="psOne4" className="powerstat">
                      Power: {characterOne && characterOne.powerstats.power}
                      {(characterOne && characterTwo) && compareStats(characterOne.powerstats.power, characterTwo.powerstats.power, 1)}
                    </span>
                    <span id="psOne5" className="powerstat">
                      Speed: {characterOne && characterOne.powerstats.speed}
                      {(characterOne && characterTwo) && compareStats(characterOne.powerstats.speed, characterTwo.powerstats.speed, 1)}
                    </span>
                    <span id="psOne6" className="powerstat">
                      Strength: {characterOne && characterOne.powerstats.strength}
                      {(characterOne && characterTwo) && compareStats(characterOne.powerstats.strength, characterTwo.powerstats.strength, 1)}
                    </span>
                    <span id="psOne7" className="powerstat">
                      Total Power: {oneTotalPower}
                    </span>
                  </div>
                </div>
                <div className="versus">
                  <span>vs.</span>
                </div>
                <div className="side fighter-two">
                  <h2 className="name">{characterTwo && characterTwo.name}</h2>
                  <Images>
                    <ImageDust image={characterTwo && characterTwo.images.sm} defeat={twoDefeat} />
                    {showResultTwo && <span className={`result ${getLabelClass(resultTwo)}`}>{resultTwo}</span>}
                  </Images>
                  <div className="powerstats two">
                    <span id="psTwo1" className="powerstat">
                      Combat: {characterTwo && characterTwo.powerstats.combat}
                      {(characterOne && characterTwo) && compareStats(characterTwo.powerstats.combat, characterOne.powerstats.combat, 2)}
                    </span>
                    <span id="psTwo2" className="powerstat">
                      Durability: {characterTwo && characterTwo.powerstats.durability}
                      {(characterOne && characterTwo) && compareStats(characterTwo.powerstats.durability, characterOne.powerstats.durability, 2)}
                    </span>
                    <span id="psTwo3" className="powerstat">
                      Intelligence: {characterTwo && characterTwo.powerstats.intelligence}
                      {(characterOne && characterTwo) && compareStats(characterTwo.powerstats.intelligence, characterOne.powerstats.intelligence, 2)}
                    </span>
                    <span id="psTwo4" className="powerstat">
                      Power: {characterTwo && characterTwo.powerstats.power}
                      {(characterOne && characterTwo) && compareStats(characterTwo.powerstats.power, characterOne.powerstats.power, 2)}
                    </span>
                    <span id="psTwo5" className="powerstat">
                      Speed: {characterTwo && characterTwo.powerstats.speed}
                      {(characterOne && characterTwo) && compareStats(characterTwo.powerstats.speed, characterOne.powerstats.speed, 2)}
                    </span>
                    <span id="psTwo6" className="powerstat">
                      Strength: {characterTwo && characterTwo.powerstats.strength}
                      {(characterOne && characterTwo) && compareStats(characterTwo.powerstats.strength, characterOne.powerstats.strength, 2)}
                    </span>
                    <span id="psTwo7" className="powerstat">
                      Total Power: {twoTotalPower}
                    </span>
                  </div>
                </div>
              </div>
            </HeroBattle>
          }
          {startBattle === false && <button onClick={startCharacterBattle} className="button-start">START</button>}
        </Main>
      </Container>
    </Background>
  );
}

export default Battle;