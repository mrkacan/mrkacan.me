import React from 'react';
import ContainerBox from '../../component/ContainerBox';
import { cv } from '../webData';

const Cv = () => (
  <ContainerBox
    pageKey={cv.key}
  >
    <p>Test</p>
  </ContainerBox>
);

export default Cv;
