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
    getHeroes();
  }, [])

  function getHeroes(start = 0, end = 20) {
    var newHeroes: Hero[] = heroesAPI.slice(start, end);
    setHeroes(newHeroes);
  }

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

  return (
    <HeroesContext.Provider value={{ heroes, nextPage, previousPage, start }}>
      {children}
    </HeroesContext.Provider >
  )
}