import React from 'react';

type IconHTMLType = 'i' | 'img';
interface IMultipleIcons {
  icons: Array<{
    element: IconHTMLType,
    className: string,
    src?: string,
  }>
}

const MultipleIcons: React.FC<IMultipleIcons> = ({
  icons,
}) => (
  <div className="steps__multiple-icons">
    {icons.map((icon) => {
      switch (icon.element) {
        case 'i':
        default:
          return (<i key={icon.src} className={icon.className} />);
        case 'img':
          return (
            <img
              key={icon.src}
              className={icon.className}
              src={icon.src}
              alt={icon.src}
            />
          );
      }
    })}
  </div>
);

export default MultipleIcons;
