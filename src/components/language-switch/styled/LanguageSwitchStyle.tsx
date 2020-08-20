import styled from 'styled-components';
import locales from '../../../i18n/locales';
import { urls, numberConstants } from '../../../constants/constants';
import { LanguageType } from '../../../interfaces/interfaces';

const { ru, en } = locales;
const { RUSSIA_FLAG, ENGLAND_FLAG } = urls;
const { DEFAULT_SCALING } = numberConstants;

interface ILanguageSwitchStyle {
  language: LanguageType | string;
}

const LanguageSwitchStyle = styled('div')<ILanguageSwitchStyle>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  padding-right: 20px;
  margin-bottom: 50px;

  & button {
    background: url(${(props) => {
    switch (props.language) {
      case en:
        return ENGLAND_FLAG;
      case ru:
      default:
        return RUSSIA_FLAG;
    }
  }
});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transform: scale(${DEFAULT_SCALING});
  }
`;

export default LanguageSwitchStyle;
