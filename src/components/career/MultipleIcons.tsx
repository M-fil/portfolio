import React from 'react';

interface IMultipleIcons {
  icons: Array<any>,
}

const MultipleIcons: React.FC<IMultipleIcons> = ({
  icons,
}) => (
  <div className="steps__multiple-icons">
    {icons.map((icon) => icon)}
  </div>
);

export default MultipleIcons;
