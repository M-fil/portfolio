import React from 'react';

import { CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import { IProjectObject } from '../../interfaces/interfaces';
import SliderStyle from './styled/SliderStyle';

interface ISwiper {
  project: IProjectObject;
  extraElementAsSlide?: any;
  arrows?: boolean;
  [propName: string]: any;
}

const Slider: React.FC<ISwiper> = ({
  project,
  extraElementAsSlide,
  arrows = true,
  ...sliderProps
}) => (
  <SliderStyle>
    <Carousel
      infinite
      arrows={arrows}
      nextArrow={<CaretRightOutlined />}
      prevArrow={<CaretLeftOutlined />}
      {...sliderProps}
    >
      {extraElementAsSlide}
      {project.images.map((image) => <img key={image} src={image} alt={image} />)}
    </Carousel>
  </SliderStyle>
);

export default Slider;
