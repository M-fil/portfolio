import React from 'react';
import SkillChartItem from './styled/SkillChartStyle';

interface ISKillChart {
  percentage: number,
}

const SkillChart: React.FC<ISKillChart> = ({
  percentage,
}) => {
  return (
    <SkillChartItem
      percentage={percentage}
    >
      <p className="skill-chart__percentage">
        {percentage}
      </p>
    </SkillChartItem>
  )
}

export default SkillChart
