import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background-color: rgba(184, 12, 0, 0.4);
  padding: 1.5rem 5rem;
  margin: 0 auto;
  display: flex;
  place-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  place-content: space-between;

  img { 
    width: 350px;
  
    &:hover {
      cursor: pointer;
    }
  }

  .buttons-header{
    a {
      margin-left: 1.5rem;
      font-size: 1.3rem;
      color: #FFCE00;
      padding: 1.5rem;
      text-decoration: none;
      transition: all 0.3s;

      &:hover {
        background-color: #FFCE00;
        color: black;
      }
    }
  }
`
