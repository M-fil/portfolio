import React from 'react';
import { Avatar, Tooltip } from 'antd';

import { IContactLink } from '../../interfaces/interfaces';
import { getBoolArrayWithOneTrueValue } from '../../utils/getters';
import { numberConstants } from '../../constants/constants';

const Fade = require('react-reveal/Fade');

interface IContact {
  contact: IContactLink;
}

const Contact: React.FC<IContact> = ({
  contact,
}) => {
  const boolArray: boolean[] = getBoolArrayWithOneTrueValue();
  return (
    <Fade
      left={boolArray[0]}
      rigth={boolArray[1]}
      top={boolArray[2]}
      bottom={boolArray[3]}
    >
      <Tooltip title={contact.name} placement="top">
        <a href={contact.link} target="_blank">
          <Avatar
            size={numberConstants.CONTACT_BLOCK_SIZE}
            className="contacts__link"
            icon={<i className={contact.iconClassName} />}
            style={{ background: contact.color }}
          />
        </a>
      </Tooltip>
    </Fade>
  );
};

export default Contact;
