import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

import FooterStyle from './styled/FooterStyle';
import useNotification from '../../custom-hooks/useNotification';

const Fade = require('react-reveal/Fade');
const withReveal = require('react-reveal/withReveal');

const Footer: React.FC = () => {
  const [t] = useTranslation();
  const {
    openNotification,
    isConfimButtonDisabled,
  } = useNotification(
    t('pop-up-offer.title'),
    t('pop-up-offer.description'),
    t('pop-up-offer.button-confirm-text'),
  );

  return (
    <FooterStyle>
      <div className="footer__content">
        <Button
          type="primary"
          icon={<i className="far fa-grin footer__icon" />}
          onClick={openNotification}
          disabled={isConfimButtonDisabled}
        >
          {t('footer.button-confirm-text')}
        </Button>
        <div className="footer__offer-questoin">
          {t('footer.offer')}
        </div>
      </div>
    </FooterStyle>
  );
};

export default withReveal(Footer, <Fade right />);
