import React, { useEffect, useState, useContext } from 'react';
import { HeroesContext } from '../../heroesContext';
import SuperHeroCard from '../SuperHeroCard';
import Loading from '../Loading';

import { Container, Pagination, Heroes } from './styles';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const SuperHeroes: React.FC = () => {
  const { heroes, nextPage, previousPage, start } = useContext(HeroesContext);

  const [loading, setLoading] = useState(false);

  //Essa função é responsável por dar um tempo de 2 segundos para as imagens renderizarem a cada troca de página
  function changePage(method: string) {
    if (method === 'previous') {
      previousPage();
    } else {
      nextPage();
    }
    setLoading(true);
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <Container>
      {loading ? <Loading /> :
        <Heroes>
          {heroes.map(hero => (
            <SuperHeroCard key={hero.id} hero={hero} />
          ))}
        </Heroes>
      }
      <Pagination>
        <button type="button" className="left" onClick={() => changePage('previous')} disabled={start === 0}><MdNavigateBefore /></button>
        <button type="button" onClick={() => changePage('next')} disabled={start === 560}><MdNavigateNext /></button>
      </Pagination>
    </Container>
  );
}

export default SuperHeroes;