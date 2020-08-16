import styled from 'styled-components';
import { colors } from '../../../constants/constants';

const LanguageSwitchStyle = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  padding-right: 20px;
  margin-bottom: 50px;

  & button {
    transform: scale(1.5);
  }
`;

export default LanguageSwitchStyle;
