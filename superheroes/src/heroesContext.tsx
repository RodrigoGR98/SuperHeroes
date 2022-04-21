import { createContext, ReactNode, useEffect, useState } from "react";
import heroesAPI from './heroesAPI.json';

import { PowerStats, Biography, Appearance, ImageProps, Work, Connections } from './types';

export interface Hero {
  id: number,
  name: string,
  powerstats: PowerStats,
  connections: Connections,
  work: Work,
  images: ImageProps,
  biography: Biography,
  appearance: Appearance
}

interface HeroesProviderProps {
  children: ReactNode
}

interface HeroesContextData {
  heroes: Hero[];
  getPreviousArray: () => void;
  searchHero: (search: string) => void;
  nextPage: () => void;
  previousPage: () => void;
  start: number
}

export const HeroesContext = createContext<HeroesContextData>({} as HeroesContextData);

export function HeroesProvider({ children }: HeroesProviderProps) {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(20);

  useEffect(() => {
    getHeroes(start, end);
  }, [])

  function getHeroes(start: number, end: number) {
    var newHeroes: Hero[] = heroesAPI.slice(start, end);
    setHeroes(newHeroes);
  }

  function getPreviousArray() {
    getHeroes(start, end);
  }

  //Função responsável por pegar o array da página atual caso o usuário apague o campo de pesquisa de personagens
  function nextPage() {
    getHeroes(start + 20, end + 20);
    setStart(oldProps => oldProps + 20);
    setEnd(oldProps => oldProps + 20);
  }

  function previousPage() {
    if (start !== 0) {
      getHeroes(start - 20, end - 20);
      setStart(oldProps => oldProps - 20);
      setEnd(oldProps => oldProps - 20);
    }
  }

  function searchHero(search: string) {
    var heroesArray = heroesAPI.filter(hero => hero.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    setHeroes(heroesArray);
  }

  return (
    <HeroesContext.Provider value={{ heroes, getPreviousArray, searchHero, nextPage, previousPage, start }}>
      {children}
    </HeroesContext.Provider >
  )
}