import React from 'react';

import { personalData, urls } from '../../constants/constants';

const {
  FULL_NAME,
} = personalData;

const {
  PERSON_IMAGE_1_URL,
} = urls;

const Main: React.FC = () => {
  return (
    <div className="main-page">
      <img src={PERSON_IMAGE_1_URL} alt={FULL_NAME as string} />
    </div>
  )
}

export default Main;
