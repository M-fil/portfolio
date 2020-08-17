import styled from 'styled-components';
import { colors } from '../../../constants/constants';

const {
  arrowButtonColor,
} = colors.portfolio;

const SliderStyle = styled('div')`
  margin-bottom: 30px;

  & .slick-dots {
    margin: 0;
  }

  & svg {
    font-size: 1.5rem;
    color: ${arrowButtonColor};
  }

  & .slick-dots {
    background: ${colors.mainPage.darkSideBackground};
    height: 20px;
    bottom: -20px;
    padding: 5px 0;
  }
`;

export default SliderStyle;
