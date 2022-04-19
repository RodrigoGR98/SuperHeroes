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