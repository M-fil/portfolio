import React from 'react';
import { Badge, Avatar, Tooltip } from 'antd';

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
  linkIconBackground,
} = colors.portfolio;

interface IBadge {
  project: IProjectObject;
}

const LinksBadges: React.FC<IBadge> = ({
  project,
}) => {
  return (
    <BadgeStyle childrenCount={Object.values(project.links).length}>
      <div className="project__links project__badges">
        <Avatar.Group>
          {Object.entries(project.links).map((link) => (
            <Tooltip key={link[1]} title={link[0]} placement="top">
              <a href={link[1]} target="_blank">
                <Avatar
                  size={50}
                  style={{ background: linkIconBackground }}
                  icon={getLinkIconByName(link[0] as LinksKeyType)}
                />
              </a>
            </Tooltip>
          ))}
        </Avatar.Group>
      </div>
    </BadgeStyle>
  );
};

const ToolsBadges: React.FC<IBadge> = ({
  project,
}) => {
  return (
    <BadgeStyle childrenCount={Object.values(project.tools).length}>
      <div className="project__tools project__badges">
        <Avatar.Group>
          {project.tools.map((badge) => {
            const isNoIconInDB = badge === 'Redux' || badge === 'TypeScript';
            return (
              <Tooltip key={badge} title={badge} placement="top">
                <Avatar
                  size={40}
                  className="project__teammate project__badge"
                  alt={badge}
                  src={isNoIconInDB ? getToolIconByName(badge) as string : ''}
                  icon={!isNoIconInDB && getToolIconByName(badge)}
                  style={{
                    background: toolIconBackground,
                    border: `2px solid ${toolIconBorderColor}`
                  }}
                />
              </Tooltip>
            );
          })}
        </Avatar.Group>
      </div>
    </BadgeStyle>
  );
}

const TeammatesBadges: React.FC<IBadge> = ({
  project,
}) => {
  const allCollaborators = useCallbackEffect(
    [], getAllProjectCollaborators, ['rslang'],
  )?.data as ITeammate[];
  const personalGithub = allCollaborators && allCollaborators.find((person: ITeammate) => {
    return person.login === personalData.GITHUB_LOGIN;
  }) as ITeammate;
  const resultCollabs = project.isMoreThanOneCollaborator ? allCollaborators : [personalGithub];

  return (
    <BadgeStyle childrenCount={resultCollabs?.length || 0}>
      <Avatar.Group>
        {allCollaborators && allCollaborators.length && 
        (<div className="project__teammates project__badges">
          {resultCollabs.map((teammate) => {
            return (
              <Tooltip key={teammate.id} title={teammate.login} placement="top">
                <a href={teammate.html_url} target="_blank">
                  <Avatar
                    className="project__teammate project__badge"
                    src={teammate.avatar_url}
                    alt={teammate.login}
                  />
                </a>
              </Tooltip>
            );
          })}
        </div>)}
      </Avatar.Group>
    </BadgeStyle>
  );
}

export {
  LinksBadges,
  ToolsBadges,
  TeammatesBadges,
};
