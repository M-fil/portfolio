import styled from 'styled-components';
import { skillChartConstants } from '../../../constants/constants';

const {
  BORDER_WIDTH,
  DEFAULT_BORDER_COLOR,
  DEFAULT_INNER_COLOR,
} = skillChartConstants;

interface ISkillChartItem {
  chartLineColor?: string;
  innerBackground?: string;
  percentage: number;
}

const SkillChartItem = styled('div')<ISkillChartItem>`
  width: 50px;
  height: 50px;
  margin: 1em auto;
  border-radius: 50%;
  background-image: ${
    (props) => `conic-gradient(
      ${props.chartLineColor || DEFAULT_BORDER_COLOR} ${props.percentage}%,
      ${props.innerBackground || DEFAULT_INNER_COLOR} ${props.percentage}%
    )`
  };
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - ${BORDER_WIDTH});
    height: calc(100% - ${BORDER_WIDTH});
    background: white;
    border-radius: inherit;
  }

  & .skill-chart__percentage {
    position: relative;
    z-index: 1;
    font-size: 2em;
  }
`;

export default SkillChartItem;
