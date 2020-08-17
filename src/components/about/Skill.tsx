import React from 'react';
import { Progress, Tooltip } from 'antd';

import { getToolIconByName, getIconColorByName } from '../../utils/getters';
import { ToolType } from '../../interfaces/interfaces';

interface ISkill {
  percentage: number;
  name: ToolType;
}

const Skill: React.FC<ISkill> = ({
  percentage, name,
}) => {
  const icon = getToolIconByName(name);

  return (
    <div className="about__skill">
      <Tooltip title={`${percentage}%`}>
        <Progress
          type="circle"
          percent={percentage}
          width={100}
          strokeColor={getIconColorByName(name)}
          strokeWidth={10}
        />
      </Tooltip>
      <div className="skill__name">
        {name}
        <div className="skill__icon">
          {typeof icon === 'string'
            ? <img className="skill__icon-image" src={icon} alt={name} />
            : icon}
        </div>
      </div>
    </div>
  );
};

export default Skill;
