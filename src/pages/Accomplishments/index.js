import React from 'react';
import ContainerBox from '../../component/ContainerBox';
import { accomplishments } from '../webData';

const Accomplishments = () => (
  <ContainerBox
    pageKey={accomplishments.key}
  >
    <p>pending</p>
  </ContainerBox>
);

export default Accomplishments;
