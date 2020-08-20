import React from 'react';
import { Progress, Tooltip } from 'antd';

import { getToolIconByName, getIconColorByName } from '../../utils/getters';
import { ISkill } from '../../interfaces/interfaces';

const Skill: React.FC<ISkill> = ({
  percentage, text,
}) => {
  const icon = getToolIconByName(text);

  return (
    <div className="about__skill">
      <Tooltip title={`${percentage}%`}>
        <Progress
          type="circle"
          className="skill__pie-chart"
          percent={percentage}
          strokeColor={getIconColorByName(text)}
          strokeWidth={10}
        />
      </Tooltip>
      <div className="skill__name">
        {text}
        <div className="skill__icon">
          {typeof icon === 'string'
            ? <img className="skill__icon-image" src={icon} alt={text} />
            : icon}
        </div>
      </div>
    </div>
  );
};

export default Skill;
