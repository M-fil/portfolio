import styled from 'styled-components';

import { mediaQueries } from '../../../constants/constants';

const {
  labptopL,
  mediaLaptop,
  mediaTablet,
  mediaMobile,
  mediaMobileSmall,
} = mediaQueries;

interface IBadgeStyle {
  childrenCount?: number;
}

const BadgeStyle = styled('div')<IBadgeStyle>`
  .project__badges {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .project__badge {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;

    @media ${mediaTablet} {
      width: 20px;
      height: 20px;
    }
  }

  .project__tool {
    font-size: 2rem;
  }

  .project__links {
    display: flex;
    flex-wrap: wrap;

    margin-bottom: 20px;
    margin-top: 10px;
  }

  .project__link {
    font-size: 1.5rem;
    flex-grow: 1;
    width: 100%;

    @media ${mediaTablet} {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;

      font-size: 1.2rem;

      & span {
        font-size: 1rem;
        margin-left: 10px;
      }
    }

    & span {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: left;
    }

    & i {
      margin-left: 10px;
    }
  }

  .project__teammates {
    margin: 20px 0;
    justify-content: flex-start;
  }

  .project__teammate {
    width: 70px;
    height: 70px;
    margin: 5px;
  }

  .project__badge {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .project__tool {
    width: 60px;
    height: 60px;
  }
`;

export default BadgeStyle;
