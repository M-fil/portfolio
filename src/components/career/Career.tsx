import React from 'react';
import { Steps } from 'antd';
import { useTranslation } from 'react-i18next';

import CareerStyle from './styled/CareerStyle';
import { urls, icons } from '../../constants/constants';
import MultipleIcons from './MultipleIcons';
import {
  PHPIcon,
  JSIcon,
  ReactIcon,
  ImageIcon,
} from '../icons/Icons';

const Slide = require('react-reveal/Slide');
const withReveal = require('react-reveal/withReveal');

const Career: React.FC = () => {
  const [t] = useTranslation();

  return (
    <CareerStyle>
      <Steps
        direction="vertical"
        status="wait"
      >
        <Steps.Step
          title={t('career.steps.php.title')}
          subTitle={t('career.steps.php.period')}
          description={t('career.steps.php.description')}
          status="finish"
          icon={<PHPIcon />}
        />
        <Steps.Step
          title={t('career.steps.js-self-education.title')}
          subTitle={t('career.steps.js-self-education.period')}
          description={t('career.steps.js-self-education.description')}
          icon={(
            <MultipleIcons
              icons={[<JSIcon />, <ReactIcon />, <ImageIcon src={icons.REDUX} classes={['steps__svg-icon']} />]}
            />
          )}
          status="finish"
        />
        <Steps.Step
          title={t('career.steps.rs-js-single-projects.title')}
          subTitle={t('career.steps.rs-js-single-projects.period')}
          description={t('career.steps.rs-js-single-projects.description')}
          status="finish"
          icon={<ImageIcon src={urls.RS_LOGO} classes={['steps__logo']} />}
        />
        <Steps.Step
          title={t('career.steps.rs-js-team-projects.title')}
          subTitle={t('career.steps.rs-js-team-projects.period')}
          description={t('career.steps.rs-js-team-projects.description')}
          status="finish"
          icon={<ImageIcon src={urls.RS_LOGO} classes={['steps__logo']} />}
        />
        <Steps.Step
          title={t('career.steps.epam-fail.title')}
          subTitle={t('career.steps.epam-fail.period')}
          description={t('career.steps.epam-fail.description')}
          status="finish"
          icon={<ImageIcon src={urls.EPAM_LOGO} classes={['steps__logo']} />}
        />
        <Steps.Step
          title={t('career.steps.rs-react.title')}
          subTitle={t('career.steps.rs-react.period')}
          description={t('career.steps.rs-react.description')}
          status="finish"
          icon={(
            <MultipleIcons icons={[
              <ReactIcon />,
              <ImageIcon src={urls.RS_LOGO} classes={['steps__logo', 'steps__second-logo']} />,
            ]}
            />
          )}
        />
      </Steps>
    </CareerStyle>
  );
};

export default withReveal(Career, <Slide left />);
