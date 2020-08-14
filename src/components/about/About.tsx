import React from 'react';
import { useTranslation } from 'react-i18next';

import { calculateAge } from '../../utils/calculations';
import { skills, urls } from '../../constants/constants';
import SkillChart from './SkillChart';

const {
  JAVASCRIPT,
  HTML,
  CSS,
  SCSS,
  REACT,
  REDUX,
  TYPESCRIPT,
  TESTING_LIBRARIES,
  ENGLISH_LEVEL,
} = skills;

interface ISkill {
  percentage: number;
  name: string;
};

const Skill: React.FC<ISkill> = ({
  percentage, name,
}) => {
  return (
    <div className="about__skill">
      <div className="skill__name">
        {name}
      </div>
      <SkillChart percentage={percentage} />
    </div>
  );
} 

const About: React.StatelessComponent = () => {
  const [t] = useTranslation();

  return (
    <div className="about">
      <div className="about__person">
        <div className="about__name">{t('about.name')}</div>
        <div className="about__short-info">
          {`${calculateAge()} ${t('about.years')}, ${t('about.activity')}`}
        </div>
      </div>
      <div className="about__description">{t('about.description')}</div>
      <a href={urls.CV_LINK_URL} target="_blank">
        {t('about.cv-download-text')};
      </a>
      <div className="about__skills">
        <Skill name={JAVASCRIPT.text} percentage={JAVASCRIPT.percentage} />
        <Skill name={HTML.text} percentage={HTML.percentage} />
        <Skill name={CSS.text} percentage={CSS.percentage} />
        <Skill name={SCSS.text} percentage={SCSS.percentage} />
        <Skill name={REACT.text} percentage={REACT.percentage} />
        <Skill name={REDUX.text} percentage={REDUX.percentage} />
        <Skill name={TYPESCRIPT.text} percentage={TYPESCRIPT.percentage} />
        <Skill name={TESTING_LIBRARIES.text} percentage={TESTING_LIBRARIES.percentage} />
        <Skill name={ENGLISH_LEVEL.text} percentage={ENGLISH_LEVEL.percentage} />
      </div>
    </div>
  );
}

export default About
