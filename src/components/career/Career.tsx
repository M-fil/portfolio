import React from 'react';
import { Steps } from 'antd';
import { useTranslation } from 'react-i18next';

import CareerStyle from './styled/CareerStyle';

const Career: React.FC = () => {
  const [t] = useTranslation();

  return (
    <CareerStyle>
      <Steps
        direction="vertical"
        current={5}
        status="wait"
      >
        <Steps.Step
          title={t(`career.steps.php.title`)}
          subTitle={t(`career.steps.php.period`)}
          description={t(`career.steps.php.description`)}
          status="error"
        />
        <Steps.Step
          title={t(`career.steps.js-self-education.title`)}
          subTitle={t(`career.steps.js-self-education.period`)}
          description={t(`career.steps.js-self-education.description`)}
        />
        <Steps.Step
          title={t(`career.steps.rs-js-single-projects.title`)}
          subTitle={t(`career.steps.rs-js-single-projects.period`)}
          description={t(`career.steps.rs-js-single-projects.description`)}
        />
        <Steps.Step
          title={t(`career.steps.rs-js-team-projects.title`)}
          subTitle={t(`career.steps.rs-js-team-projects.period`)}
          description={t(`career.steps.rs-js-team-projects.description`)}
        />
        <Steps.Step
          title={t(`career.steps.epam-fail.title`)}
          subTitle={t(`career.steps.epam-fail.period`)}
          description={t(`career.steps.epam-fail.description`)}
          status="error"
        />
        <Steps.Step
          title={t(`career.steps.rs-react.title`)}
          subTitle={t(`career.steps.rs-react.period`)}
          description={t(`career.steps.rs-react.description`)}
        />
      </Steps>
    </CareerStyle>
  );
};

export default Career;
