import React from 'react';
import { Spin } from 'antd';

import PreloaderStyle from './styled/PreloaderStyle';

interface IPreloader {
  extraClassName?: string;
}

const Preloader: React.FC<IPreloader> = ({
  extraClassName,
}) => (
  <PreloaderStyle>
    <div
      className={`preloader${extraClassName ? ` ${extraClassName}` : ''}`}
    >
      <Spin size="large" />
    </div>
  </PreloaderStyle>
);

export default Preloader;
