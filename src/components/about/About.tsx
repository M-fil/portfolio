import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import { calculateAge } from '../../utils/calculations';
import { skills, urls } from '../../constants/constants';
import AppStyle from './styled/AboutStyle';
import Skill from './Skill';


const About: React.StatelessComponent = () => {
  const [t] = useTranslation();

  return (
    <AppStyle>
      <div className="about__person">
        <h2 className="about__name">
          <span className="about__name-text">
            {t('about.name')}
          </span>
          <Button
            htmlType="button"
            className="about__download-button"
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            href={urls.CV_LINK_URL}
            target="_blank"
          >
            {t('about.cv-download-text')}
          </Button>
        </h2>
        <div className="about__short-info">
          {`${calculateAge()} ${t('about.years')}, ${t('about.activity')}`}
        </div>
      </div>
      <div className="about__description">{t('about.description')}</div>
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
