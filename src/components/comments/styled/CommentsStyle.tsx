import styled from 'styled-components';
import { colors } from '../../../constants/constants';

const {
  arrowButtonColor,
} = colors.portfolio;

const CommentsStyle = styled('div')`
  margin: auto;
  left: 0;
  right: 0;
  position: absolute;
  width: 70%;

  & svg {
    font-size: 1.5rem;
    color: ${arrowButtonColor};
  }
`;

export default CommentsStyle;
