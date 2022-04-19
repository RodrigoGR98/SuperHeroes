import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  height: 315px;
  background: linear-gradient(342deg, rgba(36,0,12,1) 0%, rgba(121,9,9,1) 46%, rgba(255,209,0,1) 100%);
  display: flex;
  padding: 1rem;
  align-items: center;
  border-radius: 0.5rem;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  top: 0%;

  &:hover {
    background: #620609;
    top: -1%;
    box-shadow: 0 12px 24px -8px rgba(1,1,1,0.2), 0 4px 24px -8px rgba(1,1,1,0.25), 0 12px 6px -8px rgba(1,1,1,0.1);

    span {
      color: rgba(255,209,0,1);
    }
  }

  img {
    width: max-content;
    height: max-content;
    transition: all 0.2s;
  }

  span {
    margin-top: 0.5rem;
    color: #FFF;
    font-size: 1.2rem;
    transition: all 0.2s;
  }
`;
