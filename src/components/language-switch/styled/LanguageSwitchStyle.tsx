import styled from 'styled-components';
import locales from '../../../i18n/locales';
import { urls } from '../../../constants/constants';
import { LanguageType } from '../../../interfaces/interfaces';

const { ru, en } = locales;
const { RUSSIA_FLAG, ENGLAND_FLAG } = urls;

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
    background: url(${(props) => props.language === en
      ? ENGLAND_FLAG
      : props.language === ru
      ? RUSSIA_FLAG
      : RUSSIA_FLAG
    });
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transform: scale(1.5);
  }
`;

export default LanguageSwitchStyle;
