import React from 'react';
import { useTranslation } from 'react-i18next';
import { Progress, Tooltip, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import { calculateAge } from '../../utils/calculations';
import { skills, urls, colors } from '../../constants/constants';
import AppStyle from './styled/AboutStyle';

const { about } = colors

interface ISkill {
  percentage: number;
  name: string;
}

const Skill: React.FC<ISkill> = ({
  percentage, name,
}) => (
  <div className="about__skill">
    <Tooltip title={`${percentage}%`}>
      <Progress
        type="circle"
        percent={percentage}
        width={100}
        strokeColor={about.pieChartColor}
        strokeWidth={10}
      />
    </Tooltip>
    <div className="skill__name">
      {name}
    </div>
  </div>
);

const About: React.StatelessComponent = () => {
  const [t] = useTranslation();

  return (
    <AppStyle>
      <div className="about__person">
        <h2 className="about__name">{t('about.name')}</h2>
        <div className="about__short-info">
          {`${calculateAge()} ${t('about.years')}, ${t('about.activity')}`}
        </div>
      </div>
      <div className="about__description">{t('about.description')}</div>
      <div className="about__download-container">
        <Button
          className="about__download-button"
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          href={urls.CV_LINK_URL}
          target="_blank"
        >
          {t('about.cv-download-text')}
        </Button>
      </div>
      <div className="about__skills">
        {Object.entries(skills)
          .map((skill) => (
            <Skill
              key={skill[0]}
              name={skill[1].text}
              percentage={skill[1].percentage}
            />
          ))}
      </div>
    </AppStyle>
  );
};

export default About;
