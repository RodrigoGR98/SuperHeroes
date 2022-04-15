import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Img = styled.img`
  margin-right: 1rem;
  display: flex;
  z-index: 2;
  position: absolute;
`

export const PowerStats = styled.div`
  width: 320px;
  position: absolute;
  height: 125px;
  background: rgba(0,0,0,0.6);
  bottom: 1.5rem;
  display: flex;
  align-items: center;
  place-content: center;
  z-index: 3;

  .stats {
    &.first {
      margin-right: 1.2rem;
    }

    p {
      color: white;

      span {
        color: yellow;
      }
    }

    .low {
      color: #f01111;
    }

    .medium {
      color: yellow;
    }

    .high {
      color: #41d91e;
    }
  }
`

export const TextContent = styled.div`
  min-width: 300px;

  h3, h2, p, span {
    font-weight: bold;
    text-shadow: 2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black, 1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black;
    color: white;
  }

  h2, h3, p {
    color: khaki;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  p {
    max-width: 700px;
  }

  span {
    font-weight: normal;
  }
`

export const Loading = styled.div`
  position: relative;
  width: 320px;
  height: 110px;
  margin: auto;
  margin-right: 1rem;
  
  .item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid #fff;
    border-radius: 50%;
    border-top-color: transparent;
    border-bottom-color: transparent;
    animation: spin 2s ease infinite;
  }

  .item:nth-child(1) {
    width: 50px;
    height: 50px;
  }
  .item:nth-child(2) {
    width: 70px;
    height: 70px;
    animation-delay: 0.1s;
  }
  .item:nth-child(3) {
    width: 90px;
    height: 90px;
    animation-delay: 0.2s;
  }
  .item:nth-child(4) {
    width: 110px;
    height: 110px;
    animation-delay: 0.3s;
  }
  @keyframes spin {
    50% {
      transform: translate(-50%, -50%) rotate(180deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }
`
