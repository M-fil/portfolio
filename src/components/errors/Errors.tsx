import React from 'react';
import {
  Avatar, Tooltip, Card, Typography,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { numberConstants } from '../../constants/constants';
import { TitleLevelType } from '../../interfaces/interfaces';

const { DEFAULT_AVATAR_SIZE, ERROR_TITLE_LEVEL } = numberConstants;
const { Title } = Typography;

const DefaultErrorBlock: React.FC<{
  message?: string;
}> = ({ message }) => {
  const [t] = useTranslation();

  return (
    <Title type="danger" level={ERROR_TITLE_LEVEL as TitleLevelType}>
      {message || t('errors.default')}
    </Title>
  );
};

const AvatarLoadError: React.FC = () => {
  const [t] = useTranslation();

  return (
    <Tooltip title={t('errors.avatar')} placement="top">
      <Avatar size={DEFAULT_AVATAR_SIZE} icon={<UserOutlined />} />
    </Tooltip>
  );
};

export {
  AvatarLoadError,
  DefaultErrorBlock,
};
