import styled from 'styled-components';
import { colors } from '../../../constants/constants';

const {
  arrowButtonColor,
} = colors.portfolio;

const SliderStyle = styled('div')`
  & svg {
    font-size: 1.5rem;
    color: ${arrowButtonColor};
  }
`;

export default SliderStyle;
