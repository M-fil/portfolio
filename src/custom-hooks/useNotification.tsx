import React, { useState } from 'react';
import { Button, notification } from 'antd';

import OfferPopUpStyle from '../components/offer-pop-up/styled/OfferPopUpStyle';
import { urls } from '../constants/constants';

const {
  PERSONAL_TELEGRAM_LINK,
} = urls;

type NotificationElementType = string | HTMLElement;

interface IUseNotificatoin {
  (
    title: NotificationElementType,
    description: NotificationElementType,
    buttonText: string,
    iconClassName?: string,
  ): {
    openNotification: () => void,
    isConfimButtonDisabled: boolean,
    setIsConfimButtonDisabled: Function,
  };
}

const useNotification: IUseNotificatoin = (
  title,
  description,
  buttonText,
  iconClassName = 'fab fa-telegram-plane',
) => {
  const [isConfimButtonDisabled, setIsConfimButtonDisabled] = useState<boolean>(false);

  const openNotification = (): void => {
    setIsConfimButtonDisabled(true);
    notification.open({
      message: title,
      description: (<OfferPopUpStyle>
        <div className="offer-pop-up__description">
          {description}
        </div>
        <Button
          className="offer-pop-up__confirm-button"
          type="primary"
          ghost
          href={PERSONAL_TELEGRAM_LINK}
          icon={<i className={`${iconClassName} offer-pop-up__icon`} />}
          target="_blank"
        >
          {buttonText}
        </Button>
      </OfferPopUpStyle>),
      className: 'offer-pop-up',
      duration: null,
      onClose: () => {
        setIsConfimButtonDisabled(false);
      },
    });
  };

  return {
    openNotification,
    isConfimButtonDisabled,
    setIsConfimButtonDisabled,
  };
};

export default useNotification;
