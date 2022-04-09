import styled, { css } from 'styled-components';

interface BackgroundProps {
  background: string
}

export const Background = styled.div<BackgroundProps>`
  ${({ background }) => css`
    background-image: url(${background});
  `};
  background-position: right;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle, rgba(189, 9, 9, 0.9), rgba(0, 0, 0, 0.9));
`

export const Main = styled.main`
  max-width: 1120px;
  margin: 0 auto;
`
