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
  margin: 2.5rem 0;
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
  display: flex;
  flex-direction: column;

  .heroes-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  .search-input {
    place-self: end;
    width: 300px;
    height: 40px;
    padding: 0.5rem 0.8rem;
    margin: 2rem 0;
    font-size: 1.2rem;
    border: none;
    border-radius: 0.3rem;
    background: white;
    color: red;

    ::placeholder { 
      color: red;
      opacity: 1; 
    }
  }
`
