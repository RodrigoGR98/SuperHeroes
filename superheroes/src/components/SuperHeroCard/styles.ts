import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  height: 310px;
  background: rgb(36,0,12);
  background: linear-gradient(342deg, rgba(36,0,12,1) 0%, rgba(121,9,9,1) 46%, rgba(255,209,0,1) 100%);
  display: flex;
  padding: 1rem;
  align-items: center;
  border-radius: 0.5rem;
  flex-direction: column;

  img {
    width: max-content;
    height: max-content;
  }

  span {
    margin-top: 0.5rem;
    color: #FFF;
    font-size: 1.2rem;
  }
`;
