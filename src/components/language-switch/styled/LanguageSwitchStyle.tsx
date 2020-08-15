import styled from 'styled-components';
import { colors } from '../../../constants/constants';

const LanguageSwitchStyle = styled('div')`
  position: absolute;
  right: 50px;
  top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${colors.mainPage.darkSideBackground};
  border-radius: 10px;
  width: 100px;
  height: 100px;

  & label {
    color: ${colors.mainPage.textColor};
  }

  & .language-swith__radios {
    display: flex;
    flex-direction: column;
  }

  & .language-swith__radio {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  }
`;

export default LanguageSwitchStyle;
