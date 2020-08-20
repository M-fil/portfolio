import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Avatar } from 'antd';

import ContactsStyle from './styled/ContactsStyle';
import { urls, numberConstants } from '../../constants/constants';
import { IContactLink, TitleLevelType } from '../../interfaces/interfaces';
import { getDataByURL } from '../../service/service';
import Contact from './Contact';
import useDataWithReducer from '../../custom-hooks/useDataWithReducer';
import useStateCondition from '../../custom-hooks/useStateCondition';

const { Title } = Typography;
const { CONTACT_TITLE_LEVEL } = numberConstants;

const Contacts: React.FC = () => {
  const [t] = useTranslation();
  const { state: contactsState } = useDataWithReducer(
    getDataByURL.bind(null, urls.CONTACTS_URL), 'contacts',
  );
  const contactsData = useStateCondition(contactsState, (
    contactsState.data && Object
      .entries(contactsState.data as { [propName: string]: IContactLink })
      .map((contact) => (
        <Contact key={contact[0]} contact={contact[1]} />
      ))
  ));

  return (
    <ContactsStyle>
      <div className="contacts__title">
        <Title level={CONTACT_TITLE_LEVEL as TitleLevelType}>
          {t('contacts.title')}
          <i className="far fa-comment contacts__title-icon" />
        </Title>
      </div>
      <Avatar.Group className="constacts__links">
        {contactsData}
      </Avatar.Group>
    </ContactsStyle>
  );
};

export default Contacts;
