import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

import FooterStyle from './styled/FooterStyle';
import useNotification from '../../custom-hooks/useNotification';

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
        <div className="footer__offer-questoin">
          {t('footer.offer')}
        </div>
        <Button
          type="primary"
          icon={<i className="far fa-grin footer__icon"></i>}
          onClick={openNotification}
          disabled={isConfimButtonDisabled}
        >
          {t('footer.button-confirm-text')}
        </Button>
      </div>
    </FooterStyle>
  )
}

export default Footer;
