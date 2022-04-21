import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const HeroList = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-right: 0;
  transition: all 0.2s;
  cursor: pointer;

  img { 
    width: 80px;
    margin-right: 2rem;
  }

  span {
    font-size: 3rem;
    font-family: 'Anton',sans-serif;

  }

  &:hover {
    background-color: rgba(255,206,0,1);

    span { 
      color: #FFF;
    }
  }
`
