import React from 'react';

interface IVideo {
  width: string | number;
  height: string | number;
  src: string;
}

const Video: React.FC<IVideo> = ({
  width, height, src,
}) => (
  <iframe
    title={`video-${src}`}
    width={width}
    height={height}
    src={src}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);

export default Video;
