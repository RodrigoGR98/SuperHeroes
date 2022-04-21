import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle, rgba(189, 9, 9, 0.9), rgba(0, 0, 0, 0.9));
`;

export const Main = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    margin-top: 2rem;
    display: flex;
    align-items: center;

    h1 {
      color: white;
      font-size: 3rem;
    }

    svg {
      color: #eb4034;
      margin: 0 0.5rem;
      font-size: 4rem;
    }
  }

  .button-start {
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.25rem;
    background: linear-gradient(315deg, rgba(255,243,42,1) 0%, rgba(255,206,0,1) 100%);
    font-size: 1.5rem;
    margin-top: 3rem;
  }
`

export const Fighters = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  place-content: space-evenly;

  .character-placeholder {
    width: 260px;
    height: 300px;
    background: linear-gradient(315deg, rgba(255,243,42,1) 0%, rgba(255,206,0,1) 100%);
    margin-top: 3rem;
    border-radius: 0.25rem;
    display: flex;
    place-content: center;
    align-items: center;

    svg {
      font-size: 8rem;
    }
  }

  button {
    padding: 1rem 2rem;
    width: 260px;
    border: none;
    border-radius: 0.25rem;
    background: linear-gradient(315deg, rgba(255,243,42,1) 0%, rgba(255,206,0,1) 100%);
    font-size: 1.5rem;
  }
`

export const HeroBattle = styled.div`
  height: 100%;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;

  .powerstats {
    display: flex;
    margin-bottom: 1.5rem;
    width: 100%;
    background: rgba(0,0,0,0.6);
    width: 220px;
    padding: 1rem;
    place-content: space-evenly;
    color: white;
    flex-direction: column;
    font-size: 18px;
    align-items: center;

    .win {
      margin-left: 0.5rem;
      color: #41d91e;
    }

    .draw {
      margin-left: 0.5rem;
      color: yellow;
    }

    .defeat {
      margin-left: 0.5rem;
      color: #f01111;
    }

    &.one {
      margin-top: 3rem;
    }

    &.two {
      margin-bottom: 3rem;
    }

    .powerstat {
      margin-bottom: 0.5rem;
      transition: all 1s;
      opacity: 0;
    }
  }

  .sides {
    animation: 0.7s curtain cubic-bezier(.86,0,.07,1) 0.4s both;
    display: grid;
    grid-template-columns: 400px 400px;
    position: relative;
    height: 680px;
    margin-top: 3rem;
  }

  .side {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.4rem;
    position: relative;
  }

  .fighter-one {
    background-color: #620609;
    color: rgba(255,209,0,1);
  }

  .fighter-two {
    background-color: rgba(255,209,0,1);
    color: #620609;
    flex-direction: column-reverse;
  }

  .name {
    margin: 0.3em;
  }

  .emoji {
    font-size: 1em;
  }

  .versus {
    position: absolute;
    width: 8vw;
    height: 8vw;
    background: #ffffff;
    border-radius: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.4vw;
    color: #620609;
    border-width: 10px;
    border-style: solid;
    border-color: rgba(255,209,0,1) #620609 #620609 rgba(255,209,0,1);
    transform: rotate(-45deg);
  }

  .versus span {
    transform: rotate(35deg);
  }

  @keyframes curtain {
    0% {
      grid-gap: 100vw; 
    }
    
    100% {
      grid-gap: 0;
    }
  }
`

export const Images = styled.div`
  height: 240px;
	position: relative;
	width: 160px;

  .result {
    position: absolute;
    font-size: 70px;
    z-index: 3;
    top: 30%;
    left: 0rem;

    &.win {
      color: #41d91e;
      left: -1rem;
    }

    &.draw {
      color: yellow;
    }

    &.defeat {
      color: #f01111;
      left: -1rem;
    }
  }
`
