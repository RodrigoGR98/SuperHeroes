import React, { useState } from 'react';
import InfinityGauntlet from 'react-thanos-snap';

import { Container } from './styles';

function ImageDust({ image, defeat }) {

  return (
    <Container>
      <InfinityGauntlet snap={defeat}>
        <img src={image} />
      </InfinityGauntlet>
    </Container>);
}

export default ImageDust;