import React, { useRef } from 'react';
import { IProjectObject } from '../../interfaces/interfaces';

import { CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import SliderStyle from './styled/SliderStyle';

interface ISwiper {
  project: IProjectObject;
};

const Slider: React.FC<ISwiper> = ({ project }) => {
  const sliderRef = useRef(null);
  return (
    <SliderStyle>
      <Carousel
        ref={sliderRef}
        autoplay
        infinite
        arrows
        prevArrow={<CaretLeftOutlined />}
        nextArrow={<CaretRightOutlined />}
      >
        {project.images.map((image) => {
          return <img src={image} />
        })}
      </Carousel>
    </SliderStyle>
  );
}

export default Slider;
