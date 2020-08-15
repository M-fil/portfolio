import React from 'react';
import { Button, Avatar, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';

import {
  getLinkIconByName,
  getToolIconByName,
} from '../../utils/getters';
import {
  IProjectObject,
  LinksKeyType,
  ITeammate,
} from '../../interfaces/interfaces';
import {
  getAllProjectCollaborators,
} from '../../service/service';
import { personalData, colors } from '../../constants/constants';
import useCallbackEffect from '../../custom-hooks/useCallbackEffect';
import BadgeStyle from './styled/BadgeStyle';

const {
  toolIconBackground,
  toolIconBorderColor,
} = colors.portfolio;

interface IBadge {
  project: IProjectObject;
}

const LinksBadges: React.FC<IBadge> = ({
  project,
}) => {
  const [t] = useTranslation();

  return (
    <BadgeStyle childrenCount={Object.values(project.links).length}>
      <div className="project__links project__badges">
        {Object.entries(project.links).map((link) => (
          <Button
            className="project__link"
            key={link[1]}
            type="default"
            href={link[1]}
            target="_blank"
            size="large"
          >
            {t(`portfolio.open-${link[0]}-text`)}
            {getLinkIconByName(link[0] as LinksKeyType)}
          </Button>
        ))}
      </div>
    </BadgeStyle>
  );
};

const ToolsBadges: React.FC<IBadge> = ({
  project,
}) => (
  <BadgeStyle childrenCount={Object.values(project.tools).length}>
    <div className="project__tools project__badges">
      <Avatar.Group>
        {project.tools.map((badge) => {
          const isNoIconInDB = badge === 'Redux' || badge === 'TypeScript';
          return (
            <Tooltip key={badge} title={badge} placement="top">
              <Avatar
                size={60}
                className="project__teammate project__badge"
                alt={badge}
                src={isNoIconInDB ? getToolIconByName(badge) as string : ''}
                icon={!isNoIconInDB && getToolIconByName(badge)}
                style={{
                    background: toolIconBackground,
                    border: `2px solid ${toolIconBorderColor}`,
                  }}
              />
            </Tooltip>
          );
        })}
      </Avatar.Group>
    </div>
  </BadgeStyle>
);

const TeammatesBadges: React.FC<IBadge> = ({
  project,
}) => {
  const allCollaborators = useCallbackEffect(
    [], getAllProjectCollaborators, ['rslang'],
  )?.data as ITeammate[];
  const personalGithub = allCollaborators && allCollaborators.find((person: ITeammate) => person.login === personalData.GITHUB_LOGIN) as ITeammate;
  const resultCollabs = project.isMoreThanOneCollaborator ? allCollaborators : [personalGithub];

  return (
    <BadgeStyle childrenCount={resultCollabs?.length || 0}>
      <Avatar.Group>
        {allCollaborators && allCollaborators.length
        && (
        <div className="project__teammates project__badges">
          {resultCollabs.map((teammate) => (
            <Tooltip key={teammate.id} title={teammate.login} placement="top">
              <a href={teammate.html_url} target="_blank">
                <Avatar
                  size={80}
                  className="project__teammate project__badge"
                  src={teammate.avatar_url}
                  alt={teammate.login}
                />
              </a>
            </Tooltip>
          ))}
        </div>
        )}
      </Avatar.Group>
    </BadgeStyle>
  );
};

export {
  LinksBadges,
  ToolsBadges,
  TeammatesBadges,
};
