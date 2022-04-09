export interface PowerStats {
  intelligence: number,
  strength: number,
  speed: number,
  durability: number,
  power: number,
  combat: number
}

export interface Biography {
  aliases: string[],
  alignment: string,
  alterEgos: string,
  firstAppearance: string,
  fullName: string,
  publisher: string | null,
  placeOfBirth: string,
}

export interface Appearance {
  eyeColor: string,
  gender: string,
  hairColor: string,
  race: string | null,
  height: string[],
  weight: string[]
}

export interface Connections {
  groupAffiliation: string,
  relatives: string
}

export interface ImageProps {
  lg?: string,
  md?: string,
  sm?: string,
  xs?: string
}

export interface Work {
  base: string,
  occupation: string
}