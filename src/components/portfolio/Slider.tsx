import React, { useRef } from 'react';

import { CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import { IProjectObject } from '../../interfaces/interfaces';
import SliderStyle from './styled/SliderStyle';

interface ISwiper {
  project: IProjectObject;
  arrows?: boolean;
  [propName: string]: any;
}

const Slider: React.FC<ISwiper> = ({
  project,
  arrows = true,
  ...sliderProps
}) => (
  <SliderStyle>
    <Carousel
      infinite
      arrows={arrows}
      prevArrow={<CaretLeftOutlined />}
      nextArrow={<CaretRightOutlined />}
      {...sliderProps}
    >
      {project.images.map((image) => <img key={image} src={image} alt={image} />)}
    </Carousel>
  </SliderStyle>
);

export default Slider;
