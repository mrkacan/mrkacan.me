import React from 'react';
import ContainerBox from '../../component/ContainerBox';
import { licenses } from '../webData';

const Licenses = () => (
  <ContainerBox
    pageKey={licenses.key}
  >
    <p>pending</p>
  </ContainerBox>
);

export default Licenses;
