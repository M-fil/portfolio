import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Avatar, Tooltip } from 'antd';

import ContactsStyle from './styled/ContactsStyle';
import { contactsLinks } from '../../constants/constants';

const { Title } = Typography;

const Contacts: React.FC = () => {
  const [t] = useTranslation();

  return (
    <ContactsStyle>
      <div className="contacts__title">
        <Title level={2}>
          {t('contacts.title')}
        </Title>
        <i className="far fa-comment contacts__title-icon" />
      </div>
      <Avatar.Group>
        {Object.entries(contactsLinks).map((contact) => (
          <Tooltip key={contact[0]} title={contact[1].name} placement="top">
            <a href={contact[1].link} target="_blank">
              <Avatar
                size={150}
                icon={<i className={contact[1].iconClassName} />}
                style={{ background: contact[1].color }}
              />
            </a>
          </Tooltip>
        ))}
      </Avatar.Group>
    </ContactsStyle>
  );
};

export default Contacts;
