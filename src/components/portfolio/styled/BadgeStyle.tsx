import styled from 'styled-components';

interface IBadgeStyle {
  childrenCount?: number;
}

const BadgeStyle = styled('div')<IBadgeStyle>`
  & .project__badges {
    display: flex;
    justify-content: space-between;
  }

  & .project__badge {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
  }

  & .teammate__image {
    width: 30px;
    height: 30px;
  }
`;

export default BadgeStyle;
