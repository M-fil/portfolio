import React from 'react';
import { Steps } from 'antd';
import { useTranslation } from 'react-i18next';

import CareerStyle from './styled/CareerStyle';
import { urls, icons } from '../../constants/constants';
import MultipleIcons from './MultipleIcons';

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
          icon={(
            <MultipleIcons icons={[
              { element: 'i', className: 'fab fa-php' },
            ]}
            />
          )}
        />
        <Steps.Step
          title={t('career.steps.js-self-education.title')}
          subTitle={t('career.steps.js-self-education.period')}
          description={t('career.steps.js-self-education.description')}
          icon={(
            <MultipleIcons icons={[
              { element: 'i', className: 'fab fa-js' },
              { element: 'i', className: 'fab fa-react' },
              { element: 'img', className: 'steps__svg-icon', src: icons.REDUX },
            ]}
            />
          )}
          status="finish"
        />
        <Steps.Step
          title={t('career.steps.rs-js-single-projects.title')}
          subTitle={t('career.steps.rs-js-single-projects.period')}
          description={t('career.steps.rs-js-single-projects.description')}
          status="finish"
          icon={(
            <MultipleIcons icons={[
              { element: 'img', className: 'steps__logo', src: urls.RS_LOGO },
            ]}
            />
          )}
        />
        <Steps.Step
          title={t('career.steps.rs-js-team-projects.title')}
          subTitle={t('career.steps.rs-js-team-projects.period')}
          description={t('career.steps.rs-js-team-projects.description')}
          status="finish"
          icon={(
            <MultipleIcons icons={[
              { element: 'img', className: 'steps__logo', src: urls.RS_LOGO },
            ]}
            />
          )}
        />
        <Steps.Step
          title={t('career.steps.epam-fail.title')}
          subTitle={t('career.steps.epam-fail.period')}
          description={t('career.steps.epam-fail.description')}
          status="finish"
          icon={(
            <MultipleIcons icons={[
              { element: 'img', className: 'steps__logo', src: urls.EPAM_LOGO },
            ]}
            />
          )}
        />
        <Steps.Step
          title={t('career.steps.rs-react.title')}
          subTitle={t('career.steps.rs-react.period')}
          description={t('career.steps.rs-react.description')}
          status="finish"
          icon={(
            <MultipleIcons icons={[
              { element: 'i', className: 'fab fa-react' },
              { element: 'img', className: 'steps__logo steps__second-logo', src: urls.RS_LOGO },
            ]}
            />
          )}
        />
      </Steps>
    </CareerStyle>
  );
};

export default Career;
