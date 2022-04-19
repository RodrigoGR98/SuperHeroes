import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Hero } from '../../heroesContext';
import SuperHeroCard from '../../components/SuperHeroCard';

import background from '../../assets/background.jpg';
import { AiFillHeart } from "react-icons/ai";

import { Container, Main } from './styles';
import { Background } from '../../components/Background/styles';

const Favorites: React.FC = () => {
  const [favoriteHeroes, setFavoriteHeroes] = useState<Hero[]>([])

  useEffect(() => {
    var storedHeroes = JSON.parse(localStorage.getItem("favoriteHeroes") || '{}');
    console.log(storedHeroes);
    setFavoriteHeroes(storedHeroes);
  }, [])

  return (
    <Background background={background}>
      <Container>
        <Header />
        <Main>
          <div className="title">
            <h1>FAVORITES</h1>
            <AiFillHeart />
          </div>
          {favoriteHeroes.length > 0 ?
            <div className="heroes-list">
              {favoriteHeroes.map(hero => (
                <SuperHeroCard key={hero.id} hero={hero} />
              ))}
            </div>
            : <h3>No characters found</h3>}
        </Main>
      </Container>
    </Background>
  );
}

export default Favorites;