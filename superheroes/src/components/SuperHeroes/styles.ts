import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Pagination = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2.5rem;
  display: flex;
  place-content: center;

  button {
    border: none;
    display: flex;
    align-items: center;
    place-content: center;
    border-radius: 50%;
    padding: 0.5rem;
    background-color: #c98600;

    &.left {
      margin-right: 1rem;
    }
    
    svg { 
      font-size: 30px;
      color: white;
    }
  }
`

export const Heroes = styled.div`
  padding: 2rem 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`
