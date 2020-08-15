import React from 'react';

import { personalData, urls } from '../../constants/constants';
import MainStyle from './styled/MainStyle';

const {
  FULL_NAME,
} = personalData;

const {
  PERSON_IMAGE_1_URL,
} = urls;

const Main: React.FC = () => (
  <MainStyle>
    <img
      id="person-image"
      src={PERSON_IMAGE_1_URL}
      alt={FULL_NAME as string}
    />
  </MainStyle>
);

export default Main;
