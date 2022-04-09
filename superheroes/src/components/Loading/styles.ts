import styled from 'styled-components';

export const Container = styled.div`
  margin: 15rem;

  h1 {
    color: white;
  }

  .dots {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dot {
    width: 25px;
    height: 25px;
    background-color: white;
    margin-left: 5px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    margin-top: calc(50px - 12.5px);
    animation-name: loading;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  .load-two {
    animation-delay: 0.4s;
}
.load-three {
    animation-delay: 0.8s;
}
@keyframes loading {
    to {
        opacity: 0.3;
        transform: translateY(-25px);
        -webkit-transform: translateY(-25px);
        -moz-transform: translateY(-25px);
        -ms-transform: translateY(-25px);
        -o-transform: translateY(-25px);
}

}
`;
