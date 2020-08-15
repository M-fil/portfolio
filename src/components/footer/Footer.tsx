import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

import FooterStyle from './styled/FooterStyle';

const Footer: React.FC = () => {
  const [t] = useTranslation();

  return (
    <FooterStyle>
      <div className="footer__content">
        <div className="footer__offer-questoin">
          {t('footer.offer')}
        </div>
        <Button
          type="primary"
          icon={<i className="far fa-grin footer__icon"></i>}
        >
          {t('footer.button-confirm-text')}
        </Button>
      </div>
    </FooterStyle>
  )
}

export default Footer;
