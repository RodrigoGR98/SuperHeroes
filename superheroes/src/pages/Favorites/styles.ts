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
  place-content: center;

  h3 {
    color: khaki;
    margin-top: 5rem;
    font-size: 2rem;
  }

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
      margin-left: 0.5rem;
      font-size: 4rem;
    }
  }

  .heroes-list {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-bottom: 3rem;
  }
`
