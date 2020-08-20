import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import { calculateAge } from '../../utils/calculations';
import useStateCondition from '../../custom-hooks/useStateCondition';
import { urls } from '../../constants/constants';
import { getDataByURL } from '../../service/service';
import { ISkill } from '../../interfaces/interfaces';
import AboutStyle from './styled/AboutStyle';
import Skill from './Skill';
import useDataWithReducer from '../../custom-hooks/useDataWithReducer';

const Fade = require('react-reveal/Fade');

const About: React.FC = () => {
  const [t] = useTranslation();
  const { state: skillsState } = useDataWithReducer(
    getDataByURL.bind(null, urls.SKILLS_URL), 'skills',
  );
  const skillsData = useStateCondition(skillsState, (
    <>
      {skillsState.data && Object.entries(skillsState.data as { [propName: string]: ISkill })
        .map((skill) => (
          <Skill
            key={skill[0]}
            text={skill[1].text}
            percentage={skill[1].percentage}
          />
        ))}
    </>
  ));

  return (
    <AboutStyle>
      <Fade right>
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
      </Fade>
      <Fade left>
        <div className="about__description">{t('about.description')}</div>
      </Fade>
      <Fade left>
        <div className="about__skills">
          {skillsData}
        </div>
      </Fade>
    </AboutStyle>
  );
};

export default About;
